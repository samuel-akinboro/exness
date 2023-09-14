import mobileHeroImage from '@/assests/images/exness-home-page-banner-mobile-1.webp'
import desktopHeroImage from '@/assests/images/exness-home-page-banner-desktop-1.jpeg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-[calc(92vh-56px)] relative md:h-[calc(92vh-76px)]'>
      <div className='h-full md:flex'>
        <div className='text-white flex-col flex h-full px-4 z-10 relative pb-8 md:flex-1 md:pl-12 md:justify-center'>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left md:flex-initial">
            <h1 className='text-4xl leading-[47px] md:text-[3.3rem] md:leading-[73px] md:font-medium'>Online trading with<br />better-than-market<br />conditions</h1>
            <p className='text-lg mt-5 md:w-3/5 md:mt-8'>
              Trade across multiple markets with the most stable and reliable pricing in the industry.
            </p>
          </div>
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium bg-secondary text-black hover:bg-[#FFD938] transition-all duration-400 w-full md:w-fit md:mt-12">
              Open account
            </a>
        </div>
        <div className='md:flex-1'></div>
      </div>

      {/* mobile hero image */}
      <Image src={mobileHeroImage} alt="" className='w-full absolute h-full top-0 z-0 object-cover md:hidden' />
      <Image src={desktopHeroImage} alt="" className='w-full absolute h-full top-0 z-0 object-cover hidden md:block' />
    </div>
  )
}

export default Hero