import SubPageFrame from '@/app/(subPages)/SubPageFrame';

export default function ImpressumPage() {
  return (
    <SubPageFrame title={'Impresszum'}>
      <div
        className={
          'flex flex-col items-center gap-2 px-8 text-center text-xs sm:gap-3 sm:text-sm md:gap-4 md:text-lg lg:gap-8 lg:text-2xl'
        }
      >
        <p>
          <b>Cégnév:</b> <br />
          Venyige Balázs EV
        </p>
        <p>
          <b>E-mail:</b>
          <br /> venyigebalazs96@gmail.com
        </p>
        <p>
          <b>A céget bejegyző hatóság:</b>
          <br />
          Nemzeti Adó- és Vámhivatal
        </p>
        <p>
          <b>Adószám:</b>
          <br />
          59797920-1-42
        </p>
        <p className='max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'>
          <b>Tárhelyszolgáltató:</b>
          <br />
          Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789 vercel.com
          <br />
          <a className={'underline'} href='mailto:privacy@vercel.com'>
            privacy@vercel.com
          </a>
        </p>
      </div>
    </SubPageFrame>
  );
}
