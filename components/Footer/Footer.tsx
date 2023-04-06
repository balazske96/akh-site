import styles from './Footer.module.scss';
import SocialMediaIconContainer from './SocialMediaIconContainer/SocialMediaIconContainer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function Footer() {
	const router = useRouter();

	const hasImpressum = useMemo(
		() => router.asPath !== '/impresszum',
		[router.asPath]
	);
	const hasOrganizer = useMemo(
		() => router.asPath !== '/szervezoknek',
		[router.asPath]
	);

	return (
		<footer className={styles.container}>
			<div className={styles.upperDivider} />
			<div className={styles.linkContainer}>
				{hasOrganizer && <Link href="/szervezoknek">Szervezőknek</Link>}
				{hasImpressum && hasOrganizer && (
					<div className={styles.dotSeparator} />
				)}
				{hasImpressum && <Link href="/impresszum">Impresszum</Link>}
			</div>
			<SocialMediaIconContainer />
			<small className={styles.copyright}>
				Copyright 2023 @ A Király Halott
			</small>
		</footer>
	);
}
