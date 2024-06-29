import React, { useState } from 'react'

const BacktoTop = () => {
  const [backbtn, setBackbtn] = useState("")

  const handleScroll = ()=>{
    
    if (window.scrollY>=400) {
      setBackbtn("hidden")
    }
    if (window.scrollY>=1000) {
      setBackbtn("block")
    }
  }
  
  window.addEventListener("scroll",handleScroll)
  
  return (
    <a href='#Homes' className={`${backbtn} hidden lg:block`}>
        <button className='bg-green-400 fixed bottom-5 z-40 right-5 p-2 rounded-md'>
            <span><i className="fa-solid fa-arrow-up"></i></span>
        </button>
    </a>
  )
}

export default BacktoTop