import Layout from '../components/Layout/Layout';
import { GetStaticProps } from 'next';
import { GalleryPost } from '../types';
import styles from '../styles/Gallery.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import {
	getDirectoriesMetadata,
	getGalleryDirectories,
} from '../lib/gallery/GalleryClient';

interface GalleryProps {
	concerts: GalleryPost[];
}

export default function Gallery({ concerts }: GalleryProps) {
	return (
		<Layout>
			<Head>
				<title>Képgaléria</title>
			</Head>
			<div className={styles.container}>
				<h1>Képgaléria</h1>
				<div className={styles.postsContainer}>
					{concerts
						.sort((a, b) => b.date - a.date)
						.map((concert) => (
							<Link
								key={concert.title}
								href={`/galeria/${concert.slug}`}
							>
								<a
									className={styles.postBody}
									style={{
										backgroundImage: `url(${concert.cover_src})`,
									}}
								>
									<p className={styles.postTitle}>
										{concert.card_title}
									</p>
								</a>
							</Link>
						))}
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const directories = await getGalleryDirectories();
	let galleryPosts: GalleryPost[] = [];

	for (const directory of directories) {
		const metaData = await getDirectoriesMetadata(directory);
		galleryPosts = [...galleryPosts, metaData];
	}

	return {
		props: {
			concerts: galleryPosts,
		},
	};
};
