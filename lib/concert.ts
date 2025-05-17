import {
  getConcerts as getConcertsFromCms,
  getConcertsBySlug as getConcertsBySlugFromCms,
} from './filament';

export async function getConcerts(): Promise<IConcert[]> {
  return await getConcertsFromCms();
}

export async function getConcertSlugs(): Promise<{ slug: string }[]> {
  return (await getConcerts()).map((c) => ({
    slug: c.slug,
  }));
}

export async function getConcertBySlug(slug: string) {
  return await getConcertsBySlugFromCms(slug);
}
