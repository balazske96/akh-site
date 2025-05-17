export const googleGtmId = process.env.NEXT_PUBLIC_GOOGLE_GTM_ID ?? '';
export const fadedImageDefaultRevealTime = 200; // milisec
export const fadedImageRevealDefaultFraction = 0.7;
export const woocommerceBasicAuthToken =
  process.env.WOOCOMMERCE_BASIC_AUTH_TOKEN;
export const webshopBaseUrl = process.env.WEBSHOP_BASE_URL;
export const woocommerceBaseUrl = `${webshopBaseUrl}/wp-json/wc/v3`;
export const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;
export const revalidateToken = process.env.REVALIDATE_TOKEN;
