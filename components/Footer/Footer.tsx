import styles from './Footer.module.scss';
import SocialMediaIconContainer from './SocialMediaIconContainer/SocialMediaIconContainer';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Footer() {

	const router = useRouter();

	return (
		<footer className={styles.container}>
			<div className={styles.upperDivider}/>
			{router.asPath !== '/szervezoknek' &&
				<Link href="/szervezoknek"><a href="/szervezoknek">Szervezőknek 👈</a></Link>
			}
			<SocialMediaIconContainer/>
			<small className={styles.copyright}>Copyright 2022 @ A Király Halott</small>
		</footer>
	);
}