import { Concerts } from "./sections";
import { Introduction } from "./sections";
import { MainPageHero } from "./components/Hero";
import { Music } from "./sections";
import { Webshop } from "./sections";
import { YouTubeVideo } from "./sections";

export default function Home() {
  return (
    <>
      <MainPageHero />
      <Introduction />
      <YouTubeVideo />
      <Concerts />
      <Webshop />
      <Music />
    </>
  );
}
