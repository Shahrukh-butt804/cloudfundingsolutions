import { FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


export default function OurMission() {
  return (
    <div className=' mx-auto flex justify-center items-center  md:flex-row flex-col md:ms-24 gap-2'>
                <div className='flex-1 self-center sm:self-start md:self-center ms-0 sm:ms-8 md:ms-0'>
                    <img src='https://img.freepik.com/premium-photo/business-meeting-with-emplyees_1108314-462194.jpg'
                        className="lg:w-[100%] w-[90%] m-5  lg:ms-0 rounded-xl "
                        height="700px"
                    />
                </div>
 
                <div className='flex-1 flex flex-col gap-6 lg:me-24 lg:ms-5  md:me-44 p-4 mb-20 ms-0 sm:ms-8 md:ms-0 '>
                    <p  className='text-gray700 text-xl font-bold'>About Company</p>
                    <p className='text-gray-700 text-4xl font-bold'>Our Mission</p>
                    <div className='text-blue-400 text-3xl font-semibold pe-16'> Here at <span className="italic font-bold ">Cloud Founding Solutions</span>, we empower businesses and ensure financial prosperity through tailored Commercial loan services. </div>


                    <div className="flex items-center gap-3"><span className='text-blue-400  text-xl'><FaCheckCircle /></span> Best loan programs with low interest rate</div>
                    <div className="flex items-center gap-3"><span className='text-blue-400  text-xl'><FaCheckCircle /></span>  Our client's security is our first priority</div>
                    <div className="flex items-center gap-3"><span className='text-blue-400  text-xl'><FaCheckCircle /></span>  Easy application procedure with less paperwork</div>


                    <p className='text-gray-700 text-xl font-bold'>We offer ideal loan solution for business expansion</p>
                    <div className='text-blue-400  text-xl  pe-16'>
                        When it comes to unlocking your business's potential, having a reliable financial partner like Cloud Founding Solutions can make all the difference. We provide customized loan solutions that help businesses achieve their goals. Our team of loan specialists has years of experience in the industry and is committed to helping small businesses succeed.  </div>



                    <div className='flex justify-start md:items-center items-start md:gap-10 gap-4 md:flex-row flex-col'>
                        <div><h2 className='bg-blue-400 text-[#FFFFFF] hover:bg-white hover:text-blue-400 hover:outline hover:rounded-sm p-5 px-8 rounded-md text-sm font-bold  transition-all duration-300'>Get Started</h2></div>

                        <div className='flex justify-start items-center gap-4'>
                            <div className='bg-blue-400 text-[#FFFFFF] hover:bg-white hover:text-blue-400 text-3xl p-3 outline outline-gray-300 rounded-full transition-all duration-300 cursor-pointer'>	<FaPhone /></div>
                            <div className='flex justify-center items-start flex-col '>
                                <b>(254) 500-2988</b>
                                <p>Call to Our Experts</p>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
  )
}
