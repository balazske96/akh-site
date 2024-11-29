"use client";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import Section4Image1 from "@/public/images/section-4-image-1.webp";
import Section4Image2 from "@/public/images/section-4-image-2.webp";
import MoneyA from "@/public/images/section-4-money-a.webp";
import MoneyB from "@/public/images/section-4-money-b.webp";

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
    <section className="pt-[150vw] relative">
      <Image
        className="absolute w-[91.66vw] top-[18.33vw] right-0"
        src={Section4Image1}
        alt=""
      />
      <Image
        className="absolute w-[47.77vw] top-[62.77vw] right-[3.33vw]"
        src={Section4Image2}
        alt=""
      />
      {/* <!-- Money 1 --> */}
      <Image
        className="absolute w-[21.38vw] top-[78.61vw] left-[20.83vw]"
        src={MoneyA}
        alt=""
      />
      {/* <!-- Money 2 --> */}
      <Image
        className="absolute w-[30.55vw] rotate-[-21.65deg] left-[28.33vw] top-[111.11vw]"
        src={MoneyB}
        alt=""
      />
      {/* <!-- Quote --> */}
      <div id="webshop" className="absolute top-[102vw] left-[1vw]">
        <p className="text-[7vw] tracking-widest leading-[7vw] font-handwritten">
          Termék
          <br />
          vagyok,
          <br />
          leszek, voltam
          <br />
          Ha egy
          <br />
          valamit,ezt
          <br />
          megtanultam
        </p>
      </div>
      <div className="pb-[8vw] font-martian">
        <a href={previewProduct.link} id="product-link" target="_blank">
          <div>
            <Image
              alt=""
              width={300}
              height={322}
              id="preview-image"
              className="mx-auto w-[83.33vw]"
              src={previewProduct.image}
            />
          </div>
          <div>
            <p
              id="title-container"
              className="text-[6.94vw] text-center font-bold pt-[5vw]"
            >
              {previewProduct.name}
            </p>
          </div>
          <div>
            <p
              id="price-container"
              className="text-center text-[3.33vw] pt-[1vw] pb-[3vw]"
            >
              {previewProduct.price}
            </p>
          </div>
        </a>
        <div id="webshop-slider" className="mt-[2vw]">
          <div
            className="glide__arrows flex flex-row px-[6.11vw] gap-[4.15vw]"
            data-glide-el="controls"
          >
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className={`rotate-180 ${shouldDisplayPrevButton ? "opacity-100" : "opacity-0"}`}
            >
              <svg
                className="w-[7.22vw] h-[7.22vw]"
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
            <div ref={emblaRef} className="overflow-hidden w-full">
              <div className="flex">
                {products.map((product) => (
                  <a
                    className="flex-none w-[33%] min-w-0"
                    key={product.id}
                    href={product.link}
                    onClick={(event) => {
                      event.preventDefault();
                      setPreviewProduct(product);
                    }}
                  >
                    <Image width={57} height={52} alt="" src={product.image} />
                  </a>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className={`${shouldDisplayNextButton ? "opacity-100" : "opacity-0"}`}
            >
              <svg
                className="w-[7.22vw] h-[7.22vw]"
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
          className="flex w-full flex-row justify-center items-center gap-[5.55vw] py-[6.94vw]"
        >
          <span className="text-[4.15vw] font-medium">WEBSHOP</span>
          <svg
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
