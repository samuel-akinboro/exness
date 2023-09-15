import mobileHeroImage from '@/assests/images/exness-home-page-banner-mobile-1.webp'
import desktopHeroImage from '@/assests/images/exness-home-page-banner-desktop-1.jpeg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-[calc(92vh-56px)] relative md:h-[calc(62vh-56px)] lg:h-[calc(92vh-76px)]'>
      <div className='h-full md:flex lg:w-[92.5%] lg:mx-auto'>
        <div className='text-white flex-col flex h-full px-4 z-10 relative pb-8 md:flex-[0.55] md:pl-16 md:pb-8 md:pt-2 lg:pt-8 md:pr-0 md:justify-center lg:pl-10'>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left md:flex-initial">
            <h1 className='text-4xl leading-[47px] lg:text-[3.3rem] md:text-[2.6rem] md:font-medium md:leading-[57px] lg:leading-[73px] lg:font-semibold'>Online trading with<br />better-than-market<br />conditions</h1>
            <p className='text-lg mt-5 lg:w-3/5 md:mt-8 md:font-light lg:text-lg'>
              Trade across multiple markets with the most stable and reliable pricing in the industry.
            </p>
          </div>
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium bg-secondary text-black hover:bg-[#FFD938] transition-all duration-400 w-full md:w-fit md:mt-8 lg:mt-14 md:px-6">
              Open account
            </a>
        </div>
        <div className='md:flex-[0.45]'></div>
      </div>

      {/* mobile hero image */}
      <Image src={mobileHeroImage} alt="" className='w-full absolute h-full top-0 z-0 object-cover md:hidden' />
      <Image src={desktopHeroImage} alt="" className='w-full absolute h-full top-0 z-0 object-cover hidden md:block' />
    </div>
  )
}

export default Hero