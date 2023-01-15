import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-circular-progressbar/dist/styles.css';
import { ShopProvider } from '../hooks/useShop';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="google-site-verification"
					content="xc80MrYw-bwwwlvwZrRjxFYk-uejhKkVvSxwb00AYxA"
				/>
				<meta charSet="UTF-8" />
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
				<meta property="og:image" content="/akh_og_image.png" />
				<meta property="og:type" content="website" />
			</Head>
			<ShopProvider>
				<Component {...pageProps} />
			</ShopProvider>
		</>
	);
}

export default MyApp;
