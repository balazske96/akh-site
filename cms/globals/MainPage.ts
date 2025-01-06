import { isValidYouTubeVideoURL } from "@/lib/helpers";
import { GlobalConfig } from "payload";

export const MainPage: GlobalConfig = {
  slug: "main-page",
  label: "Fő oldal",
  fields: [
    {
      name: "youtube_video_url",
      label: "YouTube videó URL",
      type: "text",
      required: true,
      defaultValue: "https://www.youtube.com/embed/A99MKasrGzk", // Mogorva (Akvárium)
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value) =>
        isValidYouTubeVideoURL(value) || "Nem megfelelő URL formátum",
    },
    {
      name: "webshop_product_ids",
      label: "Webshop termék azonosítók",
      required: true,
      type: "array",
      fields: [
        {
          name: "id",
          type: "number",
          label: "Azonosító",
          unique: true,
          required: true,
        },
      ],
    },
  ],
};
