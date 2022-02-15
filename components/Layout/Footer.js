import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='h-auto bg-[#F9F9F7] xl:h-[275px]'>
      <div className='container mx-auto  '>
        <div className='gap-40 px-5 pb-16 pt-12 sm:pt-20 md:flex md:px-0'>
          <div>
            <img src='/images/logo.svg' alt='' />
          </div>
          <div className='mt-10 md:mt-0'>
            <h2 className='font-dmSerif text-[20px]'>Important links</h2>
            <ul className='font-dmSans mt-5 grid  list-none flex-wrap gap-4 text-base underline sm:flex '>
              <li className=''>
                <Link href='/support/faq'>FAQs Customers</Link>
              </li>
              <li className=''>
                <Link href='/support/faq-vendors'>FAQs Vendors</Link>
              </li>
              <li className=''>
                <Link href='/support/return-and-refund-policy'>
                  Return and Refund
                </Link>
              </li>
              <li className=''>
                <Link href='/support/cancellations'>Cancellationsd</Link>
              </li>
              <li className=''>
                <Link href='/support/privacy-policy'>Privary Policy</Link>
              </li>
              <li className=''>
                <Link href='/support/shipping-policy'>Shipping Policy</Link>
              </li>
              <li className=''>
                <Link href='/support/gift-card'>Gift Card</Link>
              </li>
              <li className=''>
                <Link href='/support/terms-and-conditions'>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='h-[0.5px] w-full bg-[#9D8E73]'></div>
        <div>
          <h2 className='font-dmSans py-5 text-center text-[16px]'>
            © 2021 U2lynk All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
