"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

import Section3Image1 from "@/public/images/section-3-image-1.webp";

export const Concerts = ({ concerts }: { concerts: IConcert[] }) => {
  return (
    <section>
      <div className="relative pt-[185.44vw] lg:pt-[15.78vw] lg:flex lg:flex-row lg:justify-end lg:pr-[10vw]">
        <Fade triggerOnce delay={100} fraction={0.2}>
          <Image
            className="absolute left-[-29.16vw] lg:left-[9.27vw] w-[115.83vw] h-auto top-[14.88vw] lg:top-[11.25vw] lg:w-[34.64vw] lg:h-[40.63vw]"
            src={Section3Image1}
            alt=""
          />
          <div className="absolute top-[20.27vw] lg:top-[48.02vw] right-[65%] translate-x-1/2 lg:translate-x-0 lg:left-[11.09vw] w-max text-white">
            <p className="text-[7vw] lg:text-[1.3vw] lg:inline-block leading-[9vw] lg:leading-[1.29vw] font-handwritten">
              Ezt az éjszakát is
            </p>
            <p className="text-[7vw] lg:text-[1.3vw] lg:inline-block leading-[9vw] lg:leading-[1.29vw] ml-[15vw] lg:ml-[0.2vw] font-handwritten">
              követeli a hajnal...
            </p>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div
            id="koncertek"
            className="absolute mx-auto z-50 w-[80.55vw] lg:w-[21.41vw] h-[80.55vw] lg:h-[21.88vw] left-[50%] lg:left-[26.82vw] translate-x-[-50%] lg:translate-x-0 top-[123.88vw] lg:top-[4.22vw] overflow-hidden"
          >
            <h2 className="font-martian absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-extrabold text-center leading-[14.33vw] text-[11.94vw] lg:text-[3.3vw] lg:leading-[4.3vw] uppercase text-white z-20">
              Közelgő
              <br />
              koncert
              <br />
              dátumok
            </h2>
            <video
              className="absolute top-0 left-0 h-full w-auto object-cover z-10"
              src="/videos/audience-hands.webm"
              autoPlay
              muted
              loop
            />
          </div>
        </Fade>
        <div className="font-martian flex flex-col justify-between pt-[35vw] lg:pt-[4.48vw] pb-[14.16vw] lg:pb-[11.82vw] lg:pr-[5.94vw] lg:pl-[8.23vw] bg-white px-[5vw] gap-[8.33vw] lg:w-[48.91vw] lg:gap-[1.56vw]">
          {concerts.map((concert) => (
            <div
              key={concert.displayName}
              className="flex justify-between lg:border-b-[0.05vw] lg:border-[black] lg:pb-[1.56vw]"
            >
              <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[auto_14vw_1fr] grid-rows-2 lg:grid-rows-1 gap-x-[2.78vw] lg:gap-x-[1.98vw] w-full">
                <span className="text-[2.77vw] font-light leading-[3.33vw] lg:text-[0.57vw] lg:leading-[0.72vw] lg:flex items-center">
                  {concert.date}
                </span>
                <span className="text-[2.77vw] lg:col-start-3 lg:row-start-1 font-light leading-[3.33vw] lg:text-[0.57vw] lg:leading-[0.72vw] lg:flex items-center lg:justify-start">
                  {concert.venue}
                </span>
                <p className="text-[5.5vw] col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 uppercase leading-[6.67vw] font-extrabold max-w-[65vw] overflow-x-hidden text-ellipsis whitespace-nowrap lg:text-[1.25vw] lg:leading-[1.56vw]">
                  {concert.displayName}
                </p>
              </div>
              <div className="flex justify-center items-end lg:items-center">
                <a
                  className="py-[2.78vw] leading-[4.33vw] px-[3.61vw] text-[3.61vw] border-2 border-[#CDCDCD] rounded-[13.05vw] lg:text-[0.78vw] lg:leading-[0.94vw] lg:border-b-[0.05vw] lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:rounded-none lg:p-0 lg:border-[#2B2C2D]"
                  href={concert.ticketLink}
                >
                  JEGYEK
                </a>
              </div>
            </div>
          ))}
          <a
            className="lg:order-first flex items-center lg:justify-end gap-[2.77vw] lg:gap-[1.56vw]"
            href="#"
          >
            <span className="text-[4vw] lg:text-[0.78vw]">
              Összes koncert dátum
            </span>
            <svg
              className="w-[9.72vw] h-[2.5vw] mb-[-0.5vw] lg:w-[1.72vw] lg:mb-[-0.1vw]"
              width="35"
              height="9"
              viewBox="0 0 35 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM34.3536 4.85356C34.5488 4.65829 34.5488 4.34171 34.3536 4.14645L31.1716 0.964469C30.9763 0.769207 30.6597 0.769206 30.4645 0.964469C30.2692 1.15973 30.2692 1.47631 30.4645 1.67158L33.2929 4.5L30.4645 7.32843C30.2692 7.52369 30.2692 7.84027 30.4645 8.03554C30.6597 8.2308 30.9763 8.2308 31.1716 8.03554L34.3536 4.85356ZM1 5L34 5L34 4L1 4L1 5Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
