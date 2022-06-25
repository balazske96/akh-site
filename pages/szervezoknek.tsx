import Layout from '../components/Layout/Layout';
import styles from '../styles/ForOrganiers.module.scss';
import Head from 'next/head';

export default function ForOrganizers() {
	return (
		<Layout>
			<Head>
				<title>Szervezőknek</title>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Szervezőknek</h1>
				<div className={styles.contactRow}>
					<div className={styles.contactDetails}>
						<h2>Koncertszervezés:</h2>
						<p>Szűcs Mihály</p>
						<p>
							Email: <a href="mailto:szm@koncertszervezo.hu">szm@koncertszervezo.hu</a>
						</p>
						<p>Tel: <a href="tel:+36209105312">+36209105312</a></p>
					</div>
					<div className={styles.contactDetails}>
						<h2>Turné menedzsment:</h2>
						<p>Berényi Kitti</p>
						<p>
							Email: <a href="mailto:kitti.akiralyhalott@gmail.com.hu">kitti.akiralyhalott@gmail.com</a>
						</p>
						<p>Tel: <a href="tel:+36704504436">+36704504436</a></p>
					</div>
				</div>
				<div className={styles.resources}>
					<ul>
						<li>
							<a href="/akh_technikai_rider_2022-06-02.pdf" target="_blank">Technikai Rider 🛠</a>
						</li>
						<li>
							<a href="/akh_catering_rider_2022-06-02.pdf" target="_blank">Catering Rider 🥪</a>
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
}