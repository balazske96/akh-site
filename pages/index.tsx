import React from 'react';
import Hero from '../components/PageSections/Home/Hero/Hero';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function Home(): React.ReactElement {

	return (
		<Layout footer={false} padding={false}>
			<Head>
				<title>A Király Halott | Hivatalos zenekari weboldal</title>
				<meta name="description" content="A Király Halott zenekar hivatalos honlapja"/>
			</Head>
			<Hero/>
		</Layout>
	);
}
