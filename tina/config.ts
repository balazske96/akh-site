import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.HEAD || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
	branch,
	clientId: (process.env.NEXT_PUBLIC_TINA_CMS_CLIENT_ID as string) ?? '',
	token: (process.env.TINA_CMS_TOKEN as string) ?? '',
	client: { skip: true },
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	schema: {
		collections: [
			{
				format: 'md',
				label: 'Bigoraphy',
				name: 'bigoraphy',
				path: 'content',
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				match: {
					include: 'biography',
				},
				fields: [
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body of Document',
						description: 'This is the markdown body',
						isBody: true,
					},
				],
			},
			{
				label: 'Concerts',
				name: 'concerts',
				path: 'content/concerts',
				format: 'json',
				fields: [
					{
						type: 'datetime',
						name: 'date',
						label: 'Date',
						description: 'Date of the concert',
					},
					{
						type: 'string',
						name: 'display_name',
						label: 'Display name',
						description: 'How to display the concert',
					},
					{
						type: 'string',
						name: 'city',
						label: 'City',
						description: 'City of the concert',
					},
					{
						type: 'string',
						name: 'location',
						label: 'Location',
						description: 'Location of the concert',
					},
					{
						type: 'string',
						name: 'link_to_event',
						label: 'Link to event',
						description: 'Facebook event link',
					},
					{
						type: 'string',
						name: 'link_to_ticket',
						label: 'Link to ticket',
						description: 'Link of the ticket selling portal',
					},
				],
			},
			{
				label: 'Hero',
				name: 'hero',
				format: 'json',
				path: 'content',
				match: {
					include: 'hero',
				},
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				fields: [
					{
						type: 'boolean',
						label: 'Active',
						name: 'active',
						description: 'You can active or deactive the hero',
					},
					{
						type: 'image',
						label: 'TitleImage',
						name: 'titleImage',
						description:
							'The image to display as title (band name or song title)',
					},
					{
						type: 'string',
						label: 'Title',
						name: 'title',
					},
					{
						type: 'string',
						label: 'Subtitle',
						name: 'subtitle',
						description:
							'some further information under the title, for example (Sond is available on YouTube)',
					},
					{
						type: 'string',
						label: 'Link',
						name: 'link',
						description:
							'The link where the button should redirect the user',
					},
					{
						type: 'string',
						label: 'Link Label',
						name: 'linkLabel',
						description: 'The text inside the button',
					},
					{
						type: 'image',
						label: 'Background Image (Desktop)',
						name: 'backgroundImageDesktop',
						description:
							// eslint-disable-next-line quotes
							"Image for desktop devices if the hero's background is an image",
					},
					{
						type: 'image',
						label: 'Background Image (Mobile)',
						name: 'backgroundImageMobile',
						description:
							// eslint-disable-next-line quotes
							"Image for mobile devices if the hero's background is an image",
					},
					{
						type: 'image',
						label: 'Fallback Image (Desktop)',
						name: 'fallbackImageDesktop',
						description:
							'Fallback image for desktop devices. This is important because some device wont let you autoplay',
					},
					{
						type: 'image',
						label: 'Fallback Image (Mobile)',
						name: 'fallbackImageMobile',
						description:
							'Fallback image for mobile devices. This is important because some device wont let you autoplay',
					},
					{
						type: 'image',
						label: 'Background Video (Desktop)',
						name: 'backgroundVideoDesktop',
						description:
							// eslint-disable-next-line quotes
							"Image for desktop devices if the hero's background is a video",
					},
					{
						type: 'image',
						label: 'Background Video (Mobile)',
						name: 'backgroundVideoMobile',
						description:
							// eslint-disable-next-line quotes
							"Image for mobile devices if the hero's background is a video",
					},
					{
						type: 'number',
						label: 'Background Opacity (percentage)',
						name: 'backgroundOpacityPercentage',
						description: 'Opacity of the background image or video',
					},
				],
			},
		],
	},
});
