import styles from './Hero.module.scss';

export default function Hero() {
	return (
		<div className={styles.container}>
			<img className={styles.logo} src="/transparent_logo.png" alt="Zenekari Logó" />
		</div>
	);
}