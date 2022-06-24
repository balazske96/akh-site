import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import styles from './Layout.module.scss';

interface LayoutProps {
	children: React.ReactNode;
	footer?: boolean;
	navbar?: boolean;
}

export default function Layout({children, footer = true, navbar = true}: LayoutProps) {

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
			<div className={styles.container}>
				{navbar && <Navbar/>}
				{children}
				{footer && <Footer/>}
			</div>
		</>
	);
}