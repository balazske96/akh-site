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
import useImageLoader from '../hooks/useImageLoader';
import ImageLoader from '../components/ImageLoder/ImageLoader';
import LoadableImage from '../components/LoadableImage/LoadableImage';

interface GalleryProps {
	concerts: GalleryPost[];
}

export default function Gallery({ concerts }: GalleryProps) {
	const { isLoading, currentPercentage, imageLoaded } = useImageLoader(
		concerts.length
	);

	return (
		<Layout>
			<Head>
				<title>Képgaléria</title>
			</Head>
			<div className={styles.container}>
				<h1>Képgaléria</h1>
				{isLoading && <ImageLoader percentage={currentPercentage} />}
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
								className={styles.postBody}
							>
								<LoadableImage
									className={styles.postImage}
									src={concert.cover_src}
									onLoadingComplete={imageLoaded}
									onError={imageLoaded}
									onLoad={imageLoaded}
								/>
								<p className={styles.postTitle}>
									{concert.card_title}
								</p>
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
