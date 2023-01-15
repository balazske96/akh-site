import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import useShop from '../../hooks/useShop';

export default function ShopPage() {
	const { products, addProduct } = useShop();

	useEffect(() => {
		addProduct({ name: Math.random() });
	}, []);

	return (
		<Layout>
			<h1>Shop</h1>
			{products.map((product) => (
				<div key={product.name}>{product.name}</div>
			))}
		</Layout>
	);
}
