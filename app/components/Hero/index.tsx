export const MainPageHero = () => {
  return (
    <section className="w-screen relative">
      <picture>
        <source
          media="(max-width: 1279px)"
          srcSet="<?php echo $image_src_set[0] ?>"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="<?php echo $image_src_set[1] ?>"
        />
        <img
          className="w-full mt-[-8vw] xl:mt-0"
          src="<?php echo $image_src_set[0] ?>"
          alt=""
        />
      </picture>
      {/* <!-- <div className="absolute bottom-0 left-0 h-[5rem] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent"></div> --> */}
      <div className="absolute top-0 xl:bottom-0 left-0 h-[12.5vw] w-full bg-gradient-to-b from-[#e1e1e1] to-transparent xl:h-[5vw]"></div>
      <div className="hidden xl:block absolute bottom-0 left-0 h-[5vw] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent"></div>
    </section>
  );
};
