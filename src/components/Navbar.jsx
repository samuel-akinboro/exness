import logo from '../assests/images/ExnessLogoWhite.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-40'>
      {/* Mobile bar */}
      <div className="bg-primary h-[56px] flex items-center justify-between px-4 lg:hidden sticky top-0">
        <div data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="h-5 w-5" focusable="false" aria-hidden="true" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H20V2.22222H0V0ZM0 17.7778H20V20H0V17.7778ZM20 8.88889H0V11.1111H20V8.88889Z"></path>
          </svg>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <Image src={logo} className="w-[168px] object-contain" />
          <span className='text-4xl'>
            🕊️
          </span>
        </div>
        <div className="w-5"></div>
      </div>

      {/* mobile collapse menu */}
      <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block z-50 bg-primary w-full lg:hidden">
        <div class="flex gap-5 mt-5 items-center justify-center h-[40vh] pb-[5vh] border-b border-secondary">
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium bg-secondary text-black hover:bg-[#FFD938] transition-all duration-400">
            Open account
          </a>
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-secondary border-[0.5px] text-secondary hover:bg-[#2D2D20] transition-all duration-400 min-w-[145px] font-medium">
            Sign in
          </a>
        </div>
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
          <a href="#" target="_blank" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-secondary border-[0.5px] text-secondary hover:bg-[#2D2D20] transition-all duration-400 min-w-[145px] font-medium">
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar