import { woocommerceBaseUrl, woocommerceBasicAuthToken } from '@/constants';

export const getWoocommerceProductsByIds = async (ids: number[]) => {
  const concatedIds = ids.join(',');
  const response = await fetch(
    `${woocommerceBaseUrl}/products?include=${concatedIds}`,
    {
      cache: 'force-cache',
      next: {
        revalidate: 3600,
      },
      headers: {
        Authorization: `Basic ${woocommerceBasicAuthToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Could not fetch woocommerce products. Reason: ${response.statusText}`
    );
  }

  return (await response.json()) as IWoocommerceProduct[];
};
