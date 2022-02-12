const Support = () => {
  return (
    <div className='bg-primaryLight '>
      <div className='container relative mx-auto max-w-7xl  py-8 px-4 sm:py-14 md:py-20  md:px-0'>
        <h2 className='w-fit rounded-[5px] bg-[#c4c4c468] p-1 px-2 text-xs sm:text-base md:hidden'>
          Add multiple shipping methods
        </h2>
        <h1 className=' text-primaryDark font-dmSerif lin my-4  text-lg sm:text-4xl  md:hidden'>
          We support you with your shipping methods
        </h1>
        <img
          src='/images/dots.svg'
          className='absolute  left-[15%] top-80 md:top-48 md:left-[-40px]'
          alt=''
        />
        <img
          src='/images/dots.svg'
          className='absolute right-[5%] bottom-56 md:left-[500px] md:bottom-28'
          alt=''
        />
        <div className='my-8 ml-4 grid place-items-center items-center justify-center gap-10 md:my-0 md:flex lg:gap-16 xl:ml-36'>
          <div className='z-10 h-96 w-40 rounded-xl  md:h-[628px] md:w-[283px]'>
            <img
              src='/images/support1.png'
              alt=''
              className='h-full w-full rounded-xl object-cover shadow-lg'
            />
          </div>
          <div className='max-w-xl flex-[0.9] lg:max-w-3xl lg:flex-1'>
            <h2 className='hidden w-fit rounded-[5px] bg-[#c4c4c468] p-1 px-2 md:block'>
              Add multiple shipping methods
            </h2>
            <h1 className=' text-primaryDark font-dmSerif my-6 hidden text-[42px]  md:block'>
              We support you with your shipping methods
            </h1>
            <p className='text-base md:text-lg'>
              To get your products to your buyer easily and conveniently, we
              have prepared all shipping methods for you. Not only can you set
              your own, such as a price for collection. You can also easily
              create other shipping methods linked to different zones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
