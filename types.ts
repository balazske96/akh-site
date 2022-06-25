export type Link = {
	title: string;
	href: string;
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