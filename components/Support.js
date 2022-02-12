const Support = () => {
  return (
    <div className='bg-primaryLight '>
      <div className='container relative mx-auto max-w-7xl py-20 '>
        <img
          src='/images/dots.svg'
          className='absolute left-[-40px] top-48'
          alt=''
        />
        <img
          src='/images/dots.svg'
          className='absolute left-[500px] bottom-28'
          alt=''
        />
        <div className='ml-36 flex items-center gap-16'>
          <div className='h-[628px] w-[283px]  rounded-3xl'>
            <img
              src='/images/support1.png'
              alt=''
              className='h-full w-full rounded-3xl object-cover shadow-lg'
            />
          </div>
          <div className='max-w-xl lg:max-w-3xl'>
            <h2 className='w-fit rounded-[5px] bg-[#c4c4c468] p-1 px-2'>
              Add multiple shipping methods
            </h2>
            <h1 className='text-primaryDark font-dmSerif my-6  text-[42px]'>
              We support you with your shipping methods
            </h1>
            <p className=' text-lg'>
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
