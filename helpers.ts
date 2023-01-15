import moment from 'moment';

export const monthsTranslationObject = {
	1: 'Január',
	2: 'Február',
	3: 'Március',
	4: 'Április',
	5: 'Május',
	6: 'Június',
	7: 'Július',
	8: 'Augusztus',
	9: 'Szeptember',
	10: 'Október',
	11: 'November',
	12: 'December',
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const momentJsMonthToHungarianMonth = (month: number) =>
	monthsTranslationObject[month];

export const convertTimestampToDate = (date: number) => {
	const dateAsMoment = moment(date * 1000);
	const year = dateAsMoment.format('YYYY');
	const month = momentJsMonthToHungarianMonth(
		Number(dateAsMoment.format('M'))
	);
	const day = dateAsMoment.format('D');

	return `${year}. ${month} ${day}`;
};

export const beautifyDateLabel = (date: string) => {
	return convertTimestampToDate(moment(date).unix());
};
