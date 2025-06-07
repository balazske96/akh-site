import { getConcerts } from '@/lib/concert';
import ConcertRow from '@/app/(subPages)/koncertek/ConcertRow';
import SubPageFrame from '@/app/(subPages)/SubPageFrame';

export const fetchCache = 'default-cache';

export default async function Concerts() {
  const concerts = await getConcerts();

  return (
    <SubPageFrame title={'Koncertek'}>
      <section className='mx-auto mb-12 flex max-w-[1920px] flex-col px-4 sm:px-8 md:mt-12'>
        {concerts.map((concert) => (
          <ConcertRow key={concert.id} concert={concert} />
        ))}
      </section>
    </SubPageFrame>
  );
}
