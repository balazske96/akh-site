import styles from './ConcertCard.module.scss';
import {convertTimestampToDate} from '../../helpers';
import LinkButton from '../Button/LinkButton';

interface ConcertCardProps {
	displayName: string;
	city: string;
	date: number;
	linkToTicket?: string;
	linkToEvent: string;
	location: string;
}

export default function ConcertCard({city, linkToTicket, linkToEvent, date, location}: ConcertCardProps) {

	return (
		<div className={styles.container}>
			<span className={styles.dateContainer}>
				{convertTimestampToDate(date)}
			</span>
			<div className={styles.cityContainer}>
				{city}
			</div>
			<div className={styles.locationContainer}>
				{location}
			</div>
			<div className={styles.actionsContainer}>
				{linkToTicket && <LinkButton href={linkToTicket} label={'Jegyek'} newTab={true} color={'white'}/>}
				<LinkButton href={linkToEvent} label={'Esemény'} newTab={true} color={'black'}/>
			</div>
		</div>
	);
}