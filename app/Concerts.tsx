'use client';

import { Fade } from 'react-awesome-reveal';

import { ResponsiveImage } from '@/components/Image';

export const Concerts = ({
  concerts,
  showMoreConcertLabel = true,
  mobileImageSrc,
  desktopImageSrc,
}: {
  concerts: IConcert[];
  showMoreConcertLabel?: boolean;
  mobileImageSrc: string;
  desktopImageSrc: string;
}) => {
  if (!(concerts.length > 0)) {
    return <div className='lg:h-[3vw]'></div>;
  }

  return (
    <section>
      <div className='relative pt-[185.44vw] lg:flex lg:flex-row lg:justify-end lg:pr-[10vw] lg:pt-[15.78vw]'>
        <Fade triggerOnce delay={100} fraction={0.2}>
          <ResponsiveImage
            mobileImageSrc={mobileImageSrc}
            desktopImageSrc={desktopImageSrc}
            className='absolute left-[-29.16vw] top-[14.88vw] h-auto w-[115.83vw] lg:left-[9.27vw] lg:top-[11.25vw] lg:h-[40.63vw] lg:w-[34.64vw]'
            id={'image_5'}
          />
          <div className='absolute right-[65%] top-[20.27vw] w-max translate-x-1/2 text-white lg:left-[11.09vw] lg:top-[48.02vw] lg:translate-x-0'>
            <p className='font-handwritten text-[7vw] leading-[9vw] lg:inline-block lg:text-[1.3vw] lg:leading-[1.29vw]'>
              Ezt az éjszakát is
            </p>
            <p className='ml-[15vw] font-handwritten text-[7vw] leading-[9vw] lg:ml-[0.2vw] lg:inline-block lg:text-[1.3vw] lg:leading-[1.29vw]'>
              követeli a hajnal...
            </p>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div
            id='koncertek'
            className='absolute left-[50%] top-[123.88vw] z-50 mx-auto h-[80.55vw] w-[80.55vw] translate-x-[-50%] overflow-hidden lg:left-[26.82vw] lg:top-[4.22vw] lg:h-[21.88vw] lg:w-[21.41vw] lg:translate-x-0'
          >
            <h2 className='absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] text-center font-martian text-[11.94vw] font-extrabold uppercase leading-[14.33vw] text-white lg:text-[3.3vw] lg:leading-[4.3vw]'>
              Közelgő
              <br />
              koncert
              <br />
              dátumok
            </h2>
            <video
              className='absolute left-0 top-0 z-10 h-full w-auto object-cover'
              src='/videos/audience-hands.webm'
              autoPlay
              muted
              loop
            />
          </div>
        </Fade>
        <div className='flex flex-col justify-between gap-[8.33vw] bg-white px-[5vw] pb-[14.16vw] pt-[35vw] font-martian lg:w-[48.91vw] lg:gap-[1.56vw] lg:pb-[11.82vw] lg:pl-[8.23vw] lg:pr-[5.94vw] lg:pt-[4.48vw]'>
          {concerts.map((concert) => (
            <div
              key={concert.displayName}
              className='flex justify-between lg:border-b-[0.05vw] lg:border-[black] lg:pb-[1.56vw]'
            >
              <div className='grid w-full grid-cols-[auto_1fr] grid-rows-2 gap-x-[2.78vw] lg:grid-cols-[auto_14vw_1fr] lg:grid-rows-1 lg:gap-x-[1.98vw]'>
                <span className='items-center text-[2.77vw] font-light leading-[3.33vw] lg:flex lg:text-[0.57vw] lg:leading-[0.72vw]'>
                  {concert.date}
                </span>
                <span className='items-center text-[2.77vw] font-light leading-[3.33vw] lg:col-start-3 lg:row-start-1 lg:flex lg:justify-start lg:text-[0.57vw] lg:leading-[0.72vw]'>
                  {concert.venue}
                </span>
                <p className='col-span-2 max-w-[65vw] overflow-x-hidden text-ellipsis whitespace-nowrap text-[5.5vw] font-extrabold uppercase leading-[6.67vw] lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:text-[1.25vw] lg:leading-[1.56vw]'>
                  {concert.displayName}
                </p>
              </div>
              <div className='flex items-end justify-center lg:items-center'>
                <a
                  className='rounded-[13.05vw] border-2 border-[#CDCDCD] px-[3.61vw] py-[2.78vw] text-[3.61vw] leading-[4.33vw] lg:rounded-none lg:border-b-[0.05vw] lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:border-[#2B2C2D] lg:p-0 lg:text-[0.78vw] lg:leading-[0.94vw]'
                  href={concert.ticketLink}
                >
                  JEGYEK
                </a>
              </div>
            </div>
          ))}
          {showMoreConcertLabel && (
            <a
              className='flex items-center gap-[2.77vw] lg:order-first lg:justify-end lg:gap-[1.56vw]'
              href='#'
            >
              <span className='text-[4vw] lg:text-[0.78vw]'>
                Összes koncert dátum
              </span>
              <svg
                className='mb-[-0.5vw] h-[2.5vw] w-[9.72vw] lg:mb-[-0.1vw] lg:w-[1.72vw]'
                width='35'
                height='9'
                viewBox='0 0 35 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM34.3536 4.85356C34.5488 4.65829 34.5488 4.34171 34.3536 4.14645L31.1716 0.964469C30.9763 0.769207 30.6597 0.769206 30.4645 0.964469C30.2692 1.15973 30.2692 1.47631 30.4645 1.67158L33.2929 4.5L30.4645 7.32843C30.2692 7.52369 30.2692 7.84027 30.4645 8.03554C30.6597 8.2308 30.9763 8.2308 31.1716 8.03554L34.3536 4.85356ZM1 5L34 5L34 4L1 4L1 5Z'
                  fill='black'
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
