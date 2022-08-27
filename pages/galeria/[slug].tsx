import Layout from '../../components/Layout/Layout';
import styles from '../../styles/GallerySubPage.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import { ParsedUrlQuery } from 'querystring';
import path from 'path';
import Masonry from '@mui/lab/Masonry';
import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import useTimeout from '../../hooks/useTimeout';

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
	const [isDelayPassed, setIsDelayPassed] = useState<boolean>(false);

	const viewImage = (imageSrc: string) => {
		setSelectedImage(imageSrc);
		setIsImageOpened(true);
	};

	useTimeout(() => setIsDelayPassed(true), 1000);

	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={styles.container}>
				<h1>{title}</h1>
				<div className={styles.photoContainer}>
					<Masonry columns={isMobile ? 2 : 3} spacing={1}>
						{photos.map((photoSrc: string, index: number) => (
							<div
								key={photoSrc}
								onClick={() => viewImage(photoSrc)}
							>
								{isDelayPassed ? (
									// With this "hacky" solution we can use both lazy loading and masonry layout
									<img
										width={200}
										height={300}
										className={styles.image}
										loading="lazy"
										title={`${title} photo ${index + 1}`}
										src={photoSrc}
										alt={`${title} photo ${index + 1}`}
									/>
								) : (
									<div className={styles.imagePlaceholder} />
								)}
							</div>
						))}
					</Masonry>
				</div>
			</div>
			<Modal open={isImageOpened} onClose={() => setIsImageOpened(false)}>
				<div className={styles.viewedImageContainer}>
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
	let photos: string[] = [];
	let title = '';

	fs.readdirSync('public/gallery', { withFileTypes: true })
		.filter((dir) => dir.isDirectory())
		.map((dir) => {
			try {
				const rawJson = fs.readFileSync(
					`public/gallery/${dir.name}/meta.json`
				);

				if (JSON.parse(rawJson.toString()).slug === slug) {
					title = JSON.parse(rawJson.toString()).title;
					photos = fs
						.readdirSync(`public/gallery/${dir.name}`, {
							withFileTypes: true,
						})
						.filter((file) => path.extname(file.name) !== '.json')
						.map((photo) => `/gallery/${dir.name}/${photo.name}`);
				}
			} catch (e) {
				console.log(e);
			}
		});

	return {
		props: {
			title: title,
			photos: photos,
		},
	};
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
	const paths: { params: { slug: string } }[] = [];

	try {
		fs.readdirSync('public/gallery', { withFileTypes: true })
			.filter((dir) => dir.isDirectory())
			.map((dir) => {
				const rawJson = fs.readFileSync(
					`public/gallery/${dir.name}/meta.json`
				);
				const slug = JSON.parse(rawJson.toString()).slug;
				paths.push({ params: { slug } });
			});
	} catch (e) {
		console.log('Build failed: ' + e);
	}

	return { paths: paths, fallback: false };
};
