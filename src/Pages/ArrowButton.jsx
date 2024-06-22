import React, { useState } from 'react'

const ArrowButton = () => {
    const [arrow, setArrow] = useState("hidden")
    
    const handleScroll = (e)=>{
        if(window.scrollY>=400){
            setArrow("scale-0 transition-all")
          }
        if(window.scrollY>=1000 ){
            setArrow("visible transition-all")
        } 
      }
      
      window.addEventListener("scroll",handleScroll)
  return (
   <div className={`${arrow} transition-all`}>
     <a href="#home" className=' hidden sm:block fixed right-8 bottom-10 z-50' >
        <p className='text-blue p-5 rounded-lg text-white bg-green-800'><i className="fa-solid fa-arrow-up"></i></p>
    </a>
   </div>
  )
}

export default ArrowButton