import Layout from '../components/Layout/Layout';
import styles from '../styles/Concerts.module.scss';
import {Concert} from '../types';
import concerts from '../content/concerts.json';
import Head from 'next/head';
import ConcertCard from '../components/ConcertCard/ConcertCard';

export default function Concerts() {
	return (
		<Layout>
			<Head>
				<title>Koncertek</title>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Koncertek</h1>
				{concerts.length < 1 && (
					<>
						<p className={styles.description}>
							Jelenleg a koncertjeink szervezés alatt állnak...
							<br/>
							Nézz be ide később!🔥
						</p>
					</>
				)}
				{concerts.length >= 1 &&
					<>
						<p className={styles.description}>Legközelebb az alábbi koncerteken találkozhatsz velünk 👇</p>
						<div className={styles.concertCardContainer}>
							{concerts.map((concert: Concert) => (
								<ConcertCard
									key={concert.date}
									displayName={concert.display_name}
									linkToEvent={concert.link_to_event}
									linkToTicket={concert.link_to_ticket}
									date={concert.date}
									city={concert.city}
									location={concert.location}
								/>
							))}
						</div>
					</>
				}
			</div>
		</Layout>
	);
}