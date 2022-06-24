import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className={styles.container}>
			<div className={styles.hoppa}>Hoppá!</div>
			<div className={styles.pageNotFound}>A keresett oldal nem található...</div>
			<Link href="/">
				<a href="/">Vissza a főoldalra</a>
			</Link>
		</div>
	);
}