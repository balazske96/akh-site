import { woocommerceBaseUrl, woocommerceBasicAuthToken } from '@/constants';

type Product = {
  id: number;
  name: string;
  price: number;
  images: { src: string }[];
  permalink: string;
};

export const getWoocommerceProductsByIds = async (ids?: number[]) => {
  // Build query string only if IDs are provided
  const query =
    ids && ids.length ? '?' + ids.map((id) => `include[]=${id}`).join('&') : '';

  const response = await fetch(`${woocommerceBaseUrl}/products?${query}`, {
    next: {
      tags: ['main-page-products'],
    },
    headers: {
      Authorization: `Basic ${woocommerceBasicAuthToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Could not fetch woocommerce products. Reason: ${response.statusText}`
    );
  }

  const products: Product[] = await response.json();

  if (!ids || ids.length === 0) {
    return products; // No specific order needed
  }

  // Map results to preserve original order, skipping missing products
  const productMap = new Map(products.map((p) => [p.id, p]));

  return ids
    .map((id) => productMap.get(id))
    .filter((p): p is Product => Boolean(p)); // Type guard to remove undefined// Type guard to remove undefined
};
