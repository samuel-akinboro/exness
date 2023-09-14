import logo from '../assests/images/ExnessLogoWhite.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      {/* Mobile bar */}
      <div className="bg-primary h-[56px] flex items-center justify-between px-4">
        <svg className="h-5 w-5" focusable="false" aria-hidden="true" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H20V2.22222H0V0ZM0 17.7778H20V20H0V17.7778ZM20 8.88889H0V11.1111H20V8.88889Z"></path>
        </svg>
        <div className="flex-1 flex justify-center items-center">
          <Image src={logo} className="w-[168px] object-contain" />
        </div>
        <div className="w-5"></div>
      </div>

      {/* Desktop Bar */}
    </div>
  )
}

export default Navbar