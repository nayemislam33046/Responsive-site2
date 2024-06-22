import React, { useContext } from 'react'
import { ThemeProvider } from '../../Context/context'

const FeedbackDetails = ({desc,names,src,Ratings}) => {
  const {state,dispatch} = useContext(ThemeProvider)
  const darkmode = state.Darkmode
  const Ratingsparent = Array.from({length:5},(_,index)=>{
    const number = index+0.5;
    return <span className='mx-1' key={number}>
       {Ratings>index+1?(<i className="fa-solid fa-star text-yellow-500"></i>):(Ratings>=number?(<i className="fa-solid fa-star-half-stroke text-yellow-500"></i>):(<i className="fa-regular fa-star"></i>))}
    </span>
   })
  return (
    <div className='mt-2 sm:mx-4'>
       <p>{Ratingsparent}</p> 
        <p className={`${darkmode?("text-black"):("text-white")} text-lg mt-2`}>{desc}</p>
        <div className='flex items-center gap-2 mt-4 pb-10'>
        <img src={src} alt="" className='w-10 h-10 rounded-lg'/>
        <p className='text-[rgb(166,167,170)]'>{names}</p>
        </div>
    </div>
  )
}

export default FeedbackDetails