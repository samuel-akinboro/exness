import Image from "next/image"
import currencyImage from '@/assests/images/instruments-cards-currencies.webp'
import stocksImage from '@/assests/images/instruments-cards-stocks.webp'
import commodityImage from '@/assests/images/instruments-cards-commodities.webp'

const Metrics = () => {
  return (
    <div className='bg-gray3 px-4 py-8 lg:py-24'>
      <div className='text-center lg:w-[94%] lg:mx-auto'>
        <div>
          <h2 className='font-medium text-xl md:mt-2 lg:text-3xl lg:mt-4'>The numbers that make up Exness</h2>
            <p className='text-sm font-light lg:text-base'>From trading volume to number of active clients, we are happy to share with you the figures that make us one of the world’s leading brokers</p>
            <a href="#" className='text-blue1 text-sm font-light mt-2 lg:text-base lg:mt-10 lg:mb-3'>Learn more</a>
        </div>
      </div>
    </div>
  )
}

export default Metrics