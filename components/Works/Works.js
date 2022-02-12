import React, { useState } from 'react';
import Buyer from './Buyer';
import Sellers from './Sellers';

const Works = () => {
  const [activeFeild, setActiveFeild] = useState(0);
  return (
    <div className='container mx-auto my-28 '>
      <h1 className='font-dmSerif text-primaryDark text-center text-[42px]'>
        How it works
      </h1>
      <div
        className={`border-primaryDark my-10 mx-auto flex max-w-3xl items-center justify-between border-b-2 pb-[-80px]`}
      >
        <div
          className={`dmSans w-1/2  ${
            activeFeild === 0 && 'border-primaryDark border-b-[6px]'
          }  text-primaryDark pb-4 text-center text-[32px]`}
        >
          <button className='w-full' onClick={() => setActiveFeild(0)}>
            I am Seller
          </button>
        </div>
        <div
          className={`dmSans w-1/2  ${
            activeFeild === 1 && 'border-primaryDark border-b-[6px]'
          }  text-primaryDark pb-4 text-center text-[32px]`}
        >
          <button className='w-full' onClick={() => setActiveFeild(1)}>
            I am Buyer
          </button>
        </div>
      </div>
      <div className='my-24 mx-auto max-w-6xl'>
        {activeFeild === 0 ? <Sellers /> : <Buyer />}
      </div>
    </div>
  );
};

export default Works;
