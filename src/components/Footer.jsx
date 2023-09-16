import Image from 'next/image'
import pciImage from '@/assests/images/PCI-DSS.svg'

const Footer = () => {
  return (
    <div className='bg-white px-4'>
      <div className='text-center lg:w-[90%] md:mx-auto md:px-8 border-t border-gray-300 py-6 md:w-[90%] md:pb-14 lg:pb-24 lg:px-0 lg:pt-10'>
        <Image src={pciImage} alt='pci-dss' className='w-[80px] md:w-[100px]' />
        <div className='pt-6 lg:flex lg:items-center lg:justify-between lg:mt-6'>
          <div className='flex flex-col gap-2 pt-4 pb-8 text-left md:flex-row md:gap-4 lg:py-0 lg:gap-6'>
            <a href="https://www.exness.com/cdn/media/docs/risk_disclosure_and_warning_notice.pdf" className='text-xs text-gray1 hover:underline'>Risk Disclosure</a>
            <a href="https://www.exness.com/cdn/media/docs/preventing_money_laundering.pdf" className='text-xs text-gray1 hover:underline'>Preventing Money Laundering</a>
            <a href="https://www.exness.com/cdn/media/docs/privacy_agreement.pdf" className='text-xs text-gray1 hover:underline'>Privacy Agreement</a>
          </div>
          <p className='text-left whitespace-pre-line text-xs text-[#8d9194]'>© 2023 Exness</p>
        </div>
      </div>
    </div>
  )
}

export default Footer