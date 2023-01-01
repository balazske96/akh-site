import { useRef, useState } from 'react';
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
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const imageCounter = useRef<number>(0);

	const imageLoaded = () => {
		imageCounter.current += 1;
		if (imageCounter.current >= concerts.length) {
			setIsLoading(false);
		}
	};

	return (
		<Layout>
			<Head>
				<title>Képgaléria</title>
			</Head>
			<div className={styles.container}>
				<h1>Képgaléria</h1>
				<div style={{ display: isLoading ? 'block' : 'none' }}>
					Egy pillanat...
				</div>
				<div
					className={styles.postsContainer}
					style={{ display: isLoading ? 'none' : 'grid' }}
				>
					{concerts
						.sort((a, b) => b.date - a.date)
						.map((concert) => (
							<Link
								key={concert.title}
								href={`/galeria/${concert.slug}`}
							>
								<a className={styles.postBody}>
									<img
										className={styles.postImage}
										src={concert.cover_src}
										onLoad={imageLoaded}
									/>
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
		revalidate: false,
		props: {
			concerts: galleryPosts,
		},
	};
};
