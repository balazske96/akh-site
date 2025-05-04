import Image from 'next/image';

import logo from '@/public/images/navbar-logo.webp';

interface NavbarProps {
  areThereAnyConcert?: boolean;
}

export function MainPageNavbar({ areThereAnyConcert = false }: NavbarProps) {
  const concertLink = `/${areThereAnyConcert ? '#' : ''}koncertek`;

  return (
    <header className='relative z-50 flex w-full justify-center lg:block'>
      <div className='lg:mx-auto lg:flex lg:flex-row lg:px-[14.79vw] lg:py-[2.6vw]'>
        <div className='z-50 mt-[14.72vw] flex w-full justify-center lg:mt-0 lg:justify-start'>
          <a href='/'>
            <Image
              className='w-[60.55vw] opacity-80 lg:w-[11.72vw]'
              src={logo}
              alt=''
            />
          </a>
        </div>
        <nav className='absolute bottom-0 right-[50%] z-50 translate-x-1/2 translate-y-[169vw] font-martian lg:relative lg:right-auto lg:translate-x-0 lg:translate-y-0'>
          <ul className='flex gap-[10vw] lg:gap-[1.04vw]'>
            <li className='order-2 text-[3.61vw] uppercase lg:order-1 lg:text-[0.78vw]'>
              <a href={concertLink}>Koncertek</a>
            </li>
            <li className='order-3 text-[3.61vw] uppercase lg:order-2 lg:text-[0.78vw]'>
              <a href='/#webshop'>Merch</a>
            </li>
            <li className='order-1 text-[3.61vw] uppercase lg:order-3 lg:text-[0.78vw]'>
              <a href='/#zene'>Zene</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
