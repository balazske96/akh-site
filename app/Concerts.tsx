import Image from "next/image";

import Section3Image1 from "@/public/images/section-3-image-1.webp";

export const Concerts = ({ concerts }: { concerts: IConcert[] }) => {
  return (
    <section>
      <div className="relative pt-[185.44vw]">
        <Image
          className="absolute left-[-29.16vw] w-[115.83vw] h-auto top-[14.88vw]"
          src={Section3Image1}
          alt=""
        />
        <div className="absolute top-[20.27vw] right-[65%] translate-x-1/2 w-max text-white">
          <p className="text-[7vw] leading-[9vw] font-handwritten">
            Ezt az éjszakát is
          </p>
          <p className="text-[7vw] leading-[9vw] ml-[15vw] font-handwritten">
            követeli a hajnal...
          </p>
        </div>
        <div
          id="koncertek"
          className="absolute mx-auto z-50 w-[80.55vw] h-[80.55vw] left-[50%] translate-x-[-50%] top-[123.88vw] overflow-hidden"
        >
          <h2 className="font-martian absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-extrabold text-center leading-[14.33vw] text-[11.94vw] uppercase text-white z-20">
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
        <div className="font-martian flex flex-col justify-between pt-[35vw] pb-[14.16vw] bg-white px-[5vw] gap-[8.33vw]">
          {concerts.map((concert) => (
            <div key={concert.displayName} className="flex justify-between">
              <div className="flex flex-col items-start justify-between gap-[2vw]">
                <div className="flex justify-between gap-[2.77vw]">
                  <span className="text-[2.77vw] font-light leading-[3.33vw]">
                    {concert.date}
                  </span>
                  <span className="text-[2.77vw] font-light leading-[3.33vw]">
                    {concert.venue}
                  </span>
                </div>
                <p className="text-[5.5vw] uppercase leading-[6.66vw] font-extrabold max-w-[65vw] overflow-x-hidden text-ellipsis whitespace-nowrap">
                  {concert.displayName}
                </p>
              </div>
              <div className="flex justify-center items-end">
                <a
                  className="py-[2.78vw] leading-[4.33vw] px-[3.61vw] text-[3.61vw] border-2 border-[#CDCDCD] rounded-[13.05vw]"
                  href={concert.ticketLink}
                >
                  JEGYEK
                </a>
              </div>
            </div>
          ))}
          <a className="xl:order-first flex items-center gap-[2.77vw]" href="#">
            <span>Összes koncert dátum</span>
            <svg
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
