import { convertDateStringToHumanReadableString } from '@/lib/helpers';
import { getConcertBySlug } from '@/lib/concert';
import Image from 'next/image';
import { LinkButton } from '@/components/Button';
import logo from '@/public/images/navbar-logo.webp';
import { notFound } from 'next/navigation';
import { ResponsiveImage } from '@/components/Image';

export const fetchCache = 'default-cache';
export const dynamic = 'force-dynamic';

interface IPageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: IPageProps) {
  const { slug } = await params;
  const concert = await getConcertBySlug(slug);

  if (!concert) throw notFound();

  const {
    image,
    venue,
    date,
    city,
    address,
    displayName,
    eventLink,
    ticketLink,
  } = concert;

  let jsonLd: object = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: `A Király Halott koncert | ${displayName}`,
    startDate: `${date}`,
    location: {
      '@type': 'Place',
      name: `${venue}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: { city },
        streetAddress: { address },
        addressCountry: 'HU',
      },
    },
    image,
  };

  if (ticketLink) {
    jsonLd = {
      ...jsonLd,
      offers: {
        offers: {
          '@type': 'Offer',
          url: ticketLink,
          availability: 'https://schema.org/InStock',
        },
      },
    };
  }

  return (
    <section className='mx-auto max-w-[1440px] font-martian'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={'flex justify-center px-14 py-6'}>
        <a href='/public'>
          <Image
            className={'w-40 sm:w-60 md:w-80'}
            src={logo}
            alt={'Zenekari logó'}
          />
        </a>
      </div>
      <article itemScope itemType='https://schema.org/Event'>
        <figure>
          <figcaption className='sr-only'>
            A Király Halott koncert flyer
          </figcaption>
          <ResponsiveImage
            mobileImageSrc={image.tabletUrl ?? ''}
            desktopImageSrc={image.desktopUrl ?? ''}
            minWidthForDesktopImage={600}
            className='mx-auto'
            width={image.width}
            height={image.height}
            src={image.mobileUrl || image.url}
            alt={'Koncert flyer'}
          />
        </figure>
        <header>
          <h1
            className={
              'w-full pb-2 pt-6 text-center text-2xl font-bold uppercase sm:pb-8 sm:pt-14 sm:text-6xl'
            }
            itemProp='name'
          >
            {displayName}
          </h1>
          <meta
            itemProp='eventStatus'
            content='https://schema.org/EventScheduled'
          />
        </header>
        <time
          className={'block w-full pb-2 text-center uppercase sm:text-4xl'}
          dateTime={date}
          itemProp='startDate'
        >
          {convertDateStringToHumanReadableString(date)}
        </time>
        <div itemProp='location' itemScope itemType='https://schema.org/Place'>
          <span
            className={'block w-full text-center uppercase sm:py-4 sm:text-3xl'}
            itemProp='name'
          >
            {venue}
          </span>
          <span
            className='sr-only'
            itemProp='address'
            itemScope
            itemType='https://schema.org/PostalAddress'
          >
            <span itemProp='streetAddress'>{address}</span>,
            <span itemProp='addressLocality'>{city}</span>,
            <span itemProp='addressCountry'>HU</span>
          </span>
        </div>
        <div className='flex w-full flex-row justify-center gap-2 py-4 sm:gap-6'>
          {eventLink && (
            <LinkButton
              variant={'dark'}
              className={'sm:px-6 sm:py-4 sm:text-2xl'}
              href={eventLink}
              target={'_blank'}
            >
              {'Esemény'}
            </LinkButton>
          )}
          {ticketLink && (
            <LinkButton
              variant={'light'}
              className={'sm:px-6 sm:py-4 sm:text-2xl'}
              href={ticketLink}
              target={'_blank'}
            >
              {'Jegyek'}
            </LinkButton>
          )}
        </div>
      </article>
      <div className='mb-4 flex justify-center py-2 sm:mb-8 sm:py-4'>
        <a className={'sm:text-md text-xs underline'} href={'/koncertek'}>
          Vissza az összes koncerthez
        </a>
      </div>
    </section>
  );
}
