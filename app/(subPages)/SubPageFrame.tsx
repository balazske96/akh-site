import React from 'react';

interface SubPageFrameProps {
  title?: string;
  children: React.ReactNode;
}

export default function SubPageFrame({ title, children }: SubPageFrameProps) {
  return (
    <div className={'mb-10 mt-20 font-martian md:mt-28'}>
      <h1
        className={
          'mb-5 py-4 text-center text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl'
        }
      >
        {title}
      </h1>
      {children}
    </div>
  );
}
