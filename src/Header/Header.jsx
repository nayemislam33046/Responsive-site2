import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { ThemeProvider } from '../Context/Context'

const Header = () => {

  const darkImg = "https://eduport.webestica.com/assets/images/logo-light.svg"

  const [MenuToggle, setMenuToggle] = useState(false)
  const [profile, setProfile] = useState(false)
  const [navScroll, setNavScroll] = useState("")

  const {state,dispatch} = useContext(ThemeProvider)
  const Darkmode = state.Darkmode
  const handleClick = ()=>{
    setMenuToggle(!MenuToggle)
  }
  const handleProfile = ()=>{
    setProfile(!profile)
  }

  const handleMoon = ()=>{
    dispatch({type:"DARKMODE"})
    console.log("dark")
  }
  const handleLight = ()=>{
    dispatch({type:"LIGHTMODE"})
    console.log("light")
  }

const handleScroll = ()=>{
  if (window.scrollY>=400) {
    setNavScroll("-top-40 transition-[.6s]")
  }
  if (window.scrollY>=1000) {
    setNavScroll("top-0 w-full fixed transition-[.6s]")
  }
}

window.addEventListener("scroll",handleScroll)
  return (
    <div className={`${navScroll} py-5 px-6 xl:py-6 flex justify-between items-center z-50 bg-black`}>

        <div>
        <img src={darkImg } alt="logo" className='w-32'/>
        </div>

        <div className={`${Darkmode?("bg-[#1E2024]"):("bg-white")} z-50 xl:flex xl:justify-between xl:gap-40 xl:items-center absolute xl:relative top-20 xl:top-0 w-full xl:h-0 left-0 p-5 xl:p-0 -translate-y-[50rem] xl:translate-y-0 transition-all ${MenuToggle?("translate-y-0"):("")}`}>

            <Link to='/' className={`text-[#066AC9] py-4 xl:py-2 px-5 xl:px-3 rounded-lg font-semibold xl:ms-2 block ${Darkmode?("bg-[#1F2C3A]"):("bg-[#E2EDF8]")}`}><i className="fa-solid fa-table-cells-large"></i> Category</Link>
            <div className='xl:flex mt-2 xl:mt-0'>
                <Link to="/" className={`${Darkmode?("text-[#BFC0C9]"):("text-gray-500")} xl:mx-4 font-semibold text-md xl:border-none border-t border-[#43443b] block py-3 xl:py-0`}>Demos</Link>                                
                <Link to="/" className={`${Darkmode?("text-[#BFC0C9]"):("text-gray-500")} xl:mx-4 font-semibold text-md xl:border-none border-t border-[#43443b] block py-3 xl:py-0`}>Page</Link>
                <Link to="/" className={`${Darkmode?("text-[#bfc0c9]"):("text-gray-500")} xl:mx-4 font-semibold text-md xl:border-none border-t border-[#43443b] block py-3 xl:py-0`}>Account</Link>
                <Link to="/" className={`${Darkmode?("text-[#BFC0C9]"):("text-gray-500")} xl:mx-4 font-semibold text-md xl:border-none border-t border-[#43443b] block py-3 xl:py-0`}>Megamenu</Link>
                <Link to="/" className={`${Darkmode?("text-[#BFC0C9]"):("text-gray-500")} xl:mx-4 font-semibold text-md xl:border-none border-t border-[#43443b] block py-3 xl:py-0`}><span><i className="fa-solid fa-ellipsis"></i></span></Link>
            </div>
            <div>
                  <div>
                  <form className={` border border-[#43443b] px-2 py-2 rounded-lg w-full ${Darkmode?("bg-[#222529]"):("bg-white")}`}>
                       <input type="search" name="" id="" className={`${Darkmode?("bg-[#222529]"):("bg-white text-black")} text-white outline-none w-[90%] sm:w-[94%] xl:w-auto`} placeholder='Search'/>
                       <span className={`${Darkmode?("text-white"):("text-black")} w-[5%] xl:w-auto`}><i className="fa-solid fa-magnifying-glass"></i></span>
                   </form>
                  </div>
            </div>
        </div>

        <div className='xl:ms-2 flex items-center gap-4'>
          <span className={`text-white text-3xl xl:hidden`} onClick={handleClick}><i className={`${MenuToggle ? ("fa-solid fa-xmark"):("fa-solid fa-bars")}`}></i></span>
           <span onClick={handleProfile}><img src="https://eduport.webestica.com/assets/images/avatar/01.jpg" alt="profile" className='w-10 rounded-full relative'/></span>           
      
          <div className={`${Darkmode ?("bg-[#0F0F10]"):("bg-white shadow-2xl")} absolute top-16 xl:top-20 right-6 px-5 py-3 rounded-lg transition-all ${profile?("translate-y-0 transition-all"):("translate-y-14 transition-all scale-0")} z-50`}>
                <div className='flex gap-3 mx-4'>
                <img src="https://eduport.webestica.com/assets/images/avatar/01.jpg" alt="profile" className='w-12 rounded-full'/>
                  <div>
                    <p className={`${Darkmode ? ("text-white"):("text-black")} font-bold`}>Lori Fergusion</p>
                    <p className='text-[#747579] text-xs'>lorifurgusion123@gmail.com</p>
                  </div>
                </div>
                <hr className='border border-[#43443b] my-3'/>
                <Link to='/' className='text-[#9D9EA6] flex gap-4 items-center font-semibold hover:bg-[#0D1823] hover:text-[#066AC9] px-4 py-2 rounded-md active:text-[#066AC9] transition-[.7s] text-center'><span><i className="fa-regular fa-user"></i></span> Edit Profile</Link>
                <Link to='/' className='text-[#9D9EA6] flex gap-4 items-center font-semibold hover:bg-[#0D1823] hover:text-[#066AC9] px-4 py-2 rounded-md active:text-[#066AC9] transition-[.7s] text-start'><span><i className="fa-solid fa-gear"></i></span> Account Setting</Link>
                <Link to='/' className='text-[#9D9EA6] flex gap-4 items-center font-semibold hover:bg-[#0D1823] hover:text-[#066AC9] px-4 py-2 rounded-md active:text-[#066AC9] transition-[.7s] text-start'><span><i className="fa-solid fa-info ps-1"></i></span> Help</Link>
                <Link to='/' className='text-[#9D9EA6] flex gap-4 items-center font-semibold hover:bg-[#231115] hover:text-[#D6293E] px-4 py-2 rounded-md active:text-[#066AC9] transition-[.7s] text-start'><span><i className="fa-solid fa-power-off"></i></span> Sign Up</Link>
                <hr className='border border-[#43443b] my-3'/>
                <div className={` rounded-md flex justify-between p-1 ${Darkmode?("bg-[#2A2C31]"):("bg-white")}`}>
                        <button className='text-[#696A6E] hover:bg-[#2A2D40] rounded-md px-3 py-2' onClick={handleLight}><span><i className="fa-solid fa-moon"></i></span> Light</button>
                        <button className='text-[#696A6E] hover:bg-[#2A2D40] rounded-md px-3 py-2' onClick={handleMoon}><span><i className="fa-solid fa-sun"></i></span> Dark</button>
                        <button className='text-[#696A6E] hover:bg-[#2A2D40] rounded-md px-3 py-2'><span><i className="fa-solid fa-circle-half-stroke"></i></span> Auto</button>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Header