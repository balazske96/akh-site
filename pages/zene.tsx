import Layout from '../components/Layout/Layout';
import styles from '../styles/Music.module.scss';
import Head from 'next/head';

export default function Music() {
	return (
		<Layout>
			<Head>
				<title>Zene</title>
			</Head>
			<div className={styles.container}>
				<h2>
					Hallgass meg minket az alábbi lejátszó segítségével vagy kattings <a
						href="https://open.spotify.com/artist/6YVFO1kvJ7kxbYpbIZLXhJ?si=2NftFZWTTQ27zEeYhDZg7A"
						target="_blank" rel="noreferrer">ide</a> a
					közvetlen Spotify
					eléréséhez!
				</h2>
				<div className={styles.musicPlayerContainer}>
					<iframe
						style={{borderRadius: '12px'}}
						src="https://open.spotify.com/embed/artist/6YVFO1kvJ7kxbYpbIZLXhJ?utm_source=generator"
						width="100%"
						height="450"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					/>
				</div>
			</div>
		</Layout>
	);
}