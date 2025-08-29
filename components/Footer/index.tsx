'use server';

import Image from 'next/image';
import Link from 'next/link';

import { getSocialMediaPlatforms } from '@/lib/helpers';
import BandLogo from '@/components/BandLogo';
import FooterSeoHelper from '@/components/Footer/FooterSeoHelper';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const socialMediaPlatforms = await getSocialMediaPlatforms();

  return (
    <footer className={'footer'}>
      <div className={'footer__body'}>
        <div className={'footer__links'}>
          <Link href={'/impresszum'}>Impresszum</Link>
          <div className={'footer__links-separator'}>
            <BandLogo />
          </div>
          <Link href={'/kapcsolat'}>Kapcsolat</Link>
        </div>
        <div className='footer__social-media-platforms'>
          {socialMediaPlatforms.map((platform) => (
            <a key={platform.link} href={platform.link} target='_blank'>
              <Image
                src={platform.logo}
                alt={`${platform} logo`}
                className={'footer__social-media-platform-logo'}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
        <div className={'footer__copyright'}>
          Copyright {currentYear} @ A Király Halott
        </div>
      </div>
      <FooterSeoHelper socialMediaPlatforms={socialMediaPlatforms} />
    </footer>
  );
}
