import { SubPageNavbar } from '@/components/Navbar/SubPageNavbar';
import { getConcerts } from '@/lib/concert';
import { LinkButton } from '@/components/Button';

export const fetchCache = 'default-cache';

interface IConcertRow {
  concert: IConcert;
}

export default async function Concerts() {
  const concerts = await getConcerts();

  return (
    <>
      <SubPageNavbar />
      <h1 className='mt-14 py-12 text-center font-martian text-4xl font-bold uppercase'>
        Koncertek
      </h1>
      <section className='mx-auto mb-12 flex max-w-[1920px] flex-col px-8'>
        {concerts.map((concert) => (
          <ConcertRow key={concert.id} concert={concert} />
        ))}
      </section>
    </>
  );
}

const ConcertRow = ({ concert }: IConcertRow) => {
  return (
    <a
      href={`/koncertek/${concert.slug}`}
      className='block transition-colors hover:bg-gray-50/30'
    >
      <div className='grid grid-cols-1 gap-4 border-t-[1px] border-black py-8 font-martian text-xs lg:grid-cols-[1fr_2fr_1fr_auto] lg:items-center lg:px-4'>
        <span className='whitespace-nowrap text-center lg:text-left lg:text-base'>
          {concert.date}
        </span>
        <span className='text-center text-lg font-bold lg:text-left'>
          {concert.displayName}
        </span>
        <span className='whitespace-nowrap text-center lg:text-left lg:text-base'>
          {concert.venue}
        </span>
        <div className='flex flex-row justify-center gap-2'>
          {concert.eventLink && (
            <LinkButton href={concert.eventLink} target='_blank'>
              Esemény
            </LinkButton>
          )}
          {concert.ticketLink && (
            <LinkButton
              variant='light'
              href={concert.ticketLink}
              target='_blank'
            >
              Jegyek
            </LinkButton>
          )}
        </div>
      </div>
    </a>
  );
};
