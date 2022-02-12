const Hero = () => {
  return (
    <div className='bg-primaryDark'>
      <div className='container grid h-auto justify-between px-4 pt-10 pb-72 sm:pt-20 md:mx-auto md:h-full md:grid-cols-2 md:gap-4 md:px-7 md:py-40 xl:gap-0'>
        <div className=''>
          <h1 className='font-dmSerif text-[30px] text-white sm:text-[52px]  md:text-[48px] lg:text-[60px] xl:text-[72px]'>
            Catalog less app <br />
            for fashion designers
          </h1>
          <p className='font-dmSans mt-5 text-base text-white md:text-[18px] lg:text-[17px] xl:text-[18px]'>
            Seamlessly sell products from any social media platform on U2Lynk
          </p>
        </div>

        <div className='relative mt-12 flex justify-center md:mt-0'>
          <div className='relative mt-10 w-full md:h-[300px] md:max-w-sm lg:max-w-md xl:h-[377px] xl:max-w-lg'>
            <img
              src='/images/hero1.png'
              className='h-full w-full rounded-md object-cover'
              alt=''
            />
            <img
              src='/icons/cart.svg'
              className='absolute left-[-30px] top-[-42px] z-10 w-28 md:top-[-58px] md:left-[-58px] md:w-auto'
              alt=''
            />
            <img
              src='/icons/user.svg'
              className='absolute left-0 bottom-[-72px] z-10 w-28 md:bottom-[-108px] md:w-auto '
              alt=''
            />
            <img
              src='/icons/paint.svg'
              className='absolute left-36 top-[-90px] z-10 w-28  md:top-[-128px] md:w-auto'
              alt=''
            />
          </div>

          <div className='absolute right-[50%] top-28 h-[360px] translate-x-2/4 sm:top-40 sm:right-52 sm:translate-x-0 md:top-20 md:right-[-50px] md:h-[350px] lg:right-[-45px] lg:h-[400px] xl:right-[-20px] xl:h-full 2xl:right-0'>
            <img src='/images/hero2.png' className='h-full w-full' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
