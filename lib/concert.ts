import {
  getConcertBySlug as getConcertBySlugFromPaylod,
  getConcerts as getConcertsFromPaylod,
} from '@/lib/payload';
import { Concert, ConcertHeader } from '@/payload-types';

export async function getConcerts(): Promise<IConcert[]> {
  const concerts = await getConcertsFromPaylod();

  return concerts.docs.map(mapPayloadConcert);
}

export async function getConcertSlugs(): Promise<{ slug: string }[]> {
  return (await getConcerts()).map((c) => ({
    slug: c.slug,
  }));
}

export async function getConcertBySlug(slug: string) {
  const concert = await getConcertBySlugFromPaylod(slug);

  if (!concert) return null;

  return mapPayloadConcert(concert);
}

function mapPayloadConcert(concert: Concert): IConcert {
  const date = new Date(concert.date); // Month is 0-based
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, '.');

  return {
    id: concert.id,
    slug: concert.slug!,
    displayName: concert.displayName,
    address: concert.address,
    date: formattedDate,
    venue: concert.location,
    city: concert.city ?? '',
    ticketLink: concert.ticketLink ?? undefined,
    eventLink: concert.eventLink ?? undefined,
    hidden: concert.hidden,
    highlighted: concert.highlighted ?? false,
    image: {
      url: (concert.image as ConcertHeader).url ?? undefined,
      width: (concert.image as ConcertHeader).width ?? undefined,
      height: (concert.image as ConcertHeader).height ?? undefined,
      mobileUrl:
        (concert.image as ConcertHeader).sizes?.mobile?.url ?? undefined,
      tabletUrl:
        (concert.image as ConcertHeader).sizes?.tablet?.url ?? undefined,
      desktopUrl:
        (concert.image as ConcertHeader).sizes?.desktop?.url ?? undefined,
    },
  };
}
