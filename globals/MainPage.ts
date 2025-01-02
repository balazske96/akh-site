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
      defaultValue: "https://www.youtube.com/watch?v=A99MKasrGzk", // Mogorva (Akvárium)
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value) =>
        isValidYouTubeVideoURL(value) || "Nem megfelelő URL formátum",
    },
    {
      name: "google_gtm_id",
      defaultValue: "GTM-P2M24QSJ",
      type: "text",
      required: false,
      label: "Google GTM ID",
    },
  ],
};
