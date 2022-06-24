import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8"/>
				<meta
					name="keywords"
			  		content="zene, rock, pop, pop-rock, magyar, király, halott, a király halott, halott király"
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
