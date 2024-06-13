import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import {
  ClientError,
  errorMiddleware,
  defaultMiddleware,
} from './lib/index.js';

// eslint-disable-next-line no-unused-vars -- Remove when used
const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

async function updateGuestUserPassword() {
  const username = 'Guest';
  const plainPassword = 'GuestPassword';
  const hashedPassword = await argon2.hash(plainPassword);

  const sql = `
    INSERT INTO "users" ("username", "hashedPassword")
    VALUES ($1, $2)
    ON CONFLICT ("username")
    DO UPDATE SET "hashedPassword" = EXCLUDED."hashedPassword";
  `;

  const params = [username, hashedPassword];

  try {
    await db.query(sql, params);
    console.log('Guest user password updated successfully');
  } catch (err) {
    console.error('Error updating guest user password:', err);
  }
}

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.get('/api/auth/check-username', async (req, res, next) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }
    const sql = 'select 1 from "users" where "username" = $1';
    const params = [username];
    const result = await db.query(sql, params);
    const isAvailable = result.rowCount === 0;
    res.status(200).json({ isAvailable });
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    if (req.body.username === 'Guest') {
      req.body.username = 'Guest';
      req.body.password = 'GuestPassword';
    }
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `
      select "userId",
            "hashedPassword"
        from "users"
      where "username" = $1
    `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'invalid login');
    }
    const { userId, hashedPassword } = user;
    if (!(await argon2.verify(hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    }
    const payload = { userId, username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    res.json({ token, userId, user: payload });
  } catch (err) {
    console.error('Error during sign-in:', err);
    next(err);
  }
});

app.post('/api/addplants', async (req, res, next) => {
  try {
    const { plantId, plantName, cycle, watering, photoUrl, sunlight, userId } =
      req.body;
    if (!plantId || !userId) {
      throw new ClientError(401, 'plantId and userId are required fields.');
    }
    const sql = `
    INSERT INTO "plants" ("plantId", "plantName", "cycle", "watering", "photoUrl", "sunlight", "userId")
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `;
    const params = [
      plantId,
      plantName,
      cycle,
      watering,
      photoUrl,
      sunlight,
      userId,
    ];
    const result = await db.query(sql, params);
    const [plant] = result.rows;

    res.status(201).json(plant);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/user-plants/:userId/:plantId', async (req, res) => {
  const userId = Number(req.params.userId);
  const plantId = Number(req.params.plantId);

  try {
    const sql = `DELETE FROM "plants" WHERE "userId" = $1 AND "plantId" = $2 RETURNING *`;
    const params = [userId, plantId];
    const result = await db.query(sql, params);

    res.status(200).json({ message: 'Plant deleted successfully' });
  } catch (error) {
    console.error('Error deleting plant', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/user-plants/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;

    const sql = `Select * From "plants" Where "userId" = $1`;

    const params = [userId];
    const result = await db.query(sql, params);
    const userPlants = result.rows;
    res.json(userPlants);
  } catch (error) {
    console.error('Error fetching user plants:', error);
    next(error);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Create React App server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(defaultMiddleware(reactStaticDir));

app.use(errorMiddleware);

updateGuestUserPassword().then(() => {
  app.listen(process.env.PORT, () => {
    process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
  });
});
