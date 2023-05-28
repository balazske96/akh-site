import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import DynamicHero from '../components/DynamicHero/DynamicHero';
import { GetStaticProps } from 'next';
import hero from '../content/hero.json';
import { Hero } from '../types';
import DefaultHero from '../components/DynamicHero/DefaultHero/DefaultHero';

export interface HomeProps {
	hero: Hero;
}

export default function Home({ hero }: HomeProps): React.ReactElement {
	return (
		<Layout footer={false} padding={false} heroIsActive={hero.active}>
			<Head>
				<title>A Király Halott | Hivatalos zenekari weboldal</title>
				<meta
					name="description"
					content="A Király Halott zenekar hivatalos honlapja"
				/>
			</Head>
			{hero.active ? <DynamicHero hero={hero} /> : <DefaultHero />}
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
	return {
		props: {
			hero: { ...(hero as Hero) },
		},
	};
};
