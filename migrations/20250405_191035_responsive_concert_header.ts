import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "concert_header" ADD COLUMN "sizes_mobile_url" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_mobile_width" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_mobile_height" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_mobile_mime_type" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_mobile_filesize" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_mobile_filename" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_tablet_url" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_tablet_width" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_tablet_height" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_tablet_mime_type" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_tablet_filesize" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_tablet_filename" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_desktop_url" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_desktop_width" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_desktop_height" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_desktop_mime_type" varchar;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_desktop_filesize" numeric;
  ALTER TABLE "concert_header" ADD COLUMN "sizes_desktop_filename" varchar;
  CREATE INDEX IF NOT EXISTS "concert_header_sizes_mobile_sizes_mobile_filename_idx" ON "concert_header" USING btree ("sizes_mobile_filename");
  CREATE INDEX IF NOT EXISTS "concert_header_sizes_tablet_sizes_tablet_filename_idx" ON "concert_header" USING btree ("sizes_tablet_filename");
  CREATE INDEX IF NOT EXISTS "concert_header_sizes_desktop_sizes_desktop_filename_idx" ON "concert_header" USING btree ("sizes_desktop_filename");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "concert_header_sizes_mobile_sizes_mobile_filename_idx";
  DROP INDEX IF EXISTS "concert_header_sizes_tablet_sizes_tablet_filename_idx";
  DROP INDEX IF EXISTS "concert_header_sizes_desktop_sizes_desktop_filename_idx";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_mobile_url";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_mobile_width";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_mobile_height";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_mobile_mime_type";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_mobile_filesize";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_mobile_filename";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_tablet_url";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_tablet_width";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_tablet_height";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_tablet_mime_type";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_tablet_filesize";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_tablet_filename";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_desktop_url";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_desktop_width";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_desktop_height";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_desktop_mime_type";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_desktop_filesize";
  ALTER TABLE "concert_header" DROP COLUMN IF EXISTS "sizes_desktop_filename";`);
}
