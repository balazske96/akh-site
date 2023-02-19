import { ShopProduct } from '../../types';
import styles from './ShopProductCard.module.scss';

interface ShopProductProps {
	shopProduct: ShopProduct;
}

export default function ShopProductCard({ shopProduct }: ShopProductProps) {
	const formatCurrency = (price: number) =>
		Intl.NumberFormat('hu-HU', {
			style: 'currency',
			currency: 'HUF',
			maximumFractionDigits: 0,
		}).format(price);

	return (
		<a
			href={shopProduct.permalink}
			target={'_blank'}
			className={styles.container}
			rel="noreferrer"
		>
			<img className={styles.image} src={shopProduct.images[0].src} />
			<div className={styles.name}>{shopProduct.name}</div>
			{shopProduct.onSale && (
				<span className={styles.onSaleToaster}>Kiárusítás!</span>
			)}
			<div className={styles.price}>
				{shopProduct.onSale ? (
					<>
						{formatCurrency(+shopProduct.price)}{' '}
						<span className={styles.salePrice}>
							{formatCurrency(+shopProduct.salePrice)}
						</span>
					</>
				) : (
					formatCurrency(+shopProduct.price)
				)}
			</div>
		</a>
	);
}
