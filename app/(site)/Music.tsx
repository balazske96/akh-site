"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

import { fadedImageDefaultRevealTime } from "@/constants";
import { fadedImageRevealDefaultFraction } from "@/constants";

export const Music = ({
  streamingProviders,
}: {
  streamingProviders: IStreamingProvider[];
}) => (
  <section
    className="relative pt-[59.44vw] h-[270vw] lg:h-auto md:h-[250vw] lg:mt-[43vw]"
    id="zene"
  >
    <Fade
      fraction={fadedImageRevealDefaultFraction}
      triggerOnce
      duration={fadedImageDefaultRevealTime}
    >
      <picture>
        <source
          media="(max-width: 1023px)"
          srcSet="/images/section-5-image-1-mobile.webp"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/images/section-5-image-1-desktop.webp"
        />
        <img
          className="absolute w-[68.33vw] lg:w-[25.57vw] z-[-1] top-0 left-0 lg:left-[5.68vw]"
          src="/images/section-5-image-1-mobile.webp"
          alt=""
        />
      </picture>
    </Fade>
    <div className="relative shadow-spotify-iframe mx-auto px-4 lg:absolute lg:top-[20vw] lg:right-[38vw] z-10">
      <iframe
        className="md:w-[90.28vw] md:h-[60vw] mx-auto min-[1171px]:shadow-lg lg:w-[22.97vw] lg:h-[30vw]"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/6YVFO1kvJ7kxbYpbIZLXhJ?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <Fade
      fraction={fadedImageRevealDefaultFraction}
      triggerOnce
      duration={fadedImageDefaultRevealTime}
    >
      <picture>
        <source
          media="(max-width: 1023px)"
          srcSet="/images/section-5-image-2-mobile.webp"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/images/section-5-image-2-desktop.webp"
        />
        <img
          className="absolute w-[74.44vw] top-[97.22vw] lg:top-[-10.47vw] right-0 lg:right-[11.09vw] z-[-1] mb-[9.17vw] lg:w-[33.02vw]"
          src="/images/section-5-image-2-mobile.webp"
          alt=""
        />
      </picture>
    </Fade>
    <div
      className="w-full lg:w-[28vw] grid grid-cols-2 md:grid-cols-4 md:gap-x-30
          gap-x-10 gap-y-7 sm:gap-y-10 md:gap-y-20 px-6 mb-5 absolute bottom-0 lg:bottom-auto lg:top-[35vw] lg:right-[11.1vw]"
    >
      {streamingProviders.map((provider) => (
        <a
          key={provider.name}
          className="flex justify-center items-center"
          href={provider.link}
          target="_blank"
        >
          <Image
            className="w-[30vw] md:w-[15vw]"
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
