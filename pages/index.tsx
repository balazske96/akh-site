import React from 'react';
import Hero from '../components/PageSections/Home/Hero/Hero';
import Head from 'next/head';

export default function Home(): React.ReactElement {

	return (
		<>
			<Head>
				<title>A Király Halott | Főoldal</title>
			</Head>
			<Hero/>
		</>
	);
}
