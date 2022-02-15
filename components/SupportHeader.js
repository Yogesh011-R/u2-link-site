import React from 'react';

const SupportHeader = ({ title }) => {
  return (
    <div className='my-8 flex items-center gap-10 md:my-16'>
      <h1 className='font-dmSans md:!font-dmSerif !text-primaryDark  text-2xl sm:text-3xl  md:text-4xl xl:text-4xl'>
        {title}
      </h1>
      <div className='bg-primaryMedium h-[1px] flex-1'></div>
    </div>
  );
};

export default SupportHeader;
