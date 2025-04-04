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
    image: {
        url: string | undefined;
        width: number | undefined;
        height: number | undefined;
    }
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
