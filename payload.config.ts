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

import { Concerts } from "./collections/Concert";
import { ConcertHeaders } from "./collections/ConcertHeaders";
import { Users } from "./collections/Users";
import { MainPage } from "./globals/MainPage";
import { Pages } from "./collections/Pages";
import { Files } from "./collections/Media";
import { Footer } from "./globals/Footer";
import { StreamingProviders } from "./collections/StreamingProviders";
import { StreamingProviderLogo } from "./collections/StreamingProviderLogo";

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
