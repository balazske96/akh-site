import Image from "next/image";

import logo from "@/public/images/navbar-logo.webp";

interface NavbarProps {
  areThereAnyConcert?: boolean;
}

export function MainPageNavbar({ areThereAnyConcert = false }: NavbarProps) {
  const concertLink = `/${areThereAnyConcert ? "#" : ""}koncertek`;

  return (
    <header className="flex justify-center z-50 w-full relative lg:block ">
      <div className="lg:py-[2.6vw] lg:flex lg:flex-row lg:px-[14.79vw] lg:mx-auto">
        <div className="flex w-full justify-center mt-[14.72vw] lg:mt-0 z-50 lg:justify-start">
          <a href="/">
            <Image
              className="w-[60.55vw] lg:w-[11.72vw] opacity-80"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <nav className="absolute right-[50%] font-martian bottom-0 translate-x-1/2 translate-y-[169vw] z-50 lg:relative lg:translate-x-0 lg:translate-y-0 lg:right-auto">
          <ul className="flex gap-[10vw] lg:gap-[1.04vw]">
            <li className="text-[3.61vw] uppercase order-2 lg:order-1 lg:text-[0.78vw]">
              <a href={concertLink}>Koncertek</a>
            </li>
            <li className="text-[3.61vw] uppercase order-3 lg:order-2 lg:text-[0.78vw]">
              <a href="/#webshop">Merch</a>
            </li>
            <li className="text-[3.61vw] uppercase order-1 lg:order-3 lg:text-[0.78vw]">
              <a href="/#zene">Zene</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
