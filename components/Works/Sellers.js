import React from 'react';
import { sellerData } from '../../constants';

const Sellers = () => {
  return (
    <div>
      <div className=''>
        {sellerData.map((item, idx) => {
          return (
            <div
              className='my-2 grid-cols-2 gap-10 md:my-24  md:grid'
              key={idx}
            >
              <div
                className={`${
                  idx === 1 && 'order-2'
                }  relative h-[435px] w-full rounded-3xl shadow-2xl`}
              >
                <img
                  src={item.image}
                  className='h-full w-full rounded-3xl object-cover'
                />
                <div
                  className={` ${
                    idx !== 1
                      ? 'right-6 rounded-tr-2xl'
                      : 'left-6 rounded-tl-2xl'
                  } absolute top-4 h-[81px] w-[82px]  bg-white shadow-xl`}
                >
                  <h3 className='font-dmSans my-4  max-w-md text-center text-[18px]'>
                    Step <br />0{idx + 1}
                  </h3>
                </div>
              </div>
              <div className='relative order-1 mt-12 flex flex-col md:mt-24 '>
                <h1 className='font-dmSans text-blackMid text-lg font-bold uppercase sm:text-[28px]'>
                  {item.heading}
                </h1>

                <div
                  className={`${
                    idx !== 1 && 'md:right-[-10px]'
                  } absolute top-8 z-10 h-[1px] w-full bg-[#3b3b3b] sm:top-10  md:w-[130%] `}
                ></div>
                <p className='font-dmSans my-4 max-w-md text-base sm:text-lg'>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sellers;
