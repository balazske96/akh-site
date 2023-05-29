import { useMemo } from 'react';
import { Hero } from '../../types';
import styles from './DynamicHero.module.scss';
import { useMediaQuery } from '@mui/material';
import LinkButton from '../Button/LinkButton';

interface DynamicHeroProps {
	hero: Hero;
}

export default function DynamicHero({ hero }: DynamicHeroProps) {
	const isTablet = useMediaQuery('(max-width:1220px)');

	const src = useMemo(() => {
		return isTablet
			? hero.backgroundVideoMobile
			: hero.backgroundVideoDesktop;
	}, [isTablet]);

	const fallbackImageSrc = useMemo(() => {
		return isTablet ? hero.fallbackImageMobile : hero.fallbackImageDesktop;
	}, [isTablet]);

	const opacityStyle = useMemo(() => {
		return hero.backgroundOpacityPercentage
			? { opacity: hero.backgroundOpacityPercentage / 100 }
			: {};
	}, [hero.backgroundOpacityPercentage]);

	return (
		<div className={styles.container}>
			{!!hero.titleImage && (
				<img
					draggable={false}
					className={styles.titleImage}
					src={hero.titleImage}
				/>
			)}
			{!!hero.title && <h2 className={styles.title}>{hero.title}</h2>}
			<h3 className={styles.subtitle}>{hero.subtitle}</h3>
			<video
				className={styles.video}
				style={opacityStyle}
				autoPlay
				loop
				muted
				playsInline
				controls={false}
				poster={fallbackImageSrc}
				src={src}
			/>
			<LinkButton
				className={styles.link}
				href={hero.link}
				color={'white'}
				target={'_blank'}
			>
				{hero.linkLabel}
			</LinkButton>
		</div>
	);
}
