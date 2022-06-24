import styles from './Navbar.module.scss';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import {useRouter} from 'next/router';

export default function Navbar() {

	const router = useRouter();

	return (
		<nav className={styles.container}>
			{router.asPath !== '/' && (
				<img
					onClick={() => router.push('/')}
					className={styles.logo}
					src="/transparent_logo.png"
					alt="Zenekari Logó"
				/>
			)}
			<NavbarLinks/>
		</nav>
	);
}