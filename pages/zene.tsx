import Layout from '../components/Layout/Layout';
import styles from '../styles/Music.module.scss';
import platforms from '../content/streaming_platforms.json';
import Head from 'next/head';
import MusicCard from '../components/MusicCard/MusicCard';
import {StreamingPlatform} from '../types';

export default function Music() {
	return (
		<Layout>
			<Head>
				<title>Zene</title>
			</Head>
			<div className={styles.container}>
				<h2>
					Válaszd ki kedvenc platformodat!
				</h2>
				<div className={styles.musicPlayerContainer}>
					{platforms.map((platform) => (
						<MusicCard
							key={platform.label}
							label={platform.label}
							href={platform.href}
							platform={platform.platform as StreamingPlatform}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
}