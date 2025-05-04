import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "contact_page_secret_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"display" varchar,
  	"document_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"concert_contact_name" varchar NOT NULL,
  	"concert_contact_email" varchar NOT NULL,
  	"concert_contact_phone" varchar NOT NULL,
  	"tour_contact_name" varchar NOT NULL,
  	"tour_contact_email" varchar NOT NULL,
  	"tour_contact_phone" varchar NOT NULL,
  	"presskit_link" varchar NOT NULL,
  	"secret_links_password" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "contact_page_secret_links" ADD CONSTRAINT "contact_page_secret_links_document_id_files_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contact_page_secret_links" ADD CONSTRAINT "contact_page_secret_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "contact_page_secret_links_order_idx" ON "contact_page_secret_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "contact_page_secret_links_parent_id_idx" ON "contact_page_secret_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "contact_page_secret_links_document_idx" ON "contact_page_secret_links" USING btree ("document_id");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contact_page_secret_links" CASCADE;
  DROP TABLE "contact_page" CASCADE;`);
}
