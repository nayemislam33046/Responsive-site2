import React, { useState } from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

const Navbars = () => {
  const [navbar, setNavbar] = useState("")
  const [lastScrollY, setlastScrollY] = useState(0)
  const [showMenu, setshowMenu] = useState(true)
  const handleScroll = ()=>{
    if (window.scrollY>100) {
        if (window.scrollY>lastScrollY) {
             setNavbar("top")
        }
        else{
          setNavbar("hide")
        }
    }
    else{
     setNavbar("show")
    }
    setlastScrollY(window.scrollY)
  }
  window.addEventListener("scroll",handleScroll)
const handleMenu = (e)=>{
  setshowMenu(!showMenu)
}
  return (
    <div className={`navParents ${navbar}`}>
         <a href="/" className='logo'>MoviE AppS</a>
         <div className='navSide'>
                  <div className={`nvlink ${showMenu ? "hides":"shows"}`}>
                  <NavLink to='/' className="Links">Movie</NavLink>
                  <NavLink to='/' className="Links">Explore</NavLink>

                    </div>           
           <Search/>
          <div onClick={handleMenu} className='menuBr'>
              {showMenu?(<BiMenu className='menuIcon'/>):(<CgClose className='menuIcon'/>)}
          </div>
         </div>
    </div>
  )
}

export default Navbars