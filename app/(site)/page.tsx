import { Concerts } from './Concerts';
import { Introduction } from './Introduction';
import { MainPageHero } from '../../components/Hero';
import { MainPageNavbar } from '@/components/Navbar';
import { Music } from './Music';
import { Webshop } from './WebshopSection';
import { YouTubeVideo } from './YouTubeVideo';

import { getConcerts } from '../../lib/concert';
import { getMainPageProducts } from '../../lib/shop';
import { getMainPageImages, getMainPageYouTubeLink } from '../../lib/helpers';
import { getStreamingProviders } from '../../lib/helpers';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function Home() {
  const concerts = await getConcerts();
  const products = await getMainPageProducts();
  const streamingProviders = await getStreamingProviders();
  const youTubeVideoLink = await getMainPageYouTubeLink();
  const areThereAnyConcert = concerts.length >= 1;
  const mainPageImages = await getMainPageImages();

  return (
    <>
      <MainPageNavbar areThereAnyConcert={areThereAnyConcert} />
      <MainPageHero />
      <Introduction
        image1={{
          mobilSrc: mainPageImages.image_1_mobile ?? '',
          desktopSrc: mainPageImages.image_1 ?? '',
        }}
        image2={{
          mobilSrc: mainPageImages.image_2_mobile ?? '',
          desktopSrc: mainPageImages.image_2 ?? '',
        }}
        image3={{
          mobilSrc: mainPageImages.image_3_mobile ?? '',
          desktopSrc: mainPageImages.image_3 ?? '',
        }}
        image4={{
          mobilSrc: mainPageImages.image_4_mobile ?? '',
          desktopSrc: mainPageImages.image_4 ?? '',
        }}
      />
      <YouTubeVideo src={youTubeVideoLink} />
      <Concerts
        concerts={concerts}
        showMoreConcertLabel={concerts.length > 5}
        mobileImageSrc={mainPageImages.image_5_mobile ?? ''}
        desktopImageSrc={mainPageImages.image_5 ?? ''}
      />
      <Webshop
        products={products}
        image1={{
          mobilSrc: mainPageImages.image_6_mobile ?? '',
          desktopSrc: mainPageImages.image_6 ?? '',
        }}
        image2={{
          mobilSrc: mainPageImages.image_7_mobile ?? '',
          desktopSrc: mainPageImages.image_7 ?? '',
        }}
      />
      <Music
        streamingProviders={streamingProviders}
        image1={{
          mobilSrc: mainPageImages.image_8_mobile ?? '',
          desktopSrc: mainPageImages.image_8 ?? '',
        }}
        image2={{
          mobilSrc: mainPageImages.image_9_mobile ?? '',
          desktopSrc: mainPageImages.image_9 ?? '',
        }}
      />
    </>
  );
}
