import { LinkButton } from '@/components/Button';
import { getConcerts } from '@/lib/concert';

export const fetchCache = 'default-cache';
export const dynamic = 'force-dynamic';

export default async function Concerts() {
  const concerts = await getConcerts();
  const shouldDisplayConcerts = concerts.length > 0;

  return (
    <>
      <h1 className='py-12 text-center font-martian text-4xl font-bold uppercase'>
        Koncertek
      </h1>
      {shouldDisplayConcerts ? (
        <section className='mx-auto mb-12 flex max-w-[1920px] flex-col px-8'>
          {concerts.map((concert) => (
            <ConcertRow key={concert.id} concert={concert} />
          ))}
        </section>
      ) : (
        'semmi'
      )}
    </>
  );
}

interface IConcertRow {
  concert: IConcert;
}

const ConcertRow = ({ concert }: IConcertRow) => {
  return (
    <div className='flex flex-col items-center gap-1 border-t-[1px] border-black py-4 font-martian text-xs'>
      <span>{concert.date}</span>
      <a href={`/koncertek/${concert.slug}`} className='text-lg font-bold'>
        {concert.displayName}
      </a>
      <span>{concert.venue}</span>
      <div className='flex flex-row gap-2'>
        {concert.eventLink && (
          <LinkButton href={concert.eventLink} target='_blank'>
            Esemény
          </LinkButton>
        )}
        {concert.ticketLink && (
          <LinkButton variant='light' href={concert.ticketLink} target='_blank'>
            Jegyek
          </LinkButton>
        )}
      </div>
    </div>
  );
};
