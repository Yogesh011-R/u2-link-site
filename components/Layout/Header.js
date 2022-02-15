import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className=' h-[8vh] shadow-md md:h-[10vh]'>
      <nav className=' container mx-auto flex h-full items-center justify-center p-4 md:justify-start '>
        <Link href='/'>
          <img
            src='/images/logo.svg'
            className='h-6 cursor-pointer sm:h-11'
            alt=''
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
