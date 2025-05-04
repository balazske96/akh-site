'use server';

import BandLogo from '../BandLogo';
import { getFooterLinks } from '@/lib/helpers';

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  const links = await getFooterLinks();

  return (
    <footer className='footer'>
      <div className='footer__body'>
        <div className='footer__band-logo-container'>
          <BandLogo />
        </div>
        <div className='footer__links'>
          {links.map((link) => (
            <a
              key={link.href}
              className='footer__link'
              href={link.href}
              target={link.external ? '_blank' : '_self'}
            >
              {link.displayName}
            </a>
          ))}
        </div>
        <div className='footer__copyright'>
          Copyright {currentYear}
          <br className='lg:hidden' /> @ A Király Halott
        </div>
      </div>
    </footer>
  );
}
