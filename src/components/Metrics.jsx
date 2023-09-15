import Image from "next/image"
import currencyImage from '@/assests/images/instruments-cards-currencies.webp'
import stocksImage from '@/assests/images/instruments-cards-stocks.webp'
import commodityImage from '@/assests/images/instruments-cards-commodities.webp'

const Metrics = () => {
  return (
    <div className='bg-gray3 px-4 py-8 md:py-14 lg:py-24'>
      <div className='text-center lg:w-[94%] lg:mx-auto flex flex-col gap-10 md:flex-row md:px-8 md:items-center'>
        <div className="md:flex-1 md:text-left">
          <h2 className='font-medium text-2xl md:mt-2 lg:mt-4 md:text-3xl lg:text-4xl'>The numbers that make up Exness</h2>
          <p className='font-light lg:text-base mt-4 mb-4 md:mb-7'>From trading volume to number of active clients, we are happy to share with you the figures that make us one of the world’s leading brokers</p>
          <a href="#" className='text-blue1 font-light mt-2 lg:text-base lg:mt-10 lg:mb-3'>Learn more</a>
        </div>
        <div className='flex flex-col gap-8 md:flex-1 lg:gap-14'>
          <div>
            <h3 className='text-[1.7rem] font-light lg:text-4xl lg:font-normal'>$4.52 trillion</h3>
            <p className='font-light lg:text-lg'>Trading volume in August 2023</p>
          </div>
          <div>
            <h3 className='text-[1.7rem] font-light lg:text-4xl lg:font-normal'>625,626</h3>
            <p className='font-light lg:text-lg'>Active clients in August 2023</p>
          </div>
          <div>
            <h3 className='text-[1.7rem] font-light lg:text-4xl lg:font-normal'>$1.31 billion</h3>
            <p className='font-light lg:text-lg'>Client withdrawals in Q2 2023</p>
          </div>
          <div>
            <h3 className='text-[1.7rem] font-light lg:text-4xl lg:font-normal'>$105.8 million</h3>
            <p className='font-light lg:text-lg'>Partner rewards in Q2 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics