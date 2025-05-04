import { isValidSlug, isValidURL } from '@/lib/helpers';
import { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Lábléc',
  fields: [
    {
      name: 'links',
      type: 'array',
      label: 'Linkek',
      fields: [
        {
          name: 'href',
          type: 'text',
          required: true,
          unique: true,
          label: 'URL',
          // eslint-disable-next-line
          // @ts-ignore
          validate: (value) =>
            isValidURL(value) ||
            isValidSlug(value) ||
            'Nem megfelelő URL formátum',
        },
        {
          name: 'displayName',
          required: true,
          unique: true,
          type: 'text',
          label: 'Megjelenítés',
        },
        {
          name: 'external',
          type: 'checkbox',
          label: 'Külső link',
          defaultValue: false,
        },
      ],
    },
  ],
};
