const Accounts = () => {
  return (
    <div className='bg-white px-4 py-8 lg:py-24'>
      <div className='lg:w-[94%] lg:mx-auto'>
        <h2 className='text-center text-[1.6rem] font-medium lg:text-4xl'>Accounts to suit your trading strategy</h2>
        <div className='flex flex-col gap-4 mt-8 md:flex-row md:gap-0 md:px-8 lg:mt-12'>
          <div className='bg-[#0F181C] text-white p-4 py-4 rounded-md flex flex-col gap-2 lg:px-8 lg:flex-1 md:rounded-tr-none md:rounded-br-none'>
            <h3 className='font-medium text-xl md:mt-2 lg:text-3xl lg:mt-4 md:text-2xl'>Standard accounts</h3>
            <div className='flex items-center gap-6 my-5 lg:mt-12 lg:mb-8'>
              <div className="group relative">
                <h4 className='border-dashed border-white border-b w-fit font-medium md:text-xl lg:text-2xl lg:font-normal'>Standard</h4>
                <span className="opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity inline-block absolute invisible z-10 p-4 bg-white text-sm text-black rounded-md shadow-sm w-max top-10 max-w-[90vw] lg:max-w-[300px] lg:mt-4" role="tooltip">
                  Our most popular account, suitable for all traders.
                </span>
              </div>
              <div className="group relative">
                <h4 className='font-medium border-dashed border-white border-b w-fit md:text-xl lg:text-2xl lg:font-normal'>Standard Cent</h4>
                <span className="opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity inline-block absolute invisible z-10 p-4 bg-white text-sm text-black rounded-md shadow-sm w-max max-w-[65vw] top-10 lg:max-w-[300px] lg:mt-4" role="tooltip">
                Designed for new traders. Trade with micro lots to get started.
                </span>
              </div>
            </div>
            <p className='text-sm font-light lg:text-base lg:mx-auto'>Feature-rich, commission-free accounts that suit the needs of today’s traders. Sign up and experience the advantages of our most popular account.</p>
            <a href="#" className='text-sm font-light mt-5 lg:mt-10 lg:mb-3 block text-secondary border-[0.6px] border-secondary text-center py-2 rounded md:w-fit md:ml-auto md:px-14 lg:text-sm lg:py-3'>See details</a>
          </div>
          <div className='bg-gray3 text-textBlack p-4 py-4 rounded-md flex flex-col gap-2 lg:px-8 lg:flex-1 md:rounded-tl-none md:rounded-bl-none'>
            <h3 className='font-medium text-xl md:mt-2 lg:text-3xl lg:mt-4 md:text-2xl'>Professional accounts</h3>
            <div className='flex items-center gap-6 my-5 lg:mt-12 lg:mb-8'>
              <div className="group relative">
                <h4 className='border-dashed border-black border-b w-fit font-medium md:text-xl lg:text-2xl'>Raw Spread</h4>
                <span className="opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity inline-block absolute invisible z-10 p-4 bg-white text-sm text-black rounded-md shadow-sm w-max top-10 max-w-[90vw] lg:max-w-[300px] lg:mt-4" role="tooltip">
                  Lowest spreads with fixed commission per lot. Market execution.
                </span>
              </div>
              <div className="group relative">
                <h4 className='font-medium border-dashed border-black border-b w-fit md:text-xl lg:text-2xl'>Zero</h4>
                <span className="opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity inline-block absolute invisible z-10 p-4 bg-white text-sm text-black rounded-md shadow-sm w-max max-w-[65vw] top-10 lg:max-w-[300px] lg:mt-4" role="tooltip">
                  Zero spread on the top 30 instruments. Market execution, no requotes.
                </span>
              </div>
              <div className="group relative">
                <h4 className='font-medium border-dashed border-black border-b w-fit md:text-xl lg:text-2xl'>Pro</h4>
                <span className="opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity inline-block absolute invisible z-10 p-4 bg-white text-sm text-black rounded-md shadow-sm w-max max-w-[65vw] top-10 lg:max-w-[300px] lg:mt-4" role="tooltip">
                  Our instant execution account, with zero commission & low spread.
                </span>
              </div>
            </div>
            <p className='text-sm font-light lg:text-base lg:mx-auto'>Feature-rich, commission-free accounts that suit the needs of today’s traders. Sign up and experience the advantages of our most popular account.</p>
            <a href="#" className='text-sm font-light mt-5 lg:mt-10 lg:mb-3 block text-black border-[0.6px] border-black text-center py-2 rounded md:w-fit md:ml-auto md:px-14 lg:text-sm lg:py-3'>See details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accounts