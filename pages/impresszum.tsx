import Layout from '../components/Layout/Layout';
import styles from '../styles/Impressum.module.scss';

export default function ImpressumPage(): React.ReactElement {
	return (
		<Layout>
			<main className={styles.container}>
				<h1>Impresszum</h1>
				<ul>
					<li>
						<strong>
							<i>Cégnév:</i>
						</strong>{' '}
						Venyige Balázs EV
					</li>
					<li>
						<strong>
							<i>Telefonszám:</i>
						</strong>{' '}
						+36706017860
					</li>
					<li>
						<strong>
							<i>E-mail:</i>
						</strong>{' '}
						venyigebalazs96@gmail.com
					</li>
					<li>
						<strong>
							<i>A céget bejegyző hatóság:</i>
						</strong>{' '}
						Nemzeti Adó- és Vámhivatal
					</li>
					<li>
						<strong>
							<i>Adószám:</i>
						</strong>{' '}
						59797920-1-42
					</li>
					<li>
						<strong>
							<i>Tárhelyszolgáltató:</i>
						</strong>{' '}
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
					</li>
				</ul>
			</main>
		</Layout>
	);
}
