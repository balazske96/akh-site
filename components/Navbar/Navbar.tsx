import styles from './Navbar.module.scss';
import NavbarLinks from './NavbarLinks/NavbarLinks';

export default function Navbar() {

	return (
		<nav className={styles.container}>
			<img className={styles.logo} src="/transparent_logo.png" alt="Zenekari Logó"/>
			<NavbarLinks />
		</nav>
	);
}