import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import styles from '../styles/Bio.module.scss';
import {GetStaticProps} from 'next';
import fs from 'fs';
import {marked} from 'marked';
import fm from 'front-matter';

export default function Bio({content}: { content: string }) {
	return (
		<Layout>
			<Head>
				<title>Bio</title>
			</Head>
			<div className={styles.container} dangerouslySetInnerHTML={{__html: content}}>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const rawMarkdown = fs.readFileSync('content/biography.md');
	const html = marked.parse(fm(rawMarkdown.toString()).body);

	return {
		props: {content: html}
	};
};