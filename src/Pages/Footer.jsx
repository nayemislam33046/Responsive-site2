import React, { useRef } from 'react'
import logolight from "../assets/logo-light.svg"
import playstore from "../assets/google-play.svg"
import appstore from "../assets/app-store.svg"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='px-2 sm:px-7 mt-[100px] lg:mt-[400px] lg:pt-[100px] bg-[#202124] lg:px-[50px] relative'>
       
        <div className='bg-[#09B850] rounded-md p-6 sm:p-8 md:p-12 md:mx-5 lg:flex lg:absolute -top-48 lg:w-[80%] lg:left-[9%]'>
           <div className='lg:w-2/4'>
           <p className='text-white text-3xl lg:text-4xl lg:font-bold font-semibold'>Let's talk about your digital agency goals</p>
             <form className='bg-[#161618] mt-10 p-2 rounded-lg flex gap-5 items-center md:w-3/4 md:px-4'>
             <input type="text" name="" id="" className='ps-2 bg-[#161618] outline-none text-white w-[65%]' placeholder='Your Email Address'/>
             <button className='w-[33%] hover:bg-[#414245] bg-[#202124] text-bold text-white rounded-lg px-2 sm:px-5 py-2 '>Subscribe</button>
            </form>
           </div>
                 <div className='lg:w-2/4 text-start lg:text-end'>
                       <p className='text-white text-lg mt-3'><span><i className="fa-solid fa-headphones"></i></span>  Call on: 0125 258 993 22</p>
                       <p className='text-white text-lg mt-3'><span><i className="fa-regular fa-clock"></i></span> Time: 9am to 5pm (Sunday close)</p>
                       <p className='text-white text-lg mt-3'><span><i className="fa-regular fa-envelope"></i></span> mail: example@gmail.com</p>
                  </div>       
            </div>

                <div className='py-7 md:pt-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='col-span-2 lg:col-span-1'>
                        <img src={logolight} alt="mizzle" className='w-36'/>
                        <p className='text-[#A8A9AC] text-lg font-semibold py-3'>A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.</p>
                    </div>

                    <div className=''>
                          <div className='flex items-start gap-20 sm:gap-48 md:gap-24'>
                            <div>
                            <p className='font-bold text-white text-xl py-2'>Quick links</p>
                            <nav className='flex pt-3 flex-col'>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>About us</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Contuct us</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1 flex items-center gap-3'>Career <span className='bg-[#D6293E] text-xs py-1 px-2 rounded-md'>2 Job</span></Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Career detail</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Become a partner</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Sign in </Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Sign up</Link>
                            </nav>
                          </div>

                            <div className='sm:mt-2'>
                            <p className='font-bold text-white text-xl py-2 sm:py-0'>Community</p>
                            <nav className='flex pt-5 flex-col'>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Documents</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Supports</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1 flex items-center gap-3'>Faqs</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1 flex items-center gap-3'>Privacy Policy</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>News and blogs</Link>
                              <Link to="/" className='font-semibold text-[#C4C5C7] my-1'>Terms & condition</Link>
                             
                            </nav>
                          </div>
                          </div>
                    </div>

                    <div className='pt-6 sm:pt-8 md:pt-0 md:ms-auto'>
                      <p className='font-bold text-white text-xl md:text-2xl'>App available on</p>
                      <div className='flex gap-2 pt-6'>
                        <img src={playstore} alt="" className='w-28 sm:w-44 md:w-28' />
                        <img src={appstore} alt=""  className='w-28 sm:w-44 md:w-28'/>
                      </div>

                          <div className='mt-8'>
                            <p className='font-bold text-white text-xl md:pb-4'>Follow on</p>
                             <div className='-ms-2 mt-4'>
                                <span className='mx-1 text-white bg-[#292A2D] hover:bg-[#3C3E41] px-2 py-2 rounded'><i className='fab fa-facebook-f'></i></span>
                                <span className='mx-1 text-white bg-[#292A2D] hover:bg-[#3C3E41] px-2 py-2 rounded'><i className="fa-brands fa-instagram"></i></span>
                                <span className='mx-1 text-white bg-[#292A2D] hover:bg-[#3C3E41] px-2 py-2 rounded'><i className="fa-brands fa-twitter"></i></span>
                                <span className='mx-1 text-white bg-[#292A2D] hover:bg-[#3C3E41] px-2 py-2 rounded'><i className="fa-brands fa-linkedin-in"></i></span>
                                <span className='mx-1 text-white bg-[#292A2D] hover:bg-[#3C3E41] px-2 py-2 rounded'><i className="fa-brands fa-youtube"></i></span>
                             </div>
                          </div>
                    </div>
                </div>
 

          <hr className='border-gray-500 pt-6'/>
        <div className='py-5 md:flex md:flex-items-center md:justify-between'>
               <p className='text-white text-lg text-center'>Copyrights ©2024 Mizzle. Build by Webestica. </p>
               <select className='bg-[rgb(41,42,45)] hover:bg-[rgb(50,51,52)] py-2 px-4 rounded-md block mx-auto md:mx-0 text-white md:my-0 my-6'>
                <option value="" className='text-white'>🌎 Language</option>
                <option value="" className='text-white'>🇬🇧 English</option>
                <option value="" className='text-white'>🇪🇸 Spanish</option>
                <option value="" className='text-white'>🇩🇪 German</option>
                <option value="" className='text-white'>🇫🇷 Frence</option>
               </select>
        </div>
    </div>
  )
}

export default Footer