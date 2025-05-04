'use client';

import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { useState } from 'react';

import Section4Image1 from '@/public/images/section-4-image-1.webp';
import Section4Image2 from '@/public/images/section-4-image-2.webp';
import MoneyA from '@/public/images/section-4-money-a.webp';
import MoneyB from '@/public/images/section-4-money-b.webp';
import { fadedImageDefaultRevealTime } from '@/constants';
import { fadedImageRevealDefaultFraction } from '@/constants';
import { ResponsiveImage } from '@/components/Image';

export const Webshop = ({
  products,
  image1,
  image2,
}: {
  products: IWebshopProduct[];
  image1: IResponsiveImageProp;
  image2: IResponsiveImageProp;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    slidesToScroll: 1,
  });

  const [previewProduct, setPreviewProduct] = useState<IWebshopProduct>(
    products[0]
  );

  useEffect(() => {
    return () => {
      if (emblaApi) emblaApi?.destroy();
    };
  }, [emblaApi]);

  return (
    <section className='relative pt-[150vw] lg:pt-0'>
      <Fade
        fraction={fadedImageRevealDefaultFraction}
        triggerOnce
        duration={fadedImageDefaultRevealTime}
      >
        <ResponsiveImage
          mobileImageSrc={image1.mobilSrc}
          desktopImageSrc={image1.desktopSrc}
          id={'image_6'}
          className='absolute right-0 top-[18.33vw] w-[91.66vw] lg:right-[17.14vw] lg:top-[-7.55vw] lg:h-[16.88vw] lg:w-[27.66vw]'
        />
      </Fade>
      <Fade
        fraction={fadedImageRevealDefaultFraction}
        triggerOnce
        duration={fadedImageDefaultRevealTime}
        delay={100}
      >
        <ResponsiveImage
          mobileImageSrc={image2.mobilSrc}
          desktopImageSrc={image2.desktopSrc}
          id={'image_7'}
          className='absolute right-[3.33vw] top-[62.77vw] w-[47.77vw] lg:right-[19.58vw] lg:top-[3.59vw] lg:w-[16.25vw]'
        />
      </Fade>
      {/* <!-- Money 1 --> */}
      <Image
        className='absolute left-[20.83vw] top-[78.61vw] w-[21.38vw] lg:left-[53.02vw] lg:top-[5.26vw] lg:w-[3.44vw]'
        src={MoneyA}
        alt=''
      />
      {/* <!-- Money 2 --> */}
      <Image
        className='absolute left-[28.33vw] top-[111.11vw] w-[30.55vw] rotate-[-21.65deg] lg:left-[50.03vw] lg:top-[12.79vw] lg:w-[12.19vw] lg:rotate-0'
        src={MoneyB}
        alt=''
      />
      {/* <!-- Quote --> */}
      <div className='absolute left-[1vw] top-[102vw] lg:left-[42vw] lg:top-[11.3vw]'>
        <p className='font-handwritten text-[7vw] leading-[7vw] tracking-widest lg:text-[1.6vw] lg:leading-[1.7vw]'>
          Termék
          <br className='lg:hidden' />
          vagyok, <br className='lg:hidden' />
          leszek, voltam
          <br />
          Ha egy
          <br className='lg:hidden' />
          valamit, ezt
          <br />
          megtanultam
        </p>
      </div>
      <div className='pb-[8vw] font-martian lg:absolute lg:left-[10vw]'>
        <a href={previewProduct.link} id='webshop' target='_blank'>
          <div>
            <Image
              alt=''
              width={300}
              height={322}
              id='preview-image'
              className='mx-auto w-[83.33vw] lg:w-[27.60vw]'
              src={previewProduct.image}
            />
          </div>
          <div>
            <p
              id='title-container'
              className='mx-auto max-w-[90vw] truncate pt-[5vw] text-center text-[4vw] font-bold lg:max-w-[27vw] lg:pt-[0.5vw] lg:text-[1.30vw] lg:leading-[1.56vw]'
            >
              {previewProduct.name}
            </p>
          </div>
          <div>
            <p
              id='price-container'
              className='pb-[3vw] pt-[1vw] text-center text-[3.33vw] lg:pb-[1vw] lg:text-[1.04vw]'
            >
              {previewProduct.price}
            </p>
          </div>
        </a>
        <div id='webshop-slider' className='mt-[2vw] flex lg:mt-0'>
          <div
            className='flex w-full flex-row gap-[4.15vw] px-[6.11vw] lg:justify-between lg:gap-[1vw] lg:px-0'
            data-glide-el='controls'
          >
            <div ref={emblaRef} className='w-full overflow-hidden'>
              <div className='flex'>
                {products.map((product) => (
                  <a
                    className='flex w-[33%] min-w-0 flex-none justify-center'
                    key={product.id}
                    href={product.link}
                    onClick={(event) => {
                      event.preventDefault();
                      setPreviewProduct(product);
                    }}
                  >
                    <Image
                      className='w-[70%]'
                      width={57}
                      height={52}
                      alt=''
                      src={product.image}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a
          target='_blank'
          href='https://shop.akiralyhalott.hu'
          className='mb-[-0.7vw] flex w-full flex-row items-center justify-center gap-[4vw] py-[6.94vw] lg:gap-[1.04vw] lg:py-[0.5vw]'
        >
          <span className='text-[4.15vw] font-medium lg:text-[0.78vw]'>
            WEBSHOP
          </span>
          <svg
            className='h-[2.22vw] w-[9.44vw] lg:w-[1.72vw]'
            fill='none'
            height='8'
            viewBox='0 0 34 8'
            width='34'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m33.3536 4.35356c.1952-.19527.1952-.51185 0-.70711l-3.182-3.181981c-.1953-.195262-.5119-.195263-.7071 0-.1953.195262-.1953.511844 0 .707111l2.8284 2.82842-2.8284 2.82843c-.1953.19526-.1953.51184 0 .70711.1952.19526.5118.19526.7071 0zm-33.35360004.14644h33.00000004v-1h-32.99999996z'
              fill='#000'
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
