import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ShopProduct } from '../types';
import ShopProductCard from '../components/ShopProductCard/ShopProductCard';
import styles from '../styles/Shop.module.scss';
import { getProducts } from '../lib/woocommerce/WoocommerceClient';

interface ShopPageProps {
	products: ShopProduct[];
}

export default function ShopPage({ products }: ShopPageProps) {
	return (
		<Layout>
			<Head>
				<title>Shop</title>
			</Head>
			<main className={styles.container}>
				<h1>Webshop</h1>
				<p className={styles.shopDescription}>
					Az alábbi termékeket a{' '}
					<a
						href={'https://shop.akiralyhalott.hu'}
						target={'_blank'}
						className={styles.link}
						rel="noreferrer"
					>
						hivatalos webshopunkon
					</a>{' '}
					tudod megvásárolni. <br /> Kattints valamelyik termékre a
					webshopban való megnyitáshoz!
				</p>
				<div className={styles.productsContainer}>
					{products.map(
						(product) =>
							product.catalogVisibility === 'visible' && (
								<ShopProductCard
									key={product['id']}
									shopProduct={product}
								/>
							)
					)}
				</div>
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const products = await getProducts();

	return {
		props: { products },
	};
};
