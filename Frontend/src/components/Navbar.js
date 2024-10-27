import { FaPhone} from "react-icons/fa";
import Logo from "../assets/LOGO.png"



export default function Navbar() {
  return (
    <>
      <div className='flex md:justify-center justify-between md:px-0 px-6 items-center gap-7 w-full h-20 md:my-3 '>
        <div className='cursor-pointer'><img src={Logo} alt='LOGO' className='w-36 h-20 me-[-50px] z-50' /></div>
        <div className=''>
          <h2 className='bg-blue-400 text-[#FFFFFF] hover:bg-white hover:text-blue-400 hover:outline hover:rounded-sm md:p-4 md:px-8 px-4 py-3 rounded-md text-sm font-bold  transition-all duration-300 whitespace-nowrap'>Get Started</h2>
        </div>

        <div className='md:flex hidden items-center gap-4'>
          <div className='bg-blue-400 text-[#FFFFFF] hover:bg-white hover:text-blue-400 text-3xl p-4 outline outline-gray-300 rounded-full  transition-all duration-300 cursor-pointer'>	<FaPhone /></div>
          <div className='md:flex hidden justify-center items-start flex-col '>
            <b>(254) 500-2988</b>
            <p>Call to Our Experts</p>
          </div>
        </div>
      </div>
    </>
  )
}
