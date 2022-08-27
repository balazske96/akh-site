import styles from './Hero.module.scss';

export default function Hero() {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src="/transparent_logo.png" alt="Zenekari Logó"/>
			</div>
			<div className={styles.textContainer}>
				<p>
					Üdvözlünk <br/><img alt="Zenekari logó" className={styles.nameLogoInText} src="/akh_name_logo_white.png"/><br/>hivatalos
					honlapján!
				</p>
			</div>
		</div>
	);
}