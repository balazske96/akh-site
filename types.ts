export type Link = {
	title: string;
	href: string;
}

export type GalleryPost = {
	title: string;
	card_title: string;
	cover_src: string;
	slug: string;
	date: number;
}

export type SocialMediaAccount = {
	name: string;
	account_url: string;
	image_src: string;
	image_alt: string;
}

export type Concert = {
	display_name: string;
	city: string;
	date: number;
	link_to_ticket?: string;
	link_to_event: string;
	location: string;
}

export enum StreamingPlatform {
	YOUTUBE = 'YOUTUBE',
	SPOTIFY = 'SPOTIFY',
	APPLE_MUSIC = 'APPLE_MUSIC',
	DEEZER = 'DEEZER',
}