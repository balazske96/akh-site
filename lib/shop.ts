import { getWoocommerceProductsByIds } from './woocommerce-client';
import { getGlobalData } from '@/lib/helpers';

export async function getMainPageProducts(): Promise<IWebshopProduct[]> {
  const mainPageData = await getGlobalData();

  const woocommerceProducts = await getWoocommerceProductsByIds(
    mainPageData.webshop_product_ids.map((product) => +product.value)
  );

  return woocommerceProducts.map((product) => {
    return {
      id: `${product.id}`,
      name: product.name,
      price: `${product.price} Ft`,
      image: product.images[0].src,
      link: product.permalink,
    };
  });
}
