import {isValidSlug, isValidURL} from "@/lib/helpers";
import {revalidatePath} from "next/cache";
import type {CollectionAfterChangeHook, FieldHook} from "payload";
import type {CollectionConfig} from "payload";

const revalidateConcertPaths: CollectionAfterChangeHook = (args) => {
    revalidatePath(`/koncertek/[slug]`, "page");
    revalidatePath("/koncertek", "page");
    revalidatePath("/", "page");

    return args.doc;
};

const generateSlug: FieldHook = (context) => {
    const {data} = context;

    // eslint-disable-next-line
    // @ts-ignore
    const {date, displayName} = data;

    if (!date || !displayName) {
        throw new Error("date or displayName not defined");
    }

    const dateAsObject = new Date(date);
    const sanitizedDisplayName = displayName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();

    const value = `${sanitizedDisplayName}-${dateAsObject.toISOString().split("T")[0]}`;

    if (isValidSlug(value)) return value;

    throw new Error("Invalid slug format");
};

export const Concerts: CollectionConfig = {
    slug: "concerts",
    hooks: {
        afterChange: [revalidateConcertPaths],
    },
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
            name: "city",
            label: "Város",
            unique: false,
            required: true,
            maxLength: 255,
            minLength: 3
        },
        {
            type: "text",
            name: "slug",
            label: "Slug",
            unique: false,
            maxLength: 64,
            minLength: 3,
            hooks: {
                beforeChange: [generateSlug],
            },
            admin: {
                hidden: true,
            },
            access: {
                create: () => false,
                update: () => false,
            },
            // eslint-disable-next-line
            // @ts-ignore
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
            type: "checkbox",
            name: "hidden",
            label: "Elrejt",
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
