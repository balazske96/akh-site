import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import styles from './Layout.module.scss';
import clsx from 'clsx';

interface LayoutProps {
	children: React.ReactNode;
	padding?: boolean;
	footer?: boolean;
	navbar?: boolean;
	heroIsActive?: boolean;
}

export default function Layout({
	children,
	footer = true,
	navbar = true,
	padding = true,
	heroIsActive = false,
}: LayoutProps) {
	const containerClassName = clsx({
		[styles.container]: true,
		[styles.padding]: padding,
	});

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" type="image/png" href="/favicon.png"></link>
				<title>A Király Halott</title>
			</Head>
			<div style={{ display: 'none' }}>
				A Király Halott egy 2017 óta létező pop-rock csapat. A
				weboldalon megtalálod zenéinket, képgalériánkat és a
				webshopunkat is.{'                        '}
			</div>
			<div className={containerClassName}>
				{navbar && <Navbar heroIsActive={heroIsActive} />}
				{children}
				{footer && <Footer />}
			</div>
		</>
	);
}
