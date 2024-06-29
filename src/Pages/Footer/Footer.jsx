import React, { useContext } from 'react'
import { ThemeProvider } from '../../Context/Context'
import {Link} from "react-router-dom"
const Footer = () => {
    const {state} = useContext(ThemeProvider)
  const Darkmode = state.Darkmode

  const lightImg = "https://eduport.webestica.com/assets/images/logo.svg"
  const darkImg = "https://eduport.webestica.com/assets/images/logo-light.svg"
  return (
    <div className={`${Darkmode?("bg-[#222529]"):("text-[#FFFFFF]")} mx-5 mt-16 lg:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:flex lg:justify-between gap-5 xl:px-14`}>
         
          <div className='md:col-span-2 lg:col-span-1 lg:w-1/5 lg:mt-0'>
            <img src={`${Darkmode ? darkImg:lightImg}`} alt="" className='w-48'/>
            <p className='text-[#6F7076] mt-2'>Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
            <div className='mt-5'>
                <span className='py-2 px-3 shadow-md bg-white m-1 w-10 h-10 rounded'><i className="fa-brands fa-facebook-f text-[#758EC7]"></i></span>
                <span className='py-2 px-3 shadow-md bg-white m-1 w-10 h-10 rounded'><i className="fa-brands fa-instagram text-[#CF83A7]"></i></span>
                <span className='py-2 px-3 shadow-md bg-white m-1 w-10 h-10 rounded'><i className="fa-brands fa-twitter text-[#3AACDD]"></i></span>
                <span className='py-2 px-3 shadow-md bg-white m-1 w-10 h-10 rounded'><i className="fa-brands fa-linkedin-in text-[#207EB4]"></i></span>
            </div>
          </div>
                   
                   <div className='flex justify-start items-start mt-10 lg:mt-0'>
                       <div className='flex flex-col'>
                         <p className={`${Darkmode?("text-white"):("text-black")} font-bold text-2xl`}>Company</p>
                         <Link to="/" className='text-[#6F7076] mt-3'>About us</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Contact us </Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>News and Blogs </Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Library</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Career</Link>
                       </div>

                       <div className='flex flex-col ms-14 sm:ms-28 lg:ms-16'>
                         <p  className={`${Darkmode?("text-white"):("text-black")} font-bold text-2xl`}>Community</p>
                         <Link to="/" className='text-[#6F7076] mt-3'>Documentation</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Faq</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Forum</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Sitemap</Link>

                       </div>
                   </div>


                  <div className='mt-5 md:mt-11 lg:mt-0 md:mx-auto flex flex-col'>
                    <p  className={`${Darkmode?("text-white"):("text-black")} font-bold text-2xl`}>Teacher</p>
                         <Link to="/" className='text-[#6F7076] mt-3'>Become a teacher</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>How to guide</Link>
                         <Link to="/" className='text-[#6F7076] mt-3'>Terms & Conditions</Link>
                  </div>

                  <div className='mt-10 lg:mt-0'>
                     <p  className={`${Darkmode?("text-white"):("text-black")} font-bold text-2xl`}>Contact</p>
                    <p className={`${Darkmode?("text-[#6F7076] mt-3"):("text-black")}`}>Toll free: <span className={`${Darkmode?("text-white"):("text-black")}`}>+1234 568 963</span></p>
                    <p className={`${Darkmode?("text-[#6F7076] mt-3"):("text-black")}`}>(9:AM to 8:PM IST)</p>
                    <p className={`${Darkmode?("text-[#6F7076] mt-3"):("text-black")}`}>Email: <span className={`${Darkmode?("text-white"):("text-black")}`}>example@gmail.com</span></p>
                        <div className='flex gap-5 mt-3'>
                          <img src="https://eduport.webestica.com/assets/images/client/google-play.svg" alt="playstore" className='lg:w-28 w-32' />
                          <img src="https://eduport.webestica.com/assets/images/client/app-store.svg" alt="appstore"  className='lg:w-28 w-32'/>
                        </div>
                  </div>

    </div>
  )
}

export default Footer