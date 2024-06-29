import React, { useContext } from 'react'
import { ThemeProvider } from '../../../Context/Context'
import { Marketing } from '../../../Data/AllData'
const Marketings = () => {
  const {state} = useContext(ThemeProvider)
  const Darkmode = state.Darkmode
  return (
    <div className='pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:grid-cols-4'>
         {Marketing?.map((webData)=>{
          const {id,img,level,title,desc,rating,duration,lectures,love}=webData
       
          const rts = Array.from({length:5},(_,i)=>{
            const number = i+0.5
                return <span key={i} className='ms-1'>
                              {rating>=i+1 ? (<i className="fa-solid fa-star text-yellow-500"></i>):(rating>=number ?(<i className="fa-solid fa-star-half-stroke text-yellow-500"></i>):(<i className="fa-regular fa-star text-yellow-500"></i>))}
                </span>
          })
          const description = desc.substring(0,61)
          return <div key={id} className=' rounded-md relative pb-8 shadow-md'>
               <img src={img} alt="course-banner" className='rounded-lg'/>
               <div className='m-5 leading-9'>
                 <div className='flex items-center justify-between'>
                    <p className={`${level === "Beginner" && ("text-[#0CBC87] bg-[#192E2C]")}} ${level ==='Intermediate'&&("text-[#186977] bg-[#1A2C31]")} ${level === "All level" && ("text-violet-400 bg-[#232132]")} text-sm rounded p-1`}>{level}</p>
                    <span>{love ? (<i className="fa-solid fa-heart text-red-500"></i>):(<i className={`${Darkmode ? ("text-white"):("text-black")} fa-regular fa-heart`}></i>)}</span>
                 </div>
                 <p className={`${Darkmode ? ("text-white"):("text-black")} text-2xl`}>{title}</p>
                 <p className='text-sm text-[#88898C]'>{description.length>=61 ? description+"...":description}</p>
                 <span className='text-white font-semibold'>{rts} <span className='ms-3'>{rating}</span>/5</span>
                   
                   <div className='flex items-center justify-between border-t absolute bottom-0 w-full left-0 px-2 py-1'>
                    <p className={`${Darkmode ? ("text-white"):("text-black")} flex gap-2 items-center `}><span><i className="fa-regular fa-clock text-[#AF2637]"></i></span>{duration}</p>
                    <p className={`${Darkmode ? ("text-white"):("text-black")} flex gap-2 items-center `}><span><i className="fa-solid fa-table text-[#FD7E14]"></i></span> {lectures} Lectures</p>
                   </div>
               </div>
          </div>
        }) }
    </div>
  )
}

export default Marketings