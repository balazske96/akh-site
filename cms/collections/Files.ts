import type { CollectionConfig } from 'payload';

export const Files: CollectionConfig = {
  slug: 'files',
  labels: {
    singular: 'Fájl',
    plural: 'Fájlok',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Név',
      required: true,
      unique: true,
    },
  ],
  upload: {
    staticDir: 'storage/files',
    mimeTypes: [
      'image/webp',
      'image/jpeg',
      'image/jpg',
      'video/mp4',
      'video/webm',
      'application/pdf',
    ],
  },
};
