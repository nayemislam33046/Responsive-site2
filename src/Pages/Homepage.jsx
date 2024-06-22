import React, { useContext } from 'react'
import Homebanner from "../assets/01.jpg"
import {Typewriter } from 'react-simple-typewriter'
import profile1 from "../assets/02.jpg"
import profile2 from "../assets/03.jpg"
import profile3 from "../assets/04.jpg"
import profile4 from "../assets/05.jpg"
import profile5 from "../assets/06.jpg"
import trustPilotLight from "../assets/trustpilot-light.svg"
import trustPilotStar from "../assets/trustpilot-star.svg"
import { ThemeProvider } from '../Context/context'

const Homepage = () => {
const {state,dispatch} = useContext(ThemeProvider)
const darkmode = state.Darkmode
  return (
    <div className='pt-[100px] lg:pt-[160px] px-7 transition-all lg:px-[80px] lg:gap-16 xl:flex justify-between items-center' id='home'>
        
        <div>
              <p className={`bg-[rgb(41,42,45)] px-3 py-2 rounded-lg text-white inline-block`}>🤩Award-winning digital services</p>
              <p className={`text-[40px] font-bold lg:text-6xl ${darkmode?("text-[rgba(0,0,0,0.87)]"):("text-white")}`}>Creative studio focused on</p>          
              <p className='text-green-500 font-bold text-4xl lg:text-6xl py-3'>
              <Typewriter words={["Web Design","Web Dev","UI/UX Design"]} typeSpeed={150} deleteSpeed={60} loop={50000000} cursor cursorBlinking={false}
                cursorStyle='|'
               />
             </p>
             <p className={`${darkmode?(""):("text-[rgb(180,181,184)]")} text-lg py-2`}>From concept to execution, we deliver web designs that make an impact. Let your brand shine with our innovative and visually stunning websites.</p>
             <div className='w-full border p-3 rounded-lg my-2 flex justify-between'>
                        <input type="text" name="" id="" className='bg-transparent outline-none text-white w-2/4' placeholder='Enter Your Email Address'/>
                        <button className='text-white bg-[rgb(32,33,36)] p-2 rounded-lg w-32 hover:bg-[#3C3E41]'>Start trial!</button>
             </div>
             <div className='pb-20 md:flex md:items-center justify-between'>
                   <div className='flex items-center gap-2 py-4'>
                   <span className='text-green-600 mt-1 text-5xl '><ion-icon name="logo-xbox"></ion-icon></span>
                        <div>
                            <p className={` text-xl font-bold ${darkmode?("text-black"):("text-white")}`}>24/7 Support</p>
                            <p className={`${darkmode?("text-black"):("text-[rgb(180,181,184)]")} text-lg`}>We're always here to help</p>
                        </div>
                   </div>
                   <div className='flex items-center gap-2 py-4'>
                   <span className='text-green-600 mt-1 text-5xl'><ion-icon name="logo-amplify"></ion-icon></span>
                        <div>
                            <p className={`${darkmode?("text-black"):("text-white")} text-xl font-bold`}>Award Winning agency</p>
                            <p className={`${darkmode?("text-black"):("text-[rgb(180,181,184)]")} text-lg`}>You are in safe hand</p>
                        </div>
                   </div>
             </div>

        </div>



       <div className='relative'>
       <img src={Homebanner} alt="" className='rounded m-auto w-full lg:w-3/4'/>
       
       <div className='absolute -top-16 -right-5 hidden sm:block bg-[rgb(25,27,29)] p-4 rounded '>
        <img src={trustPilotLight} alt="trustPilot" className='h-6'/><br />
        <div className='flex items-center gap-2'>
        <img src={trustPilotStar} alt="str" className='h-8'/>
        <p className='font-bold text-2xl text-white'>4.8/5.0</p>
        </div>
        <p className='text-[rgb(175,176,177)] mt-2'>Reviewed by 365 users</p>
       </div>



        <div className='absolute bottom-0 -left-6 z-10 w-56'>
           <div className='bg-[rgb(32,33,36)] p-4 rounded-lg'>
        <div className='flex items-center gap-4'>
               <p className='text-white font-bold text-2xl'>5k+</p>
               <div className=''>
               <div className='flex'>
                      <img src={profile1} alt="" className='w-8 h-8 rounded-full absolute top-4 left-[70px]'/>
                      <img src={profile2} alt="" className='w-8 h-8 rounded-full absolute top-4 left-[90px]'/>
                      <img src={profile3} alt="" className='w-8 h-8 rounded-full absolute top-4 left-[110px]'/>
                      <img src={profile4} alt="" className='w-8 h-8 rounded-full absolute top-4 left-[130px]'/>
                      <img src={profile5} alt="" className='w-8 h-8 rounded-full absolute top-4 left-[150px]'/>
                </div>
               </div>
        </div>
        <p className='text-white pt-3'>Total visitors per month</p>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Homepage