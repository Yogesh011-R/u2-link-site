import React from 'react';
import { paymentIcons, paymentImages } from '../constants';

const Payment = () => {
  return (
    <div className='container my-10 mx-auto h-auto md:my-0 md:h-screen'>
      <div className='grid h-auto items-center md:h-full md:grid-cols-2  md:gap-16'>
        <div className='px-5 md:px-0'>
          <h2 className='w-fit rounded-[5px] bg-[#c4c4c468]  py-1  px-4 text-xs sm:text-base'>
            Add multiple shipping methods
          </h2>
          <h1 className='text-primaryDark  font-dmSerif my-3 text-left text-lg  sm:my-6 sm:text-4xl md:text-5xl'>
            Collect payments online & offline
          </h1>
          <p className='hidden text-lg md:block'>
            All common payment methods are possible in your u2lynk. Don't just
            choose between credit card, invoice,
            &nbsp;
            But also use all other payment methods like PayPal and Amazon Pay.
            There are many more waiting for you.
          </p>
          <div className='my-10 hidden md:block'>
            <div className='flex gap-5'>
              {paymentImages.map(item => {
                return (
                  <div
                    key={item.id}
                    className='flex h-[45px] w-[66px] items-center justify-center rounded-lg border-2'
                  >
                    <div>
                      <img src={item.image} alt='payment' />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='mt-6 flex gap-5'>
              {paymentIcons.map(item => {
                return (
                  <div
                    key={item.id}
                    className=' flex h-[45px] w-[66px]  items-center justify-center rounded-lg border-2'
                  >
                    <img src={item.image} alt='payment' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='relative my-8 mx-auto h-96 w-40 sm:h-[628px] sm:w-[283px] md:my-0'>
          <img
            src='/images/payment1.png'
            className='h-full w-full rounded-lg object-cover shadow-2xl '
            alt=''
          />
          <img
            src='/images/dots.svg'
            className='absolute top-20 left-[-180px]'
            alt=''
          />
          <img
            src='/images/dots.svg'
            className='absolute bottom-[20px] right-[-150px] md:bottom-[-40px]'
            alt=''
          />
        </div>
        <div className='my-8 px-5 md:hidden md:px-0'>
          <p className='text-base sm:text-lg '>
            All common payment methods are possible in your u2lynk. Don't just
            choose between credit card, invoice, But also use all other payment methods like PayPal and
            Amazon Pay. There are many more waiting for you.
          </p>
        </div>
        <div className='my-10  px-5 md:hidden'>
          <div className='flex flex-wrap gap-5'>
            {paymentImages.map(item => {
              return (
                <div
                  key={item.id}
                  className='flex h-[45px] w-[66px] items-center justify-center rounded-lg border-2'
                >
                  <div>
                    <img src={item.image} alt='payment' />
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mt-6 flex gap-5'>
            {paymentIcons.map(item => {
              return (
                <div
                  key={item.id}
                  className=' flex h-[45px] w-[66px]  items-center justify-center rounded-lg border-2'
                >
                  <img src={item.image} alt='payment' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
