"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { useState } from "react";

import Section4Image1 from "@/public/images/section-4-image-1.webp";
import Section4Image2 from "@/public/images/section-4-image-2.webp";
import MoneyA from "@/public/images/section-4-money-a.webp";
import MoneyB from "@/public/images/section-4-money-b.webp";
import { fadedImageDefaultRevealTime } from "@/constants";
import { fadedImageRevealDefaultFraction } from "@/constants";

export const Webshop = ({ products }: { products: IWebshopProduct[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [previewProduct, setPreviewProduct] = useState<IWebshopProduct>(
    products[0]
  );

  const [shouldDisplayPrevButton, setShouldDisplayPrevButton] = useState(false);
  const [shouldDisplayNextButton, setShouldDisplayNextButton] = useState(true);

  useEffect(() => {
    if (emblaApi) {
      emblaApi?.on("select", () => {
        setShouldDisplayNextButton(emblaApi.canScrollNext());
        setShouldDisplayPrevButton(emblaApi.canScrollPrev());
      });
    }

    return () => emblaApi?.destroy();
  }, [emblaApi]);

  return (
    <section className="pt-[150vw] lg:pt-0 relative">
      <Fade
        fraction={fadedImageRevealDefaultFraction}
        triggerOnce
        duration={fadedImageDefaultRevealTime}
      >
        <Image
          className="absolute w-[91.66vw] top-[18.33vw] lg:top-[-7.55vw] right-0 lg:right-[17.14vw] lg:w-[27.66vw] lg:h-[16.88vw]"
          src={Section4Image1}
          alt=""
        />
      </Fade>
      <Fade
        fraction={fadedImageRevealDefaultFraction}
        triggerOnce
        duration={fadedImageDefaultRevealTime}
        delay={100}
      >
        <Image
          className="absolute w-[47.77vw] lg:w-[16.25vw] top-[62.77vw] lg:top-[3.59vw] right-[3.33vw] lg:right-[19.58vw]"
          src={Section4Image2}
          alt=""
        />
      </Fade>
      {/* <!-- Money 1 --> */}
      <Image
        className="absolute w-[21.38vw] lg:w-[3.44vw] top-[78.61vw] lg:top-[5.26vw] left-[20.83vw] lg:left-[53.02vw]"
        src={MoneyA}
        alt=""
      />
      {/* <!-- Money 2 --> */}
      <Image
        className="absolute w-[30.55vw] lg:w-[12.19vw] rotate-[-21.65deg] lg:rotate-0 left-[28.33vw] lg:left-[50.03vw] top-[111.11vw] lg:top-[12.79vw]"
        src={MoneyB}
        alt=""
      />
      {/* <!-- Quote --> */}
      <div
        id="webshop"
        className="absolute top-[102vw] lg:top-[11.3vw] left-[1vw] lg:left-[42vw]"
      >
        <p className="text-[7vw] tracking-widest leading-[7vw] lg:text-[1.6vw] lg:leading-[1.7vw] font-handwritten">
          Termék
          <br className="lg:hidden" />
          vagyok, <br className="lg:hidden" />
          leszek, voltam
          <br />
          Ha egy
          <br className="lg:hidden" />
          valamit, ezt
          <br />
          megtanultam
        </p>
      </div>
      <div className="pb-[8vw] font-martian lg:absolute lg:left-[10vw]">
        <a href={previewProduct.link} id="product-link" target="_blank">
          <div>
            <Image
              alt=""
              width={300}
              height={322}
              id="preview-image"
              className="mx-auto w-[83.33vw] lg:w-[27.60vw]"
              src={previewProduct.image}
            />
          </div>
          <div>
            <p
              id="title-container"
              className="text-[6.94vw] lg:text-[1.30vw] lg:leading-[1.56vw] text-center font-bold pt-[5vw] lg:pt-[0.5vw]"
            >
              {previewProduct.name}
            </p>
          </div>
          <div>
            <p
              id="price-container"
              className="text-center text-[3.33vw] lg:text-[1.04vw] pt-[1vw] pb-[3vw] lg:pb-[1vw]"
            >
              {previewProduct.price}
            </p>
          </div>
        </a>
        <div id="webshop-slider" className="mt-[2vw] lg:mt-0">
          <div
            className="flex lg:justify-between flex-row px-[6.11vw] lg:px-0 gap-[4.15vw] lg:gap-[1vw] lg:mx-auto"
            data-glide-el="controls"
          >
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className={`rotate-180 ${shouldDisplayPrevButton ? "opacity-100" : "opacity-0"}`}
            >
              <svg
                className="w-[7.22vw] h-[7.22vw] lg:w-[2.2vw] lg:h-[2.2vw]"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="12.5" stroke="black" />
                <path
                  d="M7 12.5C6.72386 12.5 6.5 12.7239 6.5 13C6.5 13.2761 6.72386 13.5 7 13.5L7 12.5ZM19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM7 13.5L19 13.5L19 12.5L7 12.5L7 13.5Z"
                  fill="black"
                />
              </svg>
            </button>
            <div
              ref={emblaRef}
              className="overflow-hidden w-full lg:w-[17.81vw]"
            >
              <div className="flex">
                {products.map((product) => (
                  <a
                    className="flex-none w-[33%] min-w-0 flex justify-center"
                    key={product.id}
                    href={product.link}
                    onClick={(event) => {
                      event.preventDefault();
                      setPreviewProduct(product);
                    }}
                  >
                    <Image
                      className="w-[70%]"
                      width={57}
                      height={52}
                      alt=""
                      src={product.image}
                    />
                  </a>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className={`${shouldDisplayNextButton ? "opacity-100" : "opacity-0"}`}
            >
              <svg
                className="w-[7.22vw] h-[7.22vw] lg:w-[2.2vw] lg:h-[2.2vw]"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="12.5" stroke="black" />
                <path
                  d="M7 12.5C6.72386 12.5 6.5 12.7239 6.5 13C6.5 13.2761 6.72386 13.5 7 13.5L7 12.5ZM19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM7 13.5L19 13.5L19 12.5L7 12.5L7 13.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <a
          target="_blank"
          href="https://shop.akiralyhalott.hu"
          className="flex w-full flex-row justify-center items-center gap-[4vw] lg:gap-[1.04vw] py-[6.94vw] lg:py-[2vw] mb-[-0.7vw]"
        >
          <span className="text-[4.15vw] lg:text-[0.78vw] font-medium">
            WEBSHOP
          </span>
          <svg
            className="h-[2.22vw] w-[9.44vw] lg:w-[1.72vw]"
            fill="none"
            height="8"
            viewBox="0 0 34 8"
            width="34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m33.3536 4.35356c.1952-.19527.1952-.51185 0-.70711l-3.182-3.181981c-.1953-.195262-.5119-.195263-.7071 0-.1953.195262-.1953.511844 0 .707111l2.8284 2.82842-2.8284 2.82843c-.1953.19526-.1953.51184 0 .70711.1952.19526.5118.19526.7071 0zm-33.35360004.14644h33.00000004v-1h-32.99999996z"
              fill="#000"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
