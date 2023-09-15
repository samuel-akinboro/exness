import Image from "next/image"
import backgroundImage from '@/assests/images/CTA-Image-1.jpg'

const Ready = () => {
  return (
    <div className="text-center px-4 relative py-8 md:py-16 lg:py-28">
      <div className='relative z-10 text-white md:w-1/2 md:mx-auto lg:w-[30%]'>
        <h2 className='text-2xl font-medium md:text-3xl lg:text-4xl'>Ready to get started?</h2>
        <p className='font-light mt-3 mb-7 md:mt-4 md:mb-8 text-sm lg:text-lg lg:mt-6 lg:mb-14'>It only takes 3 minutes to get your account set up and ready for trading</p>
        <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium bg-secondary text-black hover:bg-[#FFD938] transition-all duration-400 w-full md:w-fit md:px-12">
          Register
        </a>
      </div>
      <Image alt="CTA-image" src={backgroundImage} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  )
}

export default Ready