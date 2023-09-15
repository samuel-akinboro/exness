import Image from 'next/image'
import pciImage from '@/assests/images/PCI-DSS.svg'

const Footer = () => {
  return (
    <div className='bg-white px-4'>
      <div className='text-center lg:w-[90%] md:mx-auto flex lgap-7 items-center md:px-8 justify-between border-t border-gray-300 py-6 md:w-[90%]'>
        <Image src={pciImage} alt='pci-dss' className='w-[80px] md:w-[100px]' />
        <p className='text-left whitespace-pre-line text-xs text-[#8d9194]'>© 2023 Exness</p>
      </div>
    </div>
  )
}

export default Footer