import styles from './MusicCard.module.scss';
import clsx from 'clsx';
import {StreamingPlatform} from '../../types';

interface MusicCardProps {
	label: string,
	href: string,
	platform: StreamingPlatform
}

export default function MusicCard({label, href, platform}: MusicCardProps) {

	const containerClassName = clsx({
		[styles.container]: true,
		[styles.spotify]: platform === StreamingPlatform.SPOTIFY,
		[styles.youtube]: platform === StreamingPlatform.YOUTUBE,
		[styles.appleMusic]: platform === StreamingPlatform.APPLE_MUSIC,
		[styles.deezer]: platform === StreamingPlatform.DEEZER
	});

	return (
		<a href={href} target="_blank" rel="noreferrer" className={containerClassName}>
			{/*<img className={styles.logo} src="/transparent_logo.png" alt="Zenekari Logó"/>*/}
			<div className={styles.label}>{label}</div>
		</a>
	);
}