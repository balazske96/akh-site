import Image from "next/image";

import Image1 from "@/public/images/section-5-image-1.webp";
import Image2 from "@/public/images/section-5-image-2.webp";

export const Music = ({
  streamingProviders,
}: {
  streamingProviders: IStreamingProvider[];
}) => (
  <section className="relative pt-[59.44vw]" id="zene">
    <Image
      className="absolute w-[68.33vw] z-[-1] top-0 left-0"
      src={Image1}
      alt=""
    />
    <div className="shadow-spotify-iframe max-w-max mx-auto mb-[90vw]">
      <iframe
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
      className="absolute w-[74.44vw] top-[97.22vw] right-0 z-[-1]"
      src={Image2}
      alt=""
    />
    <div className="grid grid-cols-2 gap-x-10 gap-y-7 px-6 mb-5">
      {streamingProviders.map((provider) => (
        <a
          className="flex justify-center items-center"
          href={provider.link}
          target="_blank"
        >
          <Image
            className="w-full"
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
