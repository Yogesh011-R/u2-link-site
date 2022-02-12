import React from 'react';

const Header = () => {
  return (
    <header className='container mx-auto h-[10vh]'>
      <nav className='flex h-full items-center justify-center md:justify-start '>
        <img src='/images/logo.svg' alt='' />
      </nav>
    </header>
  );
};

export default Header;
