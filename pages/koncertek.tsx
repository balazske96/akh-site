import Layout from '../components/Layout/Layout';
import styles from '../styles/Concerts.module.scss';
import Head from 'next/head';

export default function Concerts() {
	return (
		<Layout>
			<Head>
				<title>Koncertek</title>
			</Head>
			<div className={styles.container}>
				Feltöltés alatt...
			</div>
		</Layout>
	);
}