import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "concerts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"display_name" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"ticket_link" varchar,
  	"event_link" varchar,
  	"highlighted" boolean DEFAULT false NOT NULL,
  	"hidden" boolean DEFAULT false NOT NULL,
  	"image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "concert_header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"content" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "files" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "streaming_providers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "streaming_provider_logo" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"concerts_id" integer,
  	"concert_header_id" integer,
  	"pages_id" integer,
  	"files_id" integer,
  	"streaming_providers_id" integer,
  	"streaming_provider_logo_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "main_page_webshop_product_ids" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" numeric PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "main_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"youtube_video_url" varchar DEFAULT 'https://www.youtube.com/embed/A99MKasrGzk' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL,
  	"display_name" varchar NOT NULL,
  	"external" boolean DEFAULT false
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "concerts" ADD CONSTRAINT "concerts_image_id_concert_header_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."concert_header"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "streaming_providers" ADD CONSTRAINT "streaming_providers_image_id_streaming_provider_logo_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."streaming_provider_logo"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_concerts_fk" FOREIGN KEY ("concerts_id") REFERENCES "public"."concerts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_concert_header_fk" FOREIGN KEY ("concert_header_id") REFERENCES "public"."concert_header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_files_fk" FOREIGN KEY ("files_id") REFERENCES "public"."files"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_streaming_providers_fk" FOREIGN KEY ("streaming_providers_id") REFERENCES "public"."streaming_providers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_streaming_provider_logo_fk" FOREIGN KEY ("streaming_provider_logo_id") REFERENCES "public"."streaming_provider_logo"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_page_webshop_product_ids" ADD CONSTRAINT "main_page_webshop_product_ids_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_links" ADD CONSTRAINT "footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX IF NOT EXISTS "concerts_display_name_idx" ON "concerts" USING btree ("display_name");
  CREATE UNIQUE INDEX IF NOT EXISTS "concerts_ticket_link_idx" ON "concerts" USING btree ("ticket_link");
  CREATE UNIQUE INDEX IF NOT EXISTS "concerts_event_link_idx" ON "concerts" USING btree ("event_link");
  CREATE INDEX IF NOT EXISTS "concerts_image_idx" ON "concerts" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "concerts_updated_at_idx" ON "concerts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "concerts_created_at_idx" ON "concerts" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "concert_header_name_idx" ON "concert_header" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "concert_header_updated_at_idx" ON "concert_header" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "concert_header_created_at_idx" ON "concert_header" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "concert_header_filename_idx" ON "concert_header" USING btree ("filename");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_title_idx" ON "pages" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "files_name_idx" ON "files" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "files_updated_at_idx" ON "files" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" USING btree ("filename");
  CREATE UNIQUE INDEX IF NOT EXISTS "streaming_providers_name_idx" ON "streaming_providers" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "streaming_providers_link_idx" ON "streaming_providers" USING btree ("link");
  CREATE UNIQUE INDEX IF NOT EXISTS "streaming_providers_image_idx" ON "streaming_providers" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "streaming_providers_updated_at_idx" ON "streaming_providers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "streaming_providers_created_at_idx" ON "streaming_providers" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "streaming_provider_logo_name_idx" ON "streaming_provider_logo" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "streaming_provider_logo_updated_at_idx" ON "streaming_provider_logo" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "streaming_provider_logo_created_at_idx" ON "streaming_provider_logo" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "streaming_provider_logo_filename_idx" ON "streaming_provider_logo" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_concerts_id_idx" ON "payload_locked_documents_rels" USING btree ("concerts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_concert_header_id_idx" ON "payload_locked_documents_rels" USING btree ("concert_header_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_files_id_idx" ON "payload_locked_documents_rels" USING btree ("files_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_streaming_providers_id_idx" ON "payload_locked_documents_rels" USING btree ("streaming_providers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_streaming_provider_logo_id_idx" ON "payload_locked_documents_rels" USING btree ("streaming_provider_logo_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "main_page_webshop_product_ids_order_idx" ON "main_page_webshop_product_ids" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_page_webshop_product_ids_parent_id_idx" ON "main_page_webshop_product_ids" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_links_order_idx" ON "footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_links_parent_id_idx" ON "footer_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_links_href_idx" ON "footer_links" USING btree ("href");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_links_display_name_idx" ON "footer_links" USING btree ("display_name");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "concerts" CASCADE;
  DROP TABLE "concert_header" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "files" CASCADE;
  DROP TABLE "streaming_providers" CASCADE;
  DROP TABLE "streaming_provider_logo" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "main_page_webshop_product_ids" CASCADE;
  DROP TABLE "main_page" CASCADE;
  DROP TABLE "footer_links" CASCADE;
  DROP TABLE "footer" CASCADE;`)
}
