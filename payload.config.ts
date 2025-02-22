// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { en } from "@payloadcms/translations/languages/en";
import { hu } from "@payloadcms/translations/languages/hu";

import { Concerts } from "./cms/collections/Concert";
import { ConcertHeaders } from "./cms/collections/ConcertHeaders";
import { Users } from "./cms/collections/Users";
import { MainPage } from "./cms/globals/MainPage";
import { Pages } from "./cms/collections/Pages";
import { Files } from "./cms/collections/Files";
import { Footer } from "./cms/globals/Footer";
import { StreamingProviders } from "./cms/collections/StreamingProviders";
import { StreamingProviderLogo } from "./cms/collections/StreamingProviderLogo";
import { migrations } from "./migrations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  i18n: {
    fallbackLanguage: "hu",
    supportedLanguages: { en, hu },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [MainPage, Footer],
  collections: [
    Users,
    Concerts,
    ConcertHeaders,
    Pages,
    Files,
    StreamingProviders,
    StreamingProviderLogo,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    migrationDir: "migrations",
    push: false,
    prodMigrations: migrations,
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
