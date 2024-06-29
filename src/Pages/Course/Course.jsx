import {useContext, useState } from 'react'
import { ThemeProvider } from '../../Context/Context'
import { Link } from "react-router-dom"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Webdesign from './Category/Webdesign'
import Developments from './Category/Development'
import Graphicdesigner from './Category/GraphicDesign'
import Marketings from './Category/Marketing'
import Finances from './Category/Finance'

const Course = () => {
   const [countOn, setcountOn] = useState(false)
   const [toggleTab, settoggleTab] = useState(1)
   const {state} = useContext(ThemeProvider)
   const Darkmode = state.Darkmode

  return (
<div className='lg:px-[100px] px-3'>
<ScrollTrigger onEnter={()=>setcountOn(true)} onExit={()=>setcountOn(false)} >
<div className='px-6 mt-10 md:mt-16 grid grid-cols-1 xl:px-[100px] sm:grid-cols-2 gap-5 xl:grid-cols-4'>
         <div className={`${Darkmode ? ("bg-[#423D2A]"):("bg-[#FEF6E0]")} flex justify-center items-center gap-5 py-5 rounded-lg`}>
            <span className='text-[#F7C32E] text-4xl'><i className="fa-solid fa-tv"></i></span>
            <div>
                <p className={`${Darkmode ? ("text-white"):("text-black")} font-bold text-xl`}>
                   {countOn && <CountUp start={1} end={10}/>}k               
                </p>
                <p className={`${Darkmode ? ("text-white"):("text-black")}`}>Online Courses</p>
            </div>
         </div>
         <div className={`${Darkmode ? ("bg-[#22272D]"):("bg-[#E8EBED]")} flex justify-center items-center gap-5 py-5 rounded-lg`}>
            <span className='text-[#1D3B53] text-4xl'><i className="fa-solid fa-user"></i></span>
            <div>
                <p className={`font-bold text-xl ${Darkmode ? ("text-white"):("text-black")}`}>
               {countOn && <CountUp start={0} end={200} />}k+                    
                </p>
                <p className={`${Darkmode ? ("text-white"):("text-black")}`}>Expert Tutors</p>
            </div>

         </div>
         <div className={`${Darkmode ? ("bg-[#2A2739]"):("bg-[#F0EBF9]")} flex justify-center items-center gap-5 py-5 rounded-lg`}>
            <span className='text-[#6F42C1] text-4xl'><i className="fa-solid fa-user-graduate"></i></span>
            <div>
                <p className={`font-bold text-xl ${Darkmode ? ("text-white"):("text-black")}`}>
                { countOn && <CountUp start={0} end={60} />}k+                    
                </p>
                <p className={`${Darkmode ? ("text-white"):("text-black")}`}>Online Students</p>
            </div>
         </div>
         <div className={`${Darkmode ? ("bg-[#213238]"):("bg-[#E7F6F8]")} flex justify-center items-center gap-5 py-5 rounded-lg`}>
            <span className='text-[#17A2B8] text-4xl'><i className="fa-solid fa-check"></i></span>
            <div>
                <p className={`font-bold text-xl ${Darkmode ? ("text-white"):("text-black")}`}>
                {countOn && <CountUp start={0} end={6} />}k+                    
                </p>
                <p className={`${Darkmode ? ("text-white"):("text-black")}`}>Certified Courses</p>
            </div>
         </div>
    </div>
</ScrollTrigger>
   

<div className='mt-16'>
<p className={`${Darkmode ? ("text-white"):("text-black")} text-4xl text-center font-bold`}>Most Popular Courses</p>
<p className='text-[#A1A1A8] text-center mt-3'>Choose from hundreds of courses from specialist organizations</p>

   <div className='bg-[#1F2C3A] px-5 py-5 flex flex-wrap gap-2 sm:justify-center md:gap-12 sm:items-center mt-14 rounded-lg'>
        <Link to="/" onClick={()=>settoggleTab(1)} className={`${toggleTab===1 ? ("bg-[#066AC9]"):("")} p-2 text-white rounded-md`}>Web Design</Link>
        <Link to="/" onClick={()=>settoggleTab(2)} className={`${toggleTab===2 ? ("bg-[#066AC9]"):("")} p-2 text-white rounded-md`}>Development</Link>
        <Link to="/" onClick={()=>settoggleTab(3)} className={`${toggleTab===3 ? ("bg-[#066AC9]"):("")}  p-2 text-white rounded-md`}>Graphic Design</Link>
        <Link to="/" onClick={()=>settoggleTab(4)} className={`${toggleTab===4 ? ("bg-[#066AC9]"):("")} p-2 text-white rounded-md`}>Marketing</Link>
        <Link to="/" onClick={()=>settoggleTab(5)} className={`${toggleTab===5 ? ("bg-[#066AC9]"):("")} p-2 text-white rounded-md`}>Finance</Link>
   </div>

        <div className={`${toggleTab===1 ? ("block"):("hidden")}`}>
         <Webdesign/>
        </div>

        <div className={`${toggleTab===2 ? ("block"):("hidden")}`}>
         <Developments/>
        </div>

        <div className={`${toggleTab===3 ? ("block"):("hidden")}`}>
         <Graphicdesigner/>
        </div>

        <div className={`${toggleTab===4 ? ("block"):("hidden")}`}>
           <Marketings/>
        </div>

        <div className={`${toggleTab===5 ? ("block"):("hidden")}`}>
           <Finances/>
        </div>


        <div className='bg-[#17A2B8] w-full py-3 px-6 rounded-lg mt-10 lg:flex items-center justify-evenly md:py-10'>
               <div className='lg:w-2/4'>
                      <p className='text-white text-2xl my-2'>Become an Instructor!</p>
                      <p className='text-white'>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
               </div>          
               <button className='rounded-md border border-[#F7C32E] text-[#F7C32E] hover:text-black hover:bg-[#F7C32E] transition-all py-2 px-5 my-5'>Start Teaching Today</button>
        </div>

</div>
</div>

)
}

export default Course
