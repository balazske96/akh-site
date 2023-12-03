import type { TinaField } from 'tinacms';
export function concertsFields() {
	return [
		{
			type: 'string',
			name: 'display_name',
			label: 'Display Name',
			required: true,
		},
		{
			type: 'datetime',
			name: 'date',
			label: 'Date',
			required: true,
		},
		{
			type: 'string',
			name: 'city',
			label: 'City',
			required: true,
		},
		{
			type: 'string',
			name: 'location',
			label: 'Location',
			required: true,
		},
		{
			type: 'string',
			name: 'link_to_event',
			label: 'Link to event',
			required: true,
		},
		{
			type: 'string',
			name: 'link_to_ticket',
			label: 'Link to ticket',
		},
		{
			type: 'boolean',
			name: 'highlighted',
			label: 'Highlighted',
		},
	] as TinaField[];
}
