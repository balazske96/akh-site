import styles from './Navbar.module.scss';
import NavbarLinks from './NavbarLinks/NavbarLinks';

export default function Navbar() {

	return (
		<nav className={styles.container}>
			<NavbarLinks />
		</nav>
	);
}