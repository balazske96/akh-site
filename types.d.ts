interface IConcert {
  displayName: string;
  venue: string;
  date: string;
  ticketLink?: string;
  eventLink?: string;
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
