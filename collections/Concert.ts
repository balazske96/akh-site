import { isValidURL } from "@/lib/helpers";
import type { CollectionConfig } from "payload";

export const Concerts: CollectionConfig = {
  slug: "concerts",
  labels: {
    singular: "Koncert",
    plural: "Koncertek",
  },
  admin: {
    useAsTitle: "displayName",
  },
  fields: [
    {
      type: "date",
      name: "date",
      label: "Dátum",
      unique: false,
      required: true,
      admin: {
        date: {
          displayFormat: "yyyy. MMMM. dd",
        },
      },
    },
    {
      type: "text",
      name: "displayName",
      label: "Megjelenítési név",
      unique: true,
      required: true,
      maxLength: 64,
      minLength: 3,
    },
    {
      type: "text",
      name: "location",
      label: "Helyszín",
      unique: false,
      required: true,
      maxLength: 255,
      minLength: 3,
      admin: {
        description: "Pl. SZIN Fesztvál, Akvárium, stb.",
      },
    },
    {
      type: "text",
      name: "address",
      label: "Cím",
      unique: false,
      required: true,
      maxLength: 255,
      minLength: 3,
    },
    {
      type: "text",
      name: "ticketLink",
      label: "Jegy link",
      required: false,
      unique: true,
      minLength: 10,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value) => isValidURL(value) || "Nem megfelelő URL formátum",
    },
    {
      type: "text",
      name: "eventLink",
      label: "Esemény link",
      required: false,
      unique: true,
      minLength: 10,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value) => isValidURL(value) || "Nem megfelelő URL formátum",
    },
    {
      type: "checkbox",
      name: "highlighted",
      label: "Kiemelt",
      defaultValue: false,
      required: true,
    },
    {
      type: "upload",
      name: "image",
      label: "Kép",
      relationTo: "concert-header",
      unique: false,
      required: true,
    },
  ],
};
