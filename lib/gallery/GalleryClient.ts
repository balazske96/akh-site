import { GalleryPost } from './../../types';
import Client from 'ftp';

const ftpHost = process.env.FTP_HOST;
const ftpPort = parseInt(process.env.FTP_PORT ?? '21');
const ftpUsername = process.env.FTP_USER;
const ftpPassword = process.env.FTP_PASSWORD;
const galleryDirectory = process.env.FTP_DIRECTORY ?? '/';
const galleryBaseUrl = process.env.NEXT_PUBLIC_GALLERY_BASE_URL;

export async function getGalleryDirectories(): Promise<string[]> {
	let result: string[] = [];

	const myPromise = new Promise(
		(resolve: (res: string[]) => void, reject) => {
			let innerResult: string[] = [];
			const client = new Client();

			client.on('ready', function () {
				client.list(galleryDirectory, function (error, listintResult) {
					if (error) {
						client.end();
						reject();
					}

					listintResult.map((fileOrDirectory) => {
						if (
							fileOrDirectory.type === 'd' &&
							fileOrDirectory.name !== '.' &&
							fileOrDirectory.name !== '..'
						) {
							innerResult = [
								...innerResult,
								fileOrDirectory.name,
							];
						}
					});

					resolve(innerResult);

					client.end();
				});
			});

			client.connect({
				host: ftpHost,
				port: ftpPort,
				password: ftpPassword,
				user: ftpUsername,
				secure: true,
			});
		}
	);

	await myPromise
		.then((res) => (result = [...res]))
		.catch(() => {
			throw new Error('cannot list gallery');
		});

	return result;
}

export async function getDirectoriesMetadata(
	folder: string
): Promise<GalleryPost> {
	let result: GalleryPost;

	const myPromise = new Promise(
		(resolve: (res: GalleryPost) => void, reject) => {
			const client = new Client();
			client.on('ready', function () {
				client.get(
					`${galleryDirectory}${folder}/meta.json`,
					async function (error, fileStream) {
						if (error) {
							client.end();
							reject();
						}

						const chunks = [];

						for await (const chunk of fileStream) {
							chunks.push(Buffer.from(chunk));
						}
						const metaData =
							Buffer.concat(chunks).toString('utf-8');
						const jsonMetaData = JSON.parse(metaData);
						const metDataAsGalleryPost: GalleryPost = {
							title: jsonMetaData['title'],
							card_title: jsonMetaData['card_title'],
							cover_src: `${galleryBaseUrl}/${folder}/${jsonMetaData['cover']}`,
							slug: folder,
							date: jsonMetaData['date'],
						};

						resolve(metDataAsGalleryPost);

						client.end();
					}
				);
			});

			client.connect({
				host: ftpHost,
				port: ftpPort,
				password: ftpPassword,
				user: ftpUsername,
				secure: true,
			});
		}
	);

	await myPromise
		.then((res: GalleryPost) => {
			result = res;
		})
		.catch(() => {
			throw new Error('cannot get meta.json');
		});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return result;
}

export async function getImagesInDirectory(
	directory: string
): Promise<string[]> {
	let result: string[] = [];

	const myPromise = new Promise(
		(resolve: (res: string[]) => void, reject) => {
			let innerResult: string[] = [];
			const client = new Client();

			client.on('ready', function () {
				client.list(directory, function (error, listintResult) {
					if (error) {
						client.end();
						reject();
					}

					listintResult.map((fileOrDirectory) => {
						if (
							fileOrDirectory.type === '-' &&
							fileOrDirectory.name !== 'meta.json'
						) {
							innerResult = [
								...innerResult,
								`${galleryBaseUrl}/${directory}/${fileOrDirectory.name}`,
							];
						}
					});

					resolve(innerResult);

					client.end();
				});
			});

			client.connect({
				host: ftpHost,
				port: ftpPort,
				password: ftpPassword,
				user: ftpUsername,
				secure: true,
			});
		}
	);

	await myPromise
		.then((res) => (result = [...res]))
		.catch(() => {
			throw new Error('cannot list images in gallery');
		});

	return result;
}
