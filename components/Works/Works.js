import React, { useState } from 'react';
import Buyer from './Buyer';
import Sellers from './Sellers';

const Works = () => {
  const [activeFeild, setActiveFeild] = useState(0);
  return (
    <div className='sm:my:16 container mx-auto my-8 md:my-28 '>
      <h1 className='font-dmSerif text-primaryDark text-center text-xl sm:text-[36px] md:text-[42px]'>
        How it works
      </h1>
      <div
        className={`border-primaryDark sm:,x-0 my-3 mx-4 flex max-w-3xl items-center justify-between border-b-2 pb-[-80px] sm:my-7 md:mx-auto md:my-10`}
      >
        <div
          className={`dmSans w-1/2  ${
            activeFeild === 0 &&
            'border-primaryDark border-b-2 md:border-b-[6px]'
          }  text-primaryDark pb-4 text-center text-lg sm:text-[25px]  md:text-[30px]`}
        >
          <button className='w-full' onClick={() => setActiveFeild(0)}>
            I am Seller
          </button>
        </div>
        <div
          className={`dmSans w-1/2  ${
            activeFeild === 1 &&
            'border-primaryDark border-b-2 md:border-b-[6px]'
          }  text-primaryDark pb-4 text-center text-lg sm:text-[25px]  md:text-[30px]`}
        >
          <button className='w-full' onClick={() => setActiveFeild(1)}>
            I am Buyer
          </button>
        </div>
      </div>
      <div className='my-8 mx-auto max-w-6xl p-8 sm:p-0 md:my-24'>
        {activeFeild === 0 ? <Sellers /> : <Buyer />}
      </div>
    </div>
  );
};

export default Works;
