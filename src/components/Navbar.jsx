import logo from '../assests/images/ExnessLogoWhite.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      {/* Mobile bar */}
      <div className="bg-primary h-[56px] flex items-center justify-between px-4 lg:hidden sticky top-0">
        <svg className="h-5 w-5" focusable="false" aria-hidden="true" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H20V2.22222H0V0ZM0 17.7778H20V20H0V17.7778ZM20 8.88889H0V11.1111H20V8.88889Z"></path>
        </svg>
        <div className="flex-1 flex justify-center items-center gap-2">
          <Image src={logo} className="w-[168px] object-contain" />
          <span className='text-4xl'>
            🕊️
          </span>
        </div>
        <div className="w-5"></div>
      </div>

      {/* Desktop Bar */}
      <div className="hidden lg:flex sticky top-0 items-center justify-between h-[70px] bg-primary px-6">
        <div className='flex items-center gap-2'>
          <Image src={logo} className='w-[168px] object-contain' />
          <span className='text-4xl'>
            🕊️
          </span>
        </div>
        <div className='flex items-center gap-x-4'>
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium bg-secondary text-black hover:bg-[#FFD938] transition-all duration-400">
            Open account
          </a>
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-transparent border-secondary border-[0.5px] text-secondary hover:bg-[#2D2D20] transition-all duration-400 min-w-[145px] font-medium">
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar