'use client';

import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

import { fadedImageDefaultRevealTime } from '@/constants';
import { fadedImageRevealDefaultFraction } from '@/constants';
import { ResponsiveImage } from '@/components/Image';

export const Music = ({
  streamingProviders,
  image1,
  image2,
}: {
  streamingProviders: IStreamingProvider[];
  image1: IResponsiveImageProp;
  image2: IResponsiveImageProp;
}) => (
  <section
    className='relative h-[270vw] pt-[59.44vw] md:h-[250vw] lg:mt-[43vw] lg:h-auto'
    id='zene'
  >
    <Fade
      fraction={fadedImageRevealDefaultFraction}
      triggerOnce
      duration={fadedImageDefaultRevealTime}
    >
      <ResponsiveImage
        id={'image_8'}
        mobileImageSrc={image1.mobilSrc}
        desktopImageSrc={image1.desktopSrc}
        className='absolute left-0 top-0 z-[-1] w-[68.33vw] lg:left-[5.68vw] lg:w-[25.57vw]'
      />
    </Fade>
    <div className='shadow-spotify-iframe relative z-10 mx-auto px-4 lg:absolute lg:right-[38vw] lg:top-[20vw]'>
      <iframe
        className='mx-auto md:h-[60vw] md:w-[90.28vw] lg:h-[30vw] lg:w-[22.97vw] min-[1171px]:shadow-lg'
        style={{ borderRadius: '12px' }}
        src='https://open.spotify.com/embed/artist/6YVFO1kvJ7kxbYpbIZLXhJ?utm_source=generator'
        width='100%'
        height='352'
        frameBorder='0'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
    <Fade
      fraction={fadedImageRevealDefaultFraction}
      triggerOnce
      duration={fadedImageDefaultRevealTime}
    >
      <ResponsiveImage
        id={'image_9'}
        mobileImageSrc={image2.mobilSrc}
        desktopImageSrc={image2.desktopSrc}
        className='absolute right-0 top-[97.22vw] z-[-1] mb-[9.17vw] w-[74.44vw] lg:right-[11.09vw] lg:top-[-10.47vw] lg:w-[33.02vw]'
      />
    </Fade>
    <div className='md:gap-x-30 absolute bottom-0 mb-5 grid w-full grid-cols-2 gap-x-10 gap-y-7 px-6 sm:gap-y-10 md:grid-cols-4 md:gap-y-20 lg:bottom-auto lg:right-[11.1vw] lg:top-[35vw] lg:w-[28vw]'>
      {streamingProviders.map((provider) => (
        <a
          key={provider.name}
          className='flex items-center justify-center'
          href={provider.link}
          target='_blank'
        >
          <Image
            className='w-[30vw] md:w-[15vw]'
            width={100}
            height={50}
            src={provider.imageUrl}
            alt={`${provider.name} logo`}
          />
        </a>
      ))}
    </div>
  </section>
);
