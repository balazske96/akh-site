import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "concerts" ADD COLUMN "city" varchar;
  ALTER TABLE "concerts" ADD COLUMN "slug" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "concerts" DROP COLUMN IF EXISTS "city";
  ALTER TABLE "concerts" DROP COLUMN IF EXISTS "slug";`)
}
