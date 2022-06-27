import Layout from '../../components/Layout/Layout';
import styles from '../../styles/GallerySubPage.module.scss';
import {GetStaticPaths, GetStaticProps} from 'next';
import fs from 'fs';
import {ParsedUrlQuery} from 'querystring';
import path from 'path';
import Masonry from '@mui/lab/Masonry';
import Head from 'next/head';
import {useMediaQuery} from '@mui/material';


interface GallerySubPageProps {
	title: string,
	photos: string[]
}

interface IParams extends ParsedUrlQuery {
	slug: string;
}

export default function GallerySubPage({title, photos}: GallerySubPageProps) {
	const isTablet = useMediaQuery('(max-width:768px) ');
	const isMobile = useMediaQuery('(max-width:425px) ');

	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={styles.container}>
				<h1>{title}</h1>
				<div className={styles.photoContainer}>
					<Masonry columns={isTablet ? (isMobile ? 1 : 2) : 3} spacing={1}>
						{photos.map((photoSrc, index) => (
							<div key={photoSrc}>
								<img
									className={styles.image}
									loading="lazy"
									title={`${title} photo ${index + 1}`}
									src={photoSrc}
									alt={`${title} photo ${index + 1}`}
								/>
							</div>
						))}
					</Masonry>
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<GallerySubPageProps> = async ({params}) => {
	const {slug} = params as IParams;
	let photos: string [] = [];
	let title = '';

	fs.readdirSync('public/gallery', {withFileTypes: true})
		.filter(dir => dir.isDirectory())
		.map(dir => {
			const rawJson = fs.readFileSync(`public/gallery/${dir.name}/meta.json`);

			if (JSON.parse(rawJson.toString()).slug === slug) {
				title = JSON.parse(rawJson.toString()).title;
				photos = fs.readdirSync(`public/gallery/${dir.name}`, {withFileTypes: true})
					.filter(file => path.extname(file.name) !== '.json')
					.map(photo => `/gallery/${dir.name}/${photo.name}`);
			}
		});

	return {
		props: {
			title: title,
			photos: photos
		}
	};
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
	const paths: { params: { slug: string } }[] = [];

	try {
		fs.readdirSync('public/gallery', {withFileTypes: true})
			.filter(dir => dir.isDirectory())
			.map(dir => {
				const rawJson = fs.readFileSync(`public/gallery/${dir.name}/meta.json`);
				const slug = JSON.parse(rawJson.toString()).slug;
				paths.push({params: {slug}});
			});
	} catch (e) {
		console.log('Build failed: ' + e);
	}

	return {paths: paths, fallback: false};
};