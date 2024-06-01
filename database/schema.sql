SET client_min_messages TO warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA "public" CASCADE;

CREATE SCHEMA "public";

CREATE TABLE "public"."users"(
  "userId" serial,
  "username" text UNIQUE NOT NULL,
  "hashedPassword" text NOT NULL, -- Store hashed password, never plaintext
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now(),
  PRIMARY KEY ("userId")
);

CREATE TABLE "public"."plants"(
  "plantId" serial,
  "plantName" text NOT NULL,
  "cycle" text NOT NULL,
  "watering" text NOT NULL,
  "photoUrl" varchar NOT NULL,
  "sunlight" text NOT NULL,
  "userId" integer NOT NULL,
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now(),
  PRIMARY KEY ("plantId")
);

CREATE TABLE "public"."garden"(
  "gardenId" serial,
  "userId" int NOT NULL,
  "plantId" int NOT NULL,
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now(),
  PRIMARY KEY ("gardenId"),
  FOREIGN KEY ("userId") REFERENCES "users"("userId"),
  FOREIGN KEY ("plantId") REFERENCES "plants"("plantId")
);

CREATE TABLE "public"."weather"(
  "weatherId" serial,
  "userId" int NOT NULL,
  "weatherData" jsonb, -- Store the weather data as JSONB
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now(),
  PRIMARY KEY ("weatherId"),
  FOREIGN KEY ("userId") REFERENCES "users"("userId")
);

ALTER TABLE "public"."plants" ADD FOREIGN KEY ("userId") REFERENCES "public"."users" ("userId");
