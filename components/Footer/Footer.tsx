import styles from './Footer.module.scss';
import SocialMediaIconContainer from '../SocialMediaIconContainer/SocialMediaIconContainer';

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.upperDivider}/>
			<SocialMediaIconContainer />
			<small className={styles.copyright}>Copyright 2022 @ A Király Halott</small>
		</footer>
	);
}