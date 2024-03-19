import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { ShopProduct } from './../../types';

const wooConsumerKey = process.env.WOO_CONSUMER_KEY ?? '';
const wooConsumerSecret = process.env.WOO_CONSUMER_SECRET ?? '';
const wooBaseUrl = process.env.WOO_BASE_URL ?? '';

const WooCommerce = new WooCommerceRestApi({
	url: wooBaseUrl, // Your store URL
	consumerKey: wooConsumerKey, // Your consumer key
	consumerSecret: wooConsumerSecret, // Your consumer secret
	version: 'wc/v3', // WooCommerce WP REST API version
});

async function getOriginalPriceByVariation(
	productId: number,
	variationId: number
) {
	const variation = await WooCommerce.get(
		`products/${productId}/variations/${variationId}`
	);

	return variation.data['regular_price'];
}

async function convertResponseProductToShopProductType(prod: any) {
	let salePrice;
	if (prod['variations']) {
		try {
			salePrice = await getOriginalPriceByVariation(
				prod['id'],
				prod['variations'][0]
			);
		} catch (e) {
			salePrice = null;
		}
	}

	return {
		id: prod['id'],
		name: prod['name'],
		slug: prod['slug'],
		permalink: prod['permalink'],
		description: prod['description'],
		price: prod['price'],
		onSale: prod['on_sale'],
		regularPrice: prod['regular_price'],
		salePrice: salePrice ?? '',
		catalogVisibility: prod['catalog_visibility'],
		images: prod['images'],
		menuOrder: prod['menu_order'],
		priceHtml: prod['price_html'],
	} as ShopProduct;
}

export async function getProducts(): Promise<ShopProduct[]> {
	const productsResponse = await WooCommerce.get('products');

	const sortedProducts: [] = productsResponse.data.sort(
		(a: any, b: any) => a['menu_order'] - b['menu_order']
	);

	const outOfStockProductsRemoved = sortedProducts.filter(
		(product) => product['status'] == 'publish'
	);

	const result = [];

	for (const prod of outOfStockProductsRemoved) {
		result.push(await convertResponseProductToShopProductType(prod));
	}

	return result;
}
