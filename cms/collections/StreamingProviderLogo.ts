import type { CollectionConfig } from 'payload';

export const StreamingProviderLogo: CollectionConfig = {
  slug: 'streaming-provider-logo',
  labels: {
    singular: 'Streaming szolgáltató logó',
    plural: 'Streaming szolgáltató logók',
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
      type: 'text',
      name: 'name',
      label: 'Név',
      required: true,
      unique: true,
    },
  ],
  upload: {
    staticDir: 'storage/streaming-provider-logos',
    mimeTypes: ['image/webp', 'image/jpeg', 'image/jpg'],
  },
};
