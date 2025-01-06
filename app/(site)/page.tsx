import { Concerts } from "./Concerts";
import { Introduction } from "./Introduction";
import { MainPageHero } from "../../components/Hero";
import { Music } from "./Music";
import { Webshop } from "./WebshopSection";
import { YouTubeVideo } from "./YouTubeVideo";

import { getConcerts } from "../../lib/concert";
import { getMainPageProducts } from "../../lib/shop";
import { getMainPageYouTubeLink } from "../../lib/helpers";
import { getStreamingProviders } from "../../lib/helpers";

export default async function Home() {
  const concerts = await getConcerts();
  const products = await getMainPageProducts();
  const streamingProviders = await getStreamingProviders();
  const youTubeVideoLink = await getMainPageYouTubeLink();

  return (
    <>
      <MainPageHero />
      <Introduction />
      <YouTubeVideo src={youTubeVideoLink} />
      <Concerts
        concerts={concerts}
        showMoreConcertLabel={concerts.length > 5}
      />
      <Webshop products={products} />
      <Music streamingProviders={streamingProviders} />
    </>
  );
}
