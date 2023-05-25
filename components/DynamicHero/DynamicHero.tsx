import { useCallback } from 'react';
import { HeroMedia, HeroVideo } from '../../types';
import styles from './DynamicHero.module.scss';
import { useMediaQuery } from '@mui/material';

interface DynamicHeroProps {
	media: HeroMedia;
	mediaOpacityPercentage?: number;
	content?: React.ReactElement;
}

export default function DynamicHero({
	media,
	content,
	mediaOpacityPercentage,
}: DynamicHeroProps) {
	const isTablet = useMediaQuery('(max-width:1220px)');

	const isVideo = useCallback(() => {
		return (
			!!(media as HeroVideo).desktopVideoSrc &&
			!!(media as HeroVideo).mobileVideoSrc
		);
	}, [media]);

	if (isVideo()) {
		return (
			<div className={styles.container}>
				{!!content && content}
				<video
					className={styles.video}
					style={
						mediaOpacityPercentage
							? { opacity: mediaOpacityPercentage / 100 }
							: {}
					}
					autoPlay={true}
					loop={true}
					muted={true}
					controls={false}
					src={
						isTablet
							? (media as HeroVideo).mobileVideoSrc
							: (media as HeroVideo).desktopVideoSrc
					}
				/>
			</div>
		);
	}

	return null;
}
