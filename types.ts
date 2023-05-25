export type Link = {
	title: string;
	href: string;
};

export type GalleryPost = {
	title: string;
	card_title: string;
	cover_src: string;
	slug: string;
	date: number;
};

export type SocialMediaAccount = {
	name: string;
	account_url: string;
	image_src: string;
	image_alt: string;
};

export type Concert = {
	display_name: string;
	city: string;
	date: string;
	link_to_ticket?: string;
	link_to_event: string;
	location: string;
};

export enum StreamingPlatform {
	YOUTUBE = 'YOUTUBE',
	SPOTIFY = 'SPOTIFY',
	APPLE_MUSIC = 'APPLE_MUSIC',
	DEEZER = 'DEEZER',
}

export type ShopProductImage = {
	id: number;
	date_created: string;
	date_created_gmt: string;
	date_modified: string;
	date_modified_gmt: string;
	src: string;
	name: string;
	alt: string;
};

export type ShopProduct = {
	id: number;
	name: string;
	slug: string;
	permalink: string;
	description: string;
	price: string;
	onSale: boolean;
	regularPrice: string;
	salePrice: string;
	catalogVisibility: 'visible' | 'catalog' | 'search' | 'hidden';
	images: ShopProductImage[];
	menuOrder: number;
	priceHtml: string;
};

export type HeroVideo = { desktopVideoSrc: string; mobileVideoSrc: string };
export type HeroImage = { src: string };
export type HeroMedia = HeroVideo | HeroImage;
