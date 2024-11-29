import Image from "next/image";

import logo from "@/public/images/navbar-logo.webp";

export default function Navbar() {
  return (
    <header className="flex justify-center z-50 w-full relative xl:block ">
      <div className="max-w-[1350px] xl:py-[50px] xl:flex xl:flex-row xl:px-[10px] xl:mx-auto">
        <div className="flex w-full justify-center mt-[14.72vw] xl:mt-0 z-50 xl:justify-start">
          <a href="/">
            <Image
              className="w-[60.55vw] xl:w-[225px] opacity-80"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <nav className="absolute right-[50%] bottom-0 translate-x-1/2 translate-y-[169vw] z-50 xl:relative xl:translate-x-0 xl:translate-y-0 xl:right-auto">
          <ul className="flex gap-[10vw] xl:gap-[20px]">
            <li className="text-[3.61vw] uppercase order-2 xl:order-1 xl:text-[15px]">
              <a href="/#koncertek">Koncertek</a>
            </li>
            <li className="text-[3.61vw] uppercase order-3 xl:order-2 xl:text-[15px]">
              <a href="/#webshop">Merch</a>
            </li>
            <li className="text-[3.61vw] uppercase order-1 xl:order-3 xl:text-[15px]">
              <a href="/#zene">Zene</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
