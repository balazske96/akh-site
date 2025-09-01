'use client';

import { LinkButton } from '@/components/Button';
import { useRouter } from 'next/navigation';

interface IConcertRow {
  concert: IConcert;
}

export default function ConcertRow({ concert }: IConcertRow) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/koncertek/${concert.slug}`)}
      className='block cursor-pointer transition-colors hover:bg-gray-50/30'
    >
      <div className='grid grid-cols-1 gap-4 border-t-[1px] border-black py-8 font-martian text-xs lg:grid-cols-[250px_1fr_200px_auto] lg:items-center lg:px-4'>
        <span className='whitespace-nowrap text-center lg:text-left lg:text-base'>
          {concert.date}
        </span>
        <span className='text-center text-lg font-bold lg:text-left'>
          {concert.displayName}
        </span>
        <span className='overflow-hidden overflow-ellipsis whitespace-nowrap text-center lg:text-left lg:text-base'>
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
    </div>
  );
}
