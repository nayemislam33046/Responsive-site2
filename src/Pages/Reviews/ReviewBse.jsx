import React, { useContext } from 'react'
import { ThemeProvider } from '../../Context/Context'

const ReviewBse = ({src,desc,rating,names}) => {
    const starRating = Array.from({length:5},(_,i)=>{
        const number = i + 0.5
        return <span key={i}>
            {rating>=i+1?(<i className="fa-solid fa-star text-yellow-500"></i>):(rating>=number?(<i className="fa-solid fa-star-half-stroke text-yellow-500"></i>):(<i className="fa-solid fa-star"></i>))}
            
        </span>
    })

    const {state} = useContext(ThemeProvider)
    const Darkmode = state.Darkmode
  return (
    <div className={`${Darkmode ? ("bg-[#222529]"):("bg-[#FFFFFF]")} px-6 py-5 mx-5 mt-10 rounded-lg flex items-center justify-center flex-col text-center`}>
        <img src={src} alt="profile" className='w-20 rounded-full my-3'/>
        <p className='text-[#8A8A90] text-sm my-2'>{desc}</p>
        <span className='my-1'>{starRating}</span>
        <p className='text-white font-bold'>{names}</p>
    </div>
  )
}

export default ReviewBse