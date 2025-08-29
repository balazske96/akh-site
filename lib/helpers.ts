import { fetchFilamentResource } from './filament';

export async function getStreamingProviders(): Promise<IStreamingProvider[]> {
  return (
    (await fetchFilamentResource('/streaming-providers', [
      'streaming-providers',
    ])) as IFilamentStreamingProvider[]
  ).map((provider) => ({
    ...provider,
    name: provider.display_name,
    imageUrl: provider.logo_absolute_url,
  }));
}

export async function getFooterLinks(): Promise<ISiteLink[]> {
  const data = (await fetchFilamentResource(
    '/globals/footer-links',
    ['footer-links'],
    'force-cache'
  )) as IFilamentFooterLink[];

  return data.map((link) => ({
    ...link,
    displayName: link.display_name,
  }));
}

export async function getSocialMediaPlatforms(): Promise<
  ISocialMediaPlatform[]
> {
  const data = (await fetchFilamentResource(
    '/social-media-platforms',
    ['social-media-platforms'],
    'force-cache'
  )) as IFilamentSocialMediaPlatform[];

  return data.map((provider) => {
    const { display_name, link, logo_absolute_url } = provider;

    return {
      link,
      displayName: display_name,
      logo: logo_absolute_url,
    };
  });
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

export async function getGlobalData() {
  return (await fetchFilamentResource('/globals', [
    'globals',
  ])) as IFilamentGlobalData;
}

export async function getMainPageYouTubeLink() {
  return (await getGlobalData()).youtube_video_url;
}

export async function getContactPageDetails(
  secret?: string
): Promise<IContactPage> {
  return await fetchFilamentResource(
    `/contact-page${secret ? '?p=' + secret : ''}`,
    [`contact-page${secret ? '-with-secret-' + secret : ''}`]
  );
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
    image_base_url,
  } = await getGlobalData();

  return {
    image_1: `${image_base_url}${image_1}`,
    image_2: `${image_base_url}${image_2}`,
    image_3: `${image_base_url}${image_3}`,
    image_4: `${image_base_url}${image_4}`,
    image_5: `${image_base_url}${image_5}`,
    image_6: `${image_base_url}${image_6}`,
    image_7: `${image_base_url}${image_7}`,
    image_8: `${image_base_url}${image_8}`,
    image_9: `${image_base_url}${image_9}`,
    image_1_mobile: `${image_base_url}${image_1_mobile}`,
    image_2_mobile: `${image_base_url}${image_2_mobile}`,
    image_3_mobile: `${image_base_url}${image_3_mobile}`,
    image_4_mobile: `${image_base_url}${image_4_mobile}`,
    image_5_mobile: `${image_base_url}${image_5_mobile}`,
    image_6_mobile: `${image_base_url}${image_6_mobile}`,
    image_7_mobile: `${image_base_url}${image_7_mobile}`,
    image_8_mobile: `${image_base_url}${image_8_mobile}`,
    image_9_mobile: `${image_base_url}${image_9_mobile}`,
  };
}
