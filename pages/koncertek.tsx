import Layout from '../components/Layout/Layout';
import styles from '../styles/Concerts.module.scss';
import { Concert } from '../types';
import Head from 'next/head';
import ConcertCard from '../components/ConcertCard/ConcertCard';
import { GetStaticProps } from 'next';
import fs from 'fs';
import moment from 'moment';

export default function Concerts({ concerts }: { concerts: Concert[] }) {
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
							<br />
							Nézz be ide később!🔥
						</p>
					</>
				)}
				{concerts.length >= 1 && (
					<>
						<p className={styles.description}>
							Legközelebb az alábbi koncerteken találkozhatsz
							velünk 👇
						</p>
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
				)}
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	let concerts: Concert[] = [];

	try {
		const concertFiles = fs.readdirSync('content/concerts/');
		concertFiles.map((concertFile) => {
			const rawJson = fs.readFileSync(`content/concerts/${concertFile}`);
			const jsonFormat = JSON.parse(rawJson.toString()) as Concert;
			concerts.push(jsonFormat);
		});

		concerts = concerts.sort((a, b) =>
			moment(a.date).isBefore(moment(b.date)) ? -1 : 1
		);
	} catch (e) {
		console.log(e);
	}

	return {
		props: { concerts: concerts },
	};
};
