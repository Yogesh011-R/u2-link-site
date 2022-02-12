import React from 'react';

const Payment = () => {
  return (
    <div className='container  mx-auto h-screen'>
      <div className='grid h-full grid-cols-2  place-items-center items-center  gap-16'>
        <div>
          <h2 className='w-fit rounded-[5px] bg-[#c4c4c468] p-1 px-2'>
            Add multiple shipping methods
          </h2>
          <h1 className='text-primaryDark font-dmSerif my-6  text-[42px]'>
            Collect payments online & offline
          </h1>
          <p className=' text-lg'>
            All common payment methods are possible in your u2lynk. Don't just
            choose between credit card, invoice, cash on pick-up and cash on
            delivery. But also use all other payment methods like PayPal and
            Amazon Pay. There are many more waiting for you.
          </p>
        </div>
        <div className='relative'>
          <img
            src='/images/payment1.png'
            className='rounded-lg shadow-xl '
            alt=''
          />
          <img
            src='/images/dots.svg'
            className='absolute top-20 left-[-180px]'
            alt=''
          />
          <img
            src='/images/dots.svg'
            className='absolute bottom-[-40px] right-[-150px]'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
