import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logolight from "../assets/logo-light.svg"
import logodark from "../assets/logo1.svg"
import { ThemeProvider } from '../Context/context'

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false)
  const [mode, setMode] = useState(false)
  const [navEffect, setNavEffect] = useState("")
  const {state,dispatch} = useContext(ThemeProvider)
  const darkmode = state.Darkmode
  const handleClick = ()=>{
    setMenuBtn(!menuBtn)
  }
  const handleMood = ()=>{
    setMode(!mode)
    } 
    const handleLightmode = ()=>{
          dispatch({type:"Darkmode"})  
    }
  const handleDarkmode = ()=>{
    dispatch({type:"Lightmode"})
  }

const handleScroll = (e)=>{
  if(window.scrollY>=400){
    setNavEffect("-top-40")
  }
   if(window.scrollY>=1000 ){
    setNavEffect(`w-full fixed top-0 transition-all z-20 ${darkmode?("bg-[rgba(255,255,255)]"):("bg-[rgb(22,22,24)]")}`)
  } 
}

window.addEventListener("scroll",handleScroll)
  return (
    <div className={`md:px-0 md:py-3 lg:px-[70px] ${navEffect}`}>
        <div className='flex justify-between items-center px-6 py-4'>
        <Link to="/">
            <img src={darkmode?logodark:logolight} alt="logo" className={`md:w-[6rem] w-[7rem] lg:w-[9rem]`}/>
        </Link>
        <nav className={`lg:flex absolute ${darkmode?"bg-white":"bg-[rgb(22,22,24)]"} lg:bg-transparent transition-all ${menuBtn?"-translate-y-0":"-translate-y-96"} lg:translate-y-0 left-0 w-full lg:w-auto top-14 md:top-20 lg:top-0 lg:p-0 p-5 lg:relative`}>
           <NavLink className={`block border-y lg:border-none leading-10  text-green-600 font-bold md:mx-2 lg:text-lg`}>Demos</NavLink>
           <NavLink className={`block border-y lg:border-none leading-10 ${darkmode?"text-red-500 font-bold":"text-white"} md:mx-2 lg:text-lg hover:text-green-500`}>Pages</NavLink>
           <NavLink className={`block border-y lg:border-none leading-10 ${darkmode?"text-red-500 font-bold":"text-white"} md:mx-2 lg:text-lg hover:text-green-500`}>Portfolio</NavLink>
           <NavLink className={`block border-y lg:border-none leading-10 ${darkmode?"text-red-500 font-bold":"text-white"} md:mx-2 lg:text-lg hover:text-green-500`}>Megamenu</NavLink>
           <NavLink className={`block border-y lg:border-none leading-10 ${darkmode?"text-red-500 font-bold":"text-white"} md:mx-2 lg:text-lg hover:text-green-500`}>Contuct Us</NavLink>
        </nav>
        <div>
          
      
{/* button */}
        <div className='md:flex lg:gap-2 md:gap-1 -z-40'>          
       <div className='flex justify-center items-center gap-1'>
           <div className='group'>
           <span className={` mt-1 text-2xl cursor-pointer ${darkmode?"text-black":"text-white"} group`} onClick={handleMood}><ion-icon name="contrast-outline"></ion-icon></span>
            <div className={`bg-[rgb(22,22,24)] absolute top-10 border rounded-lg right-20 md:right-56 lg:right-72 md:top-16 lg:top-18 px-2 py-3 hidden group-hover:block`}>
                    <button className='text-white flex items-center gap-2 py-3 px-5 font-bold hover:bg-[rgb(24,36,32)] text-lg hover:text-[rgb(10,163,72)] rounded' onClick={handleLightmode}><ion-icon name="sunny-outline"></ion-icon> Light</button>
                    <button className='text-white flex items-center gap-2 py-3 px-5 font-bold hover:bg-[rgb(24,36,32)] text-lg hover:text-[rgb(10,163,72)] rounded' onClick={handleDarkmode}><ion-icon name="moon-outline"></ion-icon> Dark</button>
                    <button className='text-white flex items-center gap-2 py-3 px-5 font-bold hover:bg-[rgb(24,36,32)] text-lg hover:text-[rgb(10,163,72)] rounded'><ion-icon name="contrast-outline"></ion-icon> Auto</button>
            </div>
           </div>
           <div className=' md:flex md:gap-1 hidden'>
           <button className={` text-white hover:bg-[#3C3E41] md:px-2 lg:px-3 rounded md:p-1 gap-1 flex items-center ${darkmode?"bg-[rgb(22,22,24)] text-black":"bg-[#292a2c] text-white"}`}><ion-icon name="person-circle-outline"></ion-icon> Sign Up</button>
          <button className='bg-[#089C44] rounded text-white md:px-3 md:p-1 hover:bg-green-500'>Buy Now</button>
           </div>
           <span className={`${darkmode?"text-black":"text-white"} mt-1 text-3xl lg:hidden`} onClick={handleClick}><ion-icon name={`${menuBtn?"close-outline":"menu-outline"}`}></ion-icon></span>  
    </div>     


        </div>
        </div>
        </div>
    </div>
  )
}

export default Header