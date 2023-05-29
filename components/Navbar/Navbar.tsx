import clsx from 'clsx';
import styles from './Navbar.module.scss';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export interface NavbarProps {
	heroIsActive?: boolean;
}

export default function Navbar({ heroIsActive = false }: NavbarProps) {
	const { asPath: path, push } = useRouter();

	const navbarShouldBeTransparent: boolean = useMemo(() => {
		return heroIsActive && path === '/';
	}, [heroIsActive, path]);

	const navbarShouldHaveShadow: boolean = useMemo(() => {
		return path !== '/' || (!heroIsActive && path === '/');
	}, [heroIsActive, path]);

	const navbarShouldContainLogo: boolean = useMemo(() => {
		return heroIsActive || path !== '/';
	}, [heroIsActive, path]);

	const className = clsx({
		[styles.background]: !navbarShouldBeTransparent,
		[styles.container]: true,
		[styles.shadow]: navbarShouldHaveShadow,
	});

	return (
		<nav className={className}>
			{navbarShouldContainLogo && (
				<img
					onClick={() => push('/')}
					className={styles.logo}
					src="/transparent_logo.png"
					alt="Zenekari Logó"
				/>
			)}
			<NavbarLinks />
		</nav>
	);
}
