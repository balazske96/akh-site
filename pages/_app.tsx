import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<meta
					charSet="UTF-8"
				/>
				<meta
					name="keywords"
					content="zene, rock, pop, pop-rock, magyar, király, halott, a király halott, halott király"
				/>
				<meta
					property="og:title"
					content="A Király Halott hivatalos honlapja"
				/>
				<meta
					property="og:description"
					content="Ismerd meg a zenekart, hallgass bele a zenéjükbe és nézd meg hol találkozhatsz velük legközelebb!"
				/>
				<meta
					property="og:image"
					content="/akh_og_image.png"
				/>
				<meta
					property="og:type"
					content="website"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
