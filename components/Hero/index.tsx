import { ResponsiveImage } from '@/components/Image';

export const MainPageHero = () => {
  return (
    <section className='relative w-screen'>
      <ResponsiveImage
        mobileImageSrc={'/images/hero-image-mobile.webp'}
        desktopImageSrc={'/images/hero-image-desktop.webp'}
        className='mt-[-7vw] w-full lg:mt-0'
      />
      {/* <!-- <div className="absolute bottom-0 left-0 h-[5rem] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent"></div> --> */}
      <div className='absolute left-0 top-0 h-[18.5vw] w-full bg-gradient-to-b from-[#e1e1e1] to-transparent lg:bottom-0 lg:h-[5vw]'></div>
      <div className='absolute bottom-0 left-0 hidden h-[5vw] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent lg:block'></div>
    </section>
  );
};
