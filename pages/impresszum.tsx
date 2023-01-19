import Layout from '../components/Layout/Layout';
import styles from '../styles/Impressum.module.scss';

export default function ImpressumPage(): React.ReactElement {
	return (
		<Layout>
			<main className={styles.container}>
				<h1>Impresszum</h1>
				<span>
					<strong>
						<i>Cégnév:</i>
					</strong>{' '}
					Venyige Balázs EV
				</span>
				<span>
					<strong>
						<i>E-mail:</i>
					</strong>{' '}
					venyigebalazs96@gmail.com
				</span>
				<span>
					<strong>
						<i>A céget bejegyző hatóság:</i>
					</strong>{' '}
					Nemzeti Adó- és Vámhivatal
				</span>
				<span>
					<strong>
						<i>Adószám:</i>
					</strong>{' '}
					59797920-1-42
				</span>
				<span>
					<strong>
						<i>Tárhelyszolgáltató:</i>
					</strong>
					<br />
					Vercel Inc.
					<br />
					340 S Lemon Ave #4133
					<br />
					Walnut, CA 91789
					<br />
					<a
						href="https://vercel.com/"
						target={'_blank'}
						rel="noreferrer"
					>
						vercel.com
					</a>
					<br />
					<a
						href="mailto:privacy@vercel.com"
						target={'_blank'}
						rel="noreferrer"
					>
						privacy@vercel.com
					</a>
				</span>
			</main>
		</Layout>
	);
}
