export const MainPageHero = () => {
  return (
    <section className="w-screen relative">
      <picture>
        <source
          media="(max-width: 1279px)"
          srcSet="/images/hero-image-mobile.webp"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="/images/hero-image-desktop.webp"
        />
        <img
          className="w-full mt-[-7vw] xl:mt-0"
          src="/images/hero-image-mobile.webp"
          alt=""
        />
      </picture>
      {/* <!-- <div className="absolute bottom-0 left-0 h-[5rem] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent"></div> --> */}
      <div className="absolute top-0 xl:bottom-0 left-0 h-[18.5vw] w-full bg-gradient-to-b from-[#e1e1e1] to-transparent xl:h-[5vw]"></div>
      <div className="hidden xl:block absolute bottom-0 left-0 h-[5vw] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent"></div>
    </section>
  );
};
