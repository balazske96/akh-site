import Image from "next/image";

import Image1 from "@/public/images/section-5-image-1.webp";
import Image2 from "@/public/images/section-5-image-2.webp";

export const Music = ({
  streamingProviders,
}: {
  streamingProviders: IStreamingProvider[];
}) => (
  <section className="relative pt-[59.44vw] h-[270vw] md:h-[250vw]" id="zene">
    <Image
      className="absolute w-[68.33vw] z-[-1] top-0 left-0"
      src={Image1}
      alt=""
    />
    <div className="shadow-spotify-iframe mx-auto px-4">
      <iframe
        className="md:w-[90.28vw] md:h-[60vw] mx-auto shadow-lg"
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
    <Image
      className="absolute w-[74.44vw] top-[97.22vw] right-0 z-[-1] mb-[9.17vw]"
      src={Image2}
      alt=""
    />
    <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-x-30 gap-x-10 gap-y-7 sm:gap-y-10 md:gap-y-20 px-6 mb-5 absolute bottom-0">
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
