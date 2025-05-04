import { isValidYouTubeVideoURL } from '@/lib/helpers';
import { GlobalConfig } from 'payload';

const mainPageImageTypeValidation = {
  or: [
    {
      mimeType: {
        equals: 'image/webp',
      },
    },
    {
      mimeType: {
        equals: 'image/jpeg',
      },
    },
    {
      mimeType: {
        equals: 'image/jpg',
      },
    },
  ],
};

const numberOfImagesOnMainPage = 9;

export const MainPage: GlobalConfig = {
  slug: 'main-page',
  label: 'Fő oldal',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Általános',
          fields: [
            {
              name: 'youtube_video_url',
              label: 'YouTube videó URL',
              type: 'text',
              required: true,
              defaultValue: 'https://www.youtube.com/embed/A99MKasrGzk', // Mogorva (Akvárium)
              // eslint-disable-next-line
              // @ts-ignore
              validate: (value) =>
                isValidYouTubeVideoURL(value) || 'Nem megfelelő URL formátum',
            },
            {
              name: 'webshop_product_ids',
              label: 'Webshop termék azonosítók',
              required: true,
              type: 'array',
              fields: [
                {
                  name: 'id',
                  type: 'number',
                  label: 'Azonosító',
                  unique: true,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Képek',
          fields: [...Array(numberOfImagesOnMainPage).keys()].flatMap(
            (number) => [
              {
                label: `Kép ${number + 1}`,
                name: `image_${number + 1}`,
                type: 'upload',
                relationTo: 'files',
                unique: false,
                required: true,
                filterOptions: mainPageImageTypeValidation,
              },
              {
                label: `Kép ${number + 1} (mobil)`,
                name: `image_${number + 1}_mobile`,
                type: 'upload',
                relationTo: 'files',
                unique: false,
                required: true,
                filterOptions: mainPageImageTypeValidation,
              },
            ]
          ),
        },
      ],
    },
  ],
};
