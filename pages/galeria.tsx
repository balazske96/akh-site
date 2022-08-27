import Layout from '../components/Layout/Layout';
import {GetStaticProps} from 'next';
import fs from 'fs';
import {GalleryPost} from '../types';
import styles from '../styles/Gallery.module.scss';
import Link from 'next/link';
import Head from 'next/head';

interface GalleryProps {
	posts: GalleryPost[];
}

export default function Gallery({posts}: GalleryProps) {

	return (
		<Layout>
			<Head>
				<title>Képgaléria</title>
			</Head>
			<div className={styles.container}>
				<h1>Képgaléria</h1>
				<div className={styles.postsContainer}>
					{posts.sort((a, b) => b.date - a.date).map((post) => (
						<Link key={post.title} href={post.slug}>
							<a
								className={styles.postBody}
								style={{backgroundImage: `url(${post.cover_src})`}}
							>
								<p className={styles.postTitle}>{post.card_title}</p>
							</a>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const posts: GalleryPost[] = [];


	fs.readdirSync('public/gallery', {withFileTypes: true})
		.filter(path => path.isDirectory())
		.map(dir => dir.name)
		.map(dir => {
			try {
				const rawJson = fs.readFileSync(`public/gallery/${dir}/meta.json`);
				const metaJson = JSON.parse(rawJson.toString());

				posts.push({
					date: metaJson.date,
					card_title: metaJson.card_title,
					title: metaJson.title,
					cover_src: `gallery/${dir}/${metaJson.cover}`,
					slug: `/galeria/${metaJson.slug}`
				});
			} catch (e) {
				console.log('Build failed: ' + e);
			}

		});

	return {
		props: {
			posts: posts
		}
	};
};