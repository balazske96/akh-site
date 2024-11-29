"use server";

import { Concerts } from "./Concerts";
import { Introduction } from "./Introduction";
import { MainPageHero } from "./components/Hero";
import { Music } from "./Music";
import { Webshop } from "./WebshopSection";
import { YouTubeVideo } from "./YouTubeVideo";

import { getConcerts } from "./lib/concert";
import { getMainPageProducts } from "./lib/shop";
import { getStreamingProviders } from "./lib/helpers";

export default async function Home() {
  const concerts = await getConcerts();
  const products = await getMainPageProducts();
  const streamingProviders = getStreamingProviders();

  return (
    <>
      <MainPageHero />
      <Introduction />
      <YouTubeVideo />
      <Concerts concerts={concerts} />
      <Webshop products={products} />
      <Music streamingProviders={streamingProviders} />
    </>
  );
}
