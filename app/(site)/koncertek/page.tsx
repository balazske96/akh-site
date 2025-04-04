import { LinkButton } from "@/components/Button";
import { getConcerts } from "@/lib/concert";

export default async function Concerts() {
  const concerts = await getConcerts();
  const shouldDisplayConcerts = concerts.length > 0;

  return (
    <>
      <h1 className="font-martian font-bold uppercase text-center py-12 text-4xl">
        Koncertek
      </h1>
      {shouldDisplayConcerts ? (
        <section className="flex flex-col mx-auto max-w-[1920px] px-8 mb-12">
          {concerts.map((concert) => (
            <ConcertRow key={concert.id} concert={concert} />
          ))}
        </section>
      ) : (
        "semmi"
      )}
    </>
  );
}

interface IConcertRow {
  concert: IConcert;
}

const ConcertRow = ({ concert }: IConcertRow) => {
  return (
    <div className="font-martian text-xs flex flex-col items-center gap-1 py-4 border-t-[1px] border-black">
      <span>{concert.date}</span>
      <a href={`/koncertek/${concert.slug}`} className="font-bold text-lg">
        {concert.displayName}
      </a>
      <span>{concert.venue}</span>
      <div className="flex flex-row gap-2">
        {concert.eventLink && (
          <LinkButton href={concert.eventLink} target="_blank">
            Esemény
          </LinkButton>
        )}
        {concert.ticketLink && (
          <LinkButton variant="light" href={concert.ticketLink} target="_blank">
            Jegyek
          </LinkButton>
        )}
      </div>
    </div>
  );
};
