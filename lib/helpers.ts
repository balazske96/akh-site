import {
  getContactPageData,
  getFooterData as getFooterDataFromPayload,
} from './payload';
import { getMainPageData } from './payload';
import { getStreamingProviders as getStreamingProvidersFromPayload } from './payload';
import { File, StreamingProviderLogo } from '@/payload-types';

export async function getStreamingProviders(): Promise<IStreamingProvider[]> {
  const data = await getStreamingProvidersFromPayload();

  return data.docs.map((provider) => {
    return {
      name: provider.name,
      imageUrl: (provider.image as StreamingProviderLogo).url ?? '',
      link: provider.link,
    };
  });
}

export async function getFooterLinks(): Promise<ISiteLink[]> {
  const footerData = await getFooterDataFromPayload();

  return (
    footerData.links?.map(({ href, displayName, external }) => ({
      href,
      displayName,
      external: external ?? false,
    })) ?? []
  );
}

export function isValidURL(url: string): boolean {
  const urlRegex =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w.%~-]*)*(\?.*)?(#.*)?$/;

  return urlRegex.test(url);
}

export function isValidYouTubeVideoURL(url: string): boolean {
  const youtubeUrlRegex =
    /^https:\/\/(www\.)?youtube\.com\/embed\/[\w-]{11}(\?.*)?$/;

  return youtubeUrlRegex.test(url);
}

export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  return slugRegex.test(slug);
}

export function isValidHunPhone(phone: string): boolean {
  const phoneRegex = /^\+36\d{9}$/;

  return phoneRegex.test(phone);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

export function convertStringToSlug(val: string): string {
  return val
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase();
}

export function convertDateStringToHumanReadableString(date: string) {
  const dateObject = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateObject.toLocaleDateString('hu-HU', options);
}

export async function getMainPageYouTubeLink() {
  return (await getMainPageData()).youtube_video_url;
}

export async function getContactPageDetails(): Promise<IContactPage> {
  const contactPagePayloadData = await getContactPageData();

  return {
    secretLinksPassword: contactPagePayloadData.secret_links_password,
    concertContact: {
      email: contactPagePayloadData.concert_contact_email,
      phone: contactPagePayloadData.concert_contact_phone,
      name: contactPagePayloadData.concert_contact_name,
    },
    tourContact: {
      email: contactPagePayloadData.tour_contact_email,
      phone: contactPagePayloadData.tour_contact_phone,
      name: contactPagePayloadData.tour_contact_name,
    },
    pressKitLink: contactPagePayloadData.presskit_link,
    secretLinks:
      contactPagePayloadData.secret_links?.map(
        (l) =>
          ({
            display: l.display ?? '',
            link: (l.document as File).url ?? '',
          }) as ISecretInformation
      ) ?? [],
  };
}

export async function getMainPageImages() {
  const {
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_1_mobile,
    image_2_mobile,
    image_3_mobile,
    image_4_mobile,
    image_5_mobile,
    image_6_mobile,
    image_7_mobile,
    image_8_mobile,
    image_9_mobile,
  } = await getMainPageData();

  return {
    image_1: (image_1 as File)?.url,
    image_2: (image_2 as File)?.url,
    image_3: (image_3 as File)?.url,
    image_4: (image_4 as File)?.url,
    image_5: (image_5 as File)?.url,
    image_6: (image_6 as File)?.url,
    image_7: (image_7 as File)?.url,
    image_8: (image_8 as File)?.url,
    image_9: (image_9 as File)?.url,
    image_1_mobile: (image_1_mobile as File)?.url,
    image_2_mobile: (image_2_mobile as File)?.url,
    image_3_mobile: (image_3_mobile as File)?.url,
    image_4_mobile: (image_4_mobile as File)?.url,
    image_5_mobile: (image_5_mobile as File)?.url,
    image_6_mobile: (image_6_mobile as File)?.url,
    image_7_mobile: (image_7_mobile as File)?.url,
    image_8_mobile: (image_8_mobile as File)?.url,
    image_9_mobile: (image_9_mobile as File)?.url,
  };
}
