import React from 'react';

import { SubPageNavbar } from '@/components/Navbar/SubPageNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageNavbar />
      {children}
    </>
  );
}
