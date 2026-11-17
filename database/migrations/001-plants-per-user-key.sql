-- Let each user add any plant once, instead of each plant only once overall.
-- Run once against an existing database: psql "$DATABASE_URL" -f <this file>
-- (Fresh databases created from schema.sql already have this shape.)

BEGIN;

-- Unused table that depended on the old single-column key.
DROP TABLE IF EXISTS "public"."garden";

ALTER TABLE "public"."plants" DROP CONSTRAINT "plants_pkey";
ALTER TABLE "public"."plants" ADD PRIMARY KEY ("userId", "plantId");

-- plantId comes from the Perenual API, not an auto-increment counter.
ALTER TABLE "public"."plants" ALTER COLUMN "plantId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS "public"."plants_plantId_seq";

COMMIT;
