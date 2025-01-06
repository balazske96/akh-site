import { type CollectionConfig } from "payload";
import { APIError } from "payload";

export const ConcertHeaders: CollectionConfig = {
  slug: "concert-header",
  labels: {
    singular: "Koncert borító",
    plural: "Koncert borítók",
  },
  access: {
    read: () => true,
  },
  admin: {
    enableRichTextRelationship: false,
    hidden: true,
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Név",
      required: true,
      unique: true,
    },
  ],
  hooks: {
    beforeChange: [
      (req) => {
        const image = req.data;
        // Make sure uploaded image is big enough
        if ((image && image.width < 1920) || (image && image.height < 1080)) {
          throw new APIError(
            "A képnek 1920px széles és 1080px magasnak kell lennie",
            420
          );
        }
      },
    ],
  },
  upload: {
    staticDir: "storage/concert-header",
    mimeTypes: ["image/webp", "image/jpeg", "image/jpg"],
  },
};
