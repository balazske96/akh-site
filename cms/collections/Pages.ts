import type { CollectionConfig } from "payload";

import { convertStringToSlug } from "@/lib/helpers";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Oldal",
    plural: "Aloldalak",
  },
  admin: {},
  fields: [
    {
      name: "title",
      type: "text",
      label: "Cím",
      required: true,
      unique: true,
    },
    {
      name: "slug",
      type: "text",
      label: "URL",
      admin: {
        readOnly: true,
        description:
          "Automatikusan generálva a cím alapján. Pl: 'Ez az én aloldalam' -> 'ez-az-en-aloldalam'",
      },
      index: true,
      hooks: {
        // eslint-disable-next-line
        // @ts-ignore
        beforeValidate: [({ data }) => convertStringToSlug(data["title"])],
      },
    },
    {
      name: "content",
      label: "Tartalom",
      type: "richText",
      required: true,
    },
  ],
};
