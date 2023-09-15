import Image from "next/image"
import currencyImage from '@/assests/images/instruments-cards-currencies.webp'
import stocksImage from '@/assests/images/instruments-cards-stocks.webp'
import commodityImage from '@/assests/images/instruments-cards-commodities.webp'

const Trade = () => {
  return (
    <div className='bg-gray3 px-4 py-8 lg:py-24'>
      <div className='text-center lg:w-[94%] lg:mx-auto'>
        <h2 className='text-2xl font-medium lg:text-4xl'>Access and trade global markets</h2>
        <div className='flex flex-col gap-4 mt-8 md:flex-row md:gap-6 md:px-8 lg:gap-14 lg:mt-12'>
          <div className='bg-white p-4 py-4 rounded-md flex flex-col items-center gap-2 lg:px-4 lg:flex-1'>
            <Image src={currencyImage} className='w-28 mt-2 lg:mt-5 lg:w-32' />
            <h3 className='font-medium text-xl md:mt-2 lg:text-3xl lg:mt-4'>Currencies</h3>
            <p className='text-sm font-light lg:text-base lg:w-[95%] lg:mx-auto'>Trade the world’s largest market with spreads starting from 0 pips</p>
            <a href="#" className='text-blue1 text-sm font-light mt-2 lg:text-base lg:mt-10 lg:mb-3'>Learn more</a>
          </div>
          <div className='bg-white p-4 py-4 rounded-md flex flex-col items-center gap-2 lg:px-4 lg:flex-1'>
            <Image src={stocksImage} className='w-36 mt-2 lg:mt-5 lg:w-44' />
            <h3 className='font-medium text-xl md:mt-2 lg:text-3xl lg:mt-4'>Stocks</h3>
            <p className='text-sm font-light lg:text-base lg:w-[95%] lg:mx-auto'>Trade stocks of the biggest names in the international stock market with low transaction costs</p>
            <a href="#" className='text-blue1 text-sm font-light mt-2 lg:text-base lg:mt-10 lg:mb-3'>Learn more</a>
          </div>
          <div className='bg-white p-4 py-4 rounded-md flex flex-col items-center gap-2 lg:px-4 lg:flex-1'>
            <Image src={commodityImage} className='w-28 mt-2 lg:mt-5 lg:w-32' />
            <h3 className='font-medium text-xl md:mt-2 lg:text-3xl lg:mt-4'>Commodities</h3>
            <p className='text-sm font-light lg:text-base lg:w-[95%] lg:mx-auto'>Diversify your portfolio and trade oil, natural gas and metals</p>
            <a href="#" className='text-blue1 text-sm font-light mt-2 lg:text-base lg:mt-10 lg:mb-3'>Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade