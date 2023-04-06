import Layout from '../../components/Layout/Layout';
import styles from '../../styles/GallerySubPage.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Masonry from '@mui/lab/Masonry';
import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useCallback, useEffect, useState } from 'react';
import {
	getDirectoriesMetadata,
	getGalleryDirectories,
	getImagesInDirectory,
} from '../../lib/gallery/GalleryClient';
import useImageLoader from '../../hooks/useImageLoader';
import ImageLoader from '../../components/ImageLoder/ImageLoader';
import LoadableImage from '../../components/LoadableImage/LoadableImage';

interface GallerySubPageProps {
	title: string;
	photos: string[];
}

interface IParams extends ParsedUrlQuery {
	slug: string;
}

export default function GallerySubPage({ title, photos }: GallerySubPageProps) {
	const isMobile = useMediaQuery('(max-width:425px) ');
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [isImageOpened, setIsImageOpened] = useState<boolean>(false);

	const { isLoading, currentPercentage, imageLoaded } = useImageLoader(
		photos.length
	);

	const viewImage = (imageSrc: string) => {
		setSelectedImage(imageSrc);
		setIsImageOpened(true);
	};

	const onKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (selectedImage !== null) {
				for (let index = 0; index < photos.length; index++) {
					if (photos[index] === selectedImage) {
						if (event.key === 'ArrowRight') {
							if (index < photos.length - 1) {
								setSelectedImage(photos[index + 1]);
							}
						}
						if (event.key === 'ArrowLeft') {
							if (index > 0) {
								setSelectedImage(photos[index - 1]);
							}
						}
						break;
					}
				}
			}
		},
		[selectedImage]
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown, false);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [onKeyDown]);

	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={styles.container}>
				<h1>{title}</h1>
				{isLoading && <ImageLoader percentage={currentPercentage} />}
				<div className={styles.photoContainer}>
					<Masonry
						columns={isMobile ? 2 : 3}
						spacing={1}
						style={{ display: isLoading ? 'none' : 'flex' }}
					>
						{photos.map((photoSrc: string, index: number) => (
							<div
								key={photoSrc}
								onClick={() => viewImage(photoSrc)}
							>
								<LoadableImage
									width={200}
									height={300}
									className={styles.image}
									onLoad={imageLoaded}
									onError={imageLoaded}
									onLoadingComplete={imageLoaded}
									title={`${title} photo ${index + 1}`}
									src={photoSrc}
									alt={`${title} photo ${index + 1}`}
								/>
							</div>
						))}
					</Masonry>
				</div>
			</div>
			<Modal open={isImageOpened} onClose={() => setIsImageOpened(false)}>
				<div
					className={styles.viewedImageContainer}
					onClick={() => setIsImageOpened(false)}
				>
					<img
						alt={selectedImage ?? ''}
						className={styles.viewedImage}
						src={selectedImage ?? ''}
					/>
				</div>
			</Modal>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<GallerySubPageProps> = async ({
	params,
}) => {
	const { slug } = params as IParams;
	const metaData = await getDirectoriesMetadata(slug);
	const photos: string[] = await getImagesInDirectory(slug);
	const title = metaData.title;

	return {
		props: {
			title: title,
			photos: photos,
		},
	};
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
	const paths = await getGalleryDirectories();
	const realPaths: { params: { slug: string } }[] = paths.map((path) => ({
		params: { slug: path },
	}));

	return { paths: realPaths, fallback: false };
};
