import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = 'new-cms';
// process.env.HEAD || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 'main';

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
		],
	},
});
