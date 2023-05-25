import clsx from 'clsx';
import styles from './Navbar.module.scss';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();

	const className = clsx({
		[styles.dynamicHeroIsActive]: router.asPath !== '/',
		[styles.container]: true,
	});

	return (
		<nav className={className}>
			<img
				onClick={() => router.push('/')}
				className={styles.logo}
				src="/transparent_logo.png"
				alt="Zenekari Logó"
			/>
			<NavbarLinks />
		</nav>
	);
}
