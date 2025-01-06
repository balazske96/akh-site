import { getConcerts as getConcertsFromPaylod } from "@/lib/payload";

export async function getConcerts(): Promise<IConcert[]> {
  const concerts = await getConcertsFromPaylod();

  return concerts.docs.map((concert) => {
    const date = new Date(concert.date); // Month is 0-based
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, ".");

    return {
      displayName: concert.displayName,
      venue: concert.location,
      date: formattedDate,
      ticketLink: concert.ticketLink ?? undefined,
      eventLink: concert.eventLink ?? undefined,
    };
  });
}
