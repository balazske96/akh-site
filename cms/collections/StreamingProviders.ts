import type { CollectionConfig } from "payload";

import { isValidURL } from "@/lib/helpers";

export const StreamingProviders: CollectionConfig = {
  slug: "streaming-providers",
  labels: {
    singular: "Streaming szolgáltató",
    plural: "Streaming szolgáltatók",
  },
  fields: [
    {
      name: "name",
      label: "Név",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
      unique: true,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value) => isValidURL(value) || "Nem megfelelő URL formátum",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "streaming-provider-logo",
      label: "Kép",
      unique: true,
      required: true,
    },
  ],
};
