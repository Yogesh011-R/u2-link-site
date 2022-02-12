import React from 'react';
import { buyerData } from '../../constants';

const Buyer = () => {
  return (
    <div>
      <div className=''>
        {buyerData.map((item, idx) => {
          return (
            <div className='my-24 grid grid-cols-2  gap-10 '>
              <div
                className={`${item.classes} relative h-[435px] w-full rounded-3xl shadow-2xl`}
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
                  } absolute top-4 w-[82px] bg-white shadow-xl`}
                >
                  <h3 className='font-dmSans my-4  max-w-md text-center text-[18px]'>
                    Step <br />0{idx + 1}
                  </h3>
                </div>
              </div>
              <div className='relative order-1 mt-24 flex flex-col '>
                <h1 className='font-dmSans text-blackMid text-[28px] font-bold uppercase'>
                  {item.heading}
                </h1>
                <div
                  className={`${
                    idx !== 1 && 'right-[-10px]'
                  } absolute top-12 z-10 h-[1px] w-[130%] bg-[#3b3b3b] `}
                ></div>
                <p className='font-dmSans my-4 max-w-md text-[18px]'>
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

export default Buyer;
