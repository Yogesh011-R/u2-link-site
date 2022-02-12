import React from 'react';

const Header = () => {
  return (
    <header className='container mx-auto h-[8vh] md:h-[10vh]'>
      <nav className='flex h-full items-center justify-center md:justify-start '>
        <img src='/images/logo.svg' className='h-6 sm:h-11' alt='' />
      </nav>
    </header>
  );
};

export default Header;
