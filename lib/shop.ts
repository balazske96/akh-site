import { getMainPageData } from "./payload";
import { getWoocommerceProductsByIds } from "./woocommerce-client";

export async function getMainPageProducts(): Promise<IWebshopProduct[]> {
  const mainPageData = await getMainPageData();

  const woocommerceProducts = await getWoocommerceProductsByIds(
    mainPageData.webshop_product_ids.map((product) => +product.id!)
  );

  return woocommerceProducts.map((product) => {
    return {
      id: `${product.id}`,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
      link: product.permalink,
    };
  });
}
