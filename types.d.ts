interface IConcert {
  id: number;
  displayName: string;
  venue: string;
  date: string;
  address: string;
  city: string;
  ticketLink?: string;
  eventLink?: string;
  slug: string;
  hidden: boolean;
  highlighted: boolean;
  image: IImage & {
    mobileUrl: string | undefined;
    tabletUrl: string | undefined;
    desktopUrl: string | undefined;
  };
}

interface IFilamentConcert {
  id: number;
  date: string;
  display_name: string;
  location: string;
  city: string;
  address: string;
  ticket_link: string;
  event_link: string;
  highlighted: boolean;
  hidden: boolean;
  image: string;
  slug: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  image_absolute_url: string;
}

interface IFilamentStreamingProvider {
  display_name: string;
  external: string;
  link: string;
  logo: string;
  logo_absolute_url: string;
}

interface IFilamentGlobalData {
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  image_6: string;
  image_7: string;
  image_8: string;
  image_9: string;
  image_1_mobile: string;
  image_2_mobile: string;
  image_3_mobile: string;
  image_4_mobile: string;
  image_5_mobile: string;
  image_6_mobile: string;
  image_7_mobile: string;
  image_8_mobile: string;
  image_9_mobile: string;
  youtube_video_url: string;
  concert_contact_name: string;
  concert_contact_phone: string;
  concert_contact_email: string;
  tour_contact_name: string;
  tour_contact_phone: string;
  tour_contact_email: string;
  presskit_link: string;
  webshop_product_ids: { value: string }[];
  image_base_url: string;
}

interface IFilamentSecretDocument {
  display_name: string;
  document_path: string;
  signed_url: string;
}

interface IImage {
  url: string | undefined;
  width: number | undefined;
  height: number | undefined;
}

interface IWebshopProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
}

interface IStreamingProvider {
  name: string;
  imageUrl: string;
  link: string;
}

interface ISiteLink {
  href: string;
  displayName: string;
  external?: boolean;
}

interface IWoocommerceProduct {
  id: number;
  name: string;
  permalink: string;
  price: string;
  images: IWoocommerceImage[];
}

interface IWoocommerceImage {
  id: number;
  src: string;
  name: string;
}

interface IContactPage {
  general: {
    concert_contact_name: string;
    concert_contact_phone: string;
    concert_contact_email: string;
    tour_contact_name: string;
    tour_contact_phone: string;
    tour_contact_email: string;
    presskit_link: string;
  };
  secret_docs: IFilamentSecretDocument[];
}

interface IContactInfo {
  email: string;
  phone: string;
  name: string;
}

interface ISecretInformation {
  display: string;
  link: string;
}

interface IResponsiveImageProp {
  mobilSrc: string;
  desktopSrc: string;
}

interface IFilamentFooterLink {
  href: string;
  display_name: string;
  external: boolean;
}
