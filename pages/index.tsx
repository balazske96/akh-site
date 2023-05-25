import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import DynamicHero from '../components/DynamicHero/DynamicHero';
import AknRelease from '../components/DynamicHero/Contents/AknRelease';

export default function Home(): React.ReactElement {
	return (
		<Layout footer={false} padding={false}>
			<Head>
				<title>A Király Halott | Hivatalos zenekari weboldal</title>
				<meta
					name="description"
					content="A Király Halott zenekar hivatalos honlapja"
				/>
			</Head>
			<DynamicHero
				media={{
					mobileVideoSrc: '/heros/akn-hero-mobile.mp4',
					desktopVideoSrc: '/heros/akn-hero-desktop.mp4',
				}}
				mediaOpacityPercentage={60}
				content={<AknRelease />}
			/>
		</Layout>
	);
}
