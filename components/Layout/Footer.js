import React from 'react';

const Footer = () => {
  return (
    <footer className=' h-[275px] bg-[#F9F9F7]'>
      <div className='container mx-auto  '>
        <div className=' gap-40 pb-16 pt-20 md:flex'>
          <div>
            <img src='/images/logo.svg' alt='' />
          </div>
          <div className='mt-10 md:mt-0'>
            <h2 className='font-dmSerif text-[20px]'>Important links</h2>
            <ul className='mt-5 flex flex-wrap gap-4 font-dmSans text-[15px] underline '>
              <li className=''>
                <a href='#'>FAQs Customers</a>
              </li>
              <li className=''>
                <a href='#'>Return and Refund</a>
              </li>
              <li className=''>
                <a href='#'>Privary Policy</a>
              </li>
              <li className=''>
                <a href='#'>Shipping Policy</a>
              </li>
              <li className=''>
                <a href='#'>Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='h-[0.5px] w-full bg-[#9D8E73]'></div>
        <div>
          <h2 className='my-4 text-center font-dmSans text-[16px]'>
            © 2021 U2lynk All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
