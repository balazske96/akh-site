import Layout from '../components/Layout/Layout';
import styles from '../styles/Contact.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';

const riderPassword = process.env.NEXT_PUBLIC_RIDER_PASSWORD;

export default function ForOrganizers() {
	const {
		isReady,
		query: { p },
	} = useRouter();

	return (
		<Layout>
			<Head>
				<title>Kapcsolat</title>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Kapcsolat</h1>
				<div className={styles.contactRow}>
					<div className={styles.contactDetails}>
						<h2>Koncertszervezés:</h2>
						<p>Szűcs Mihály</p>
						<p>
							Email:{' '}
							<a href="mailto:szm@koncertszervezo.hu">
								szm@koncertszervezo.hu
							</a>
						</p>
						<p>
							Tel: <a href="tel:+36209105312">+36209105312</a>
						</p>
					</div>
					<div className={styles.contactDetails}>
						<h2>Turné menedzsment:</h2>
						<p>Botos Gábor</p>
						<p>
							Email:{' '}
							<a href="mailto:zenekar@akiralyhalott.hu">
								zenekar@akiralyhalott.hu
							</a>
						</p>
						<p>
							Tel: <a href="tel:‭+36302864229‬">+36302864229</a>
						</p>
					</div>
				</div>
				<div className={styles.pressContentContainer}>
					<a
						href="https://drive.google.com/drive/folders/1EyNLOOOxMJ8eHgYRuGlQ6YIcDJEW6ct7?usp=drive_link"
						className={styles.pressContentLink}
						target="_blank"
						rel="noreferrer"
					>
						Sajtó anyag 🗞
					</a>
				</div>
				{isReady && !!p && p === riderPassword && (
					<div className={styles.resources}>
						<ul>
							<li>
								<a href="/akh-tech-rider.pdf" target="_blank">
									Technikai Rider 🛠
								</a>
							</li>
							<li>
								<a
									href="/akh-catering-rider.pdf"
									target="_blank"
								>
									Catering Rider 🥪
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</Layout>
	);
}
