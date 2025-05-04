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
  concertContact: IContactInfo;
  tourContact: IContactInfo;
  pressKitLink: string;
  secretLinks: ISecretInformation[];
  secretLinksPassword: string;
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
