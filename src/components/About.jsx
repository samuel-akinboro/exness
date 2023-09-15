import Image from 'next/image'
import logo from '../assests/images/ExnessLogoBlack.svg'
import facebook from '../assests/images/facebook-logo.svg'
import twitter from '../assests/images/twitter-logo.svg'
import youtube from '../assests/images/youtube-logo.svg'
import linkedin from '../assests/images/linkedin-logo.svg'
import instagram from '../assests/images/instagram-logo.svg'

const About = () => {
  return (
    <div className='bg-white px-4 py-8 md:py-14 lg:py-24'>
      <div className='text-center lg:w-[94%] lg:mx-auto flex flex-col gap-7 lg:flex-row md:px-8'>
        <div className="lg:flex-[0.35]">
          <div className='flex items-center gap-2'>
            <Image src={logo} className='w-[168px] object-contain lg:w-[190px]' />
            <span className='text-4xl'>
              🕊️
            </span>
          </div>
          <div className='flex items-center gap-1 mt-4'>
            <a href="#">
              <Image alt='facebook-logo' src={facebook} className="h-8" />
            </a>
            <a href="#">
              <Image alt='twitter-logo' src={twitter} className="h-8" />
            </a>
            <a href="#">
              <Image alt='instagram-logo' src={instagram} className="h-8" />
            </a>
            <a href="#">
              <Image alt='linkedin-logo' src={linkedin} className="h-8" />
            </a>
            <a href="#">
              <Image alt='youtube-logo' src={youtube} className="h-8" />
            </a>
          </div>
        </div>
        <div className="lg:flex-[0.65]">
          <p className='text-left whitespace-pre-line text-xs text-[#8d9194]'>
            {`
              E​xness (SC) Ltd ​is a Securities Dealer registered in Seychelles with registration number 8423606-1 and authorised by the Financial Services Authority (FSA) with licence number SD025. The registered office of E​xness (SC) Ltd is at 9A CT House, 2nd floor, Providence, Mahe, Seychelles.

              Exness B.V. is a Securities Intermediary registered in Curaçao with registration number 148698(0) and authorised by the Central Bank of Curaçao and Sint Maarten (CBCS) with licence number 0003LSI. The registered office of Exness B.V. is at Emancipatie Boulevard Dominico F. “Don” Martina 31, Curaçao.
              
              Exness (VG) Ltd is authorised by the Financial Services Commission (FSC) in BVI with registration number 2032226 and investment business licence number SIBA/L/20/1133. The registered office of Exness (VG) Ltd is at Trinity Chambers, P.O. Box 4301, Road Town, Tortola, BVI.
              
              The entities above are duly authorized to operate under the Exness brand and trademarks.
              
              Risk Warning: Our services relate to complex derivative products which are traded outside an exchange. These products come with a high risk of losing money rapidly due to leverage and thus are not appropriate for all investors. Under no circumstances shall Exness have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any investing activity. Learn more.
              
              The entities above do not offer services to residents of certain jurisdictions including the USA, Iran, North Korea, Europe, the United Kingdom and others. 
              
              The information on this website does not constitute investment advice or a recommendation or a solicitation to engage in any investment activity.
              
              The information on this website may only be copied with the express written permission of Exness.
              
              Exness complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.
              
              
            `}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About