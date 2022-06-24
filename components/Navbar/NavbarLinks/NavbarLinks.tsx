import Hamburger from 'hamburger-react';
import styles from './NavbarLinks.module.scss';
import Link from 'next/link';
import links from '../../../content/navbar_links.json';
import {Link as LinkType} from '../../../types';
import clsx from 'clsx';
import {Drawer, useMediaQuery} from '@mui/material';
import {useState} from 'react';
import {useRouter} from 'next/router';

export default function NavbarLinks() {
	const isTablet = useMediaQuery('(max-width:768px)');
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
	const router = useRouter();

	const computedClassName = clsx({
		[styles.container]: true,
		[styles.laptopContainer]: !isTablet,
		[styles.tabletContainer]: isTablet
	});

	const content = links.map((link: LinkType) =>
		<Link key={link.title} href={link.href}>
			<a
				className={clsx({
					[styles.link]: true,
					[styles.activeLink]: router.asPath === link.href
				})}
				href={link.href}
			>
				{link.title}
			</a>
		</Link>
	);

	return (
		<div className={computedClassName}>
			{!isTablet && content}
			{isTablet &&
				<>
					<Hamburger toggled={isMenuOpened} toggle={setIsMenuOpened}/>
					<Drawer anchor="right" open={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
						<div className={styles.drawerContentContainer}>
							{content}
						</div>
					</Drawer>
				</>
			}
		</div>
	);
}