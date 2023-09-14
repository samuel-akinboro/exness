import Image from "next/image"
import visaImage from '@/assests/images/visa.svg'
import pciImage from '@/assests/images/PCI-DSS.svg'
import skrillImage from '@/assests/images/skrill.svg'
import netellerImage from '@/assests/images/neteller.svg'
import masterCardImage from '@/assests/images/mastercard.svg'

const Services = () => {
  return (
    <div className='text-white'>
      <div className='bg-primary p-4 py-7 text-center sm:px-14 md:py-24'>
        <div>
          <h2 className='text-[1.65rem] font-medium md:text-4xl'>Instant withdrawals, 24/7</h2>
          <p className='font-light mt-4 mb-6 text-[0.94rem] md:text-base md:w-[46%] md:mx-auto md:mb-10'>Our withdrawals are carried out in seconds with no manual processing, including on weekends.</p>
          <a href="#" className='text-secondary hover:underline text-[0.94rem] font-light md:text-base'>Learn more about deposits & withdrawals at Exness</a>
          <div className='grid grid-cols-2 gap-4 justify-center mt-8 sm:flex sm:items-center md:gap-8 md:mt-12'>
            <Image src={visaImage} className='w-24 object-contain justify-self-end sm:justify-self-auto md:w-40' />
            <Image src={masterCardImage} className='w-24 object-contain justify-self-start sm:justify-self-auto md:w-40' />
            <Image src={skrillImage} className='w-24 object-contain justify-self-end sm:justify-self-auto md:w-40' />
            <Image src={netellerImage} className='w-24 object-contain justify-self-start sm:justify-self-auto md:w-40' />
          </div>
          <div className='flex flex-col items-center gap-4 mt-6 sm:flex-row sm:mt-7 md:w-[44%] md:gap-6 md:mx-auto md:mt-12'>
            <Image src={pciImage} className='w-20 md:w-28' />
            <p className='text-[#8d9194] text-xs font-light text-left'>We comply with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We guarantee a protected payment experience for you. <a href="#" className='text-secondary hover:underline'>Learn more.</a></p>
          </div>
        </div>
      </div>
      <div className='h-48 flex md:h-[225px]'>
        <div className='flex flex-col h-full bg-gray1 p-4 flex-1 md:p-16 md:py-12'>
          <div className='flex-1'>
            <h3 className='text-xl font-light md:text-[1.40rem] md:font-medium'>Fast & reliable execution</h3>
            <p className='font-extralight mt-2 md:font-light'>With free VPS hosting</p>
          </div>
          <a href="#" className='text-secondary hover:underline font-extralight md:font-light'>See VPS details</a>
        </div>
        <div className='flex flex-col h-full bg-gray2 p-4 flex-1 md:px-14 md:py-12'>
          <div className='flex-1'>
            <h3 className='text-xl font-light md:text-[1.40rem] md:font-medium'>Transparent price history</h3>
            <p className='font-extralight mt-2 md:font-light'>Tick-level data across all instruments</p>
          </div>
          <a href="#" className='text-secondary hover:underline font-extralight md:font-light'>See price history</a>
        </div>
      </div>
    </div>
  )
}

export default Services