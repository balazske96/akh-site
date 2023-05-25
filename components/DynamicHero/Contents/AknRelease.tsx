import LinkButton from '../../Button/LinkButton';
import styles from './Contents.module.scss';

export default function AknRelease() {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={'/heros/akn-title.png'} />
			<h2>Legújabb dalunk már a YouTube-on!👇</h2>
			<LinkButton
				className={styles.padding}
				color="white"
				href="https://youtu.be/LknN2Hji9MU"
			>
				Meghallgatom
			</LinkButton>
		</div>
	);
}
