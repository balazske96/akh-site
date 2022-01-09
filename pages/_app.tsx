import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" type="image/png" href="/favicon.png"></link>
			<title>A Király Halott</title>
		</Head>
		<Component {...pageProps} />
	</>);
}

export default MyApp;
