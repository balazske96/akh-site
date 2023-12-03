import styles from './ConcertCard.module.scss';
import { beautifyDateLabel } from '../../helpers';
import LinkButton from '../Button/LinkButton';
import clsx from 'clsx';

interface ConcertCardProps {
	displayName: string;
	city: string;
	date: string;
	linkToTicket?: string;
	linkToEvent: string;
	location: string;
	highlighted?: boolean;
}

export default function ConcertCard({
	city,
	linkToTicket,
	linkToEvent,
	date,
	location,
	highlighted = false,
}: ConcertCardProps) {
	return (
		<div
			className={clsx({
				[styles.container]: true,
				[styles.highlighted]: highlighted,
			})}
		>
			<span className={styles.dateContainer}>
				{beautifyDateLabel(date)}
			</span>
			<div className={styles.cityContainer}>{city}</div>
			<div className={styles.locationContainer}>{location}</div>
			<div className={styles.actionsContainer}>
				{linkToTicket && (
					<LinkButton
						color={'white'}
						target={'_blank'}
						href={linkToTicket}
					>
						{'Jegyek'}
					</LinkButton>
				)}
				<LinkButton
					color={'black'}
					target={'_blank'}
					href={linkToEvent}
				>
					{'Esemény'}
				</LinkButton>
			</div>
		</div>
	);
}
