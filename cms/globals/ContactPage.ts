import { isValidEmail, isValidHunPhone, isValidURL } from '@/lib/helpers';
import { GlobalConfig } from 'payload';

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Kapcsolat oldal',
  fields: [
    {
      name: 'concert_contact_name',
      label: 'Koncertszervezés név',
      type: 'text',
      required: true,
    },
    {
      name: 'concert_contact_email',
      label: 'Koncertszervezés email',
      type: 'text',
      required: true,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value: string) =>
        isValidEmail(value) || 'Nem megfelelő email formátum',
    },
    {
      name: 'concert_contact_phone',
      label: 'Koncertszervezés telefonszám',
      type: 'text',
      required: true,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value: string) =>
        isValidHunPhone(value) || 'Nem megfelelő telefonszám formátum',
    },
    {
      name: 'tour_contact_name',
      label: 'Turnémenedzsment neve',
      type: 'text',
      required: true,
    },
    {
      name: 'tour_contact_email',
      label: 'Turnémenedzsment email',
      type: 'text',
      required: true,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value: string) =>
        isValidEmail(value) || 'Nem megfelelő email formátum',
    },
    {
      name: 'tour_contact_phone',
      label: 'Turnémenedzsment telefonszám',
      type: 'text',
      required: true,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value: string) =>
        isValidHunPhone(value) || 'Nem megfelelő telefonszám formátum',
    },
    {
      name: 'presskit_link',
      label: 'Presskit link',
      type: 'text',
      required: true,
      // eslint-disable-next-line
      // @ts-ignore
      validate: (value: string) =>
        isValidURL(value) || 'Nem megfelelő URL formátum',
    },
    {
      name: 'secret_links',
      label: 'Titkos linkek',
      type: 'array',
      fields: [
        {
          name: 'display',
          label: 'Megjelenítés',
          type: 'text',
        },
        {
          name: 'document',
          label: 'documentum',
          type: 'upload',
          relationTo: 'files',
          unique: false,
          required: true,
          filterOptions: {
            mimeType: { equals: 'application/pdf' },
          },
        },
      ],
    },
    {
      name: 'secret_links_password',
      label: 'Titkos linkek jelszava',
      type: 'text',
      required: true,
    },
  ],
};
