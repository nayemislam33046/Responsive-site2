import React, { useContext } from 'react'
import { TrainingData } from '../../Data/TraningData'
import { ThemeProvider } from '../../Context/Context'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Autoplay} from 'swiper/modules'
import 'swiper/css/bundle';
const Training = () => {
  const {state} = useContext(ThemeProvider)
  const Darkmode = state.Darkmode

 
  return (
    <div className='mt-20 px-5 '>
      <p className={`text-4xl font-bold text-center ${Darkmode ? ("text-white"):("text-black")}`}>Our Trending Courses</p>
      <p className={`text-[#A1A1A8] text-center mt-3`}>Check out most 🔥 courses in the market</p>
   
          
 <Swiper modules={[Navigation,Autoplay]} navigation slidesPerView={1} loop={true} autoplay breakpoints={{
  700:{
    slidesPerView:2,
    spaceBetween:10
  },
  1200:{
    slidesPerView:3,
    spaceBetween:20
  }
  }}>

         
      {TrainingData?.map((traData)=>{
        const { id,img,Type,level,Title,rating,vote,Student,duration,lectures,profile,names,Price} = traData
        const ids = new Date().getTime().toString()
        return <SwiperSlide className='rounded-lg mt-5 border overflow-hidden h-auto flex items-center justify-center flex-col' key={id}> 
                      <img src={img} alt="" className='w-full'/>
         
                       <div className='p-4'>
                       <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-2'>
                          <p className={`py-1 px-2 text-sm ${Darkmode ? ("text-[#066AC9] bg-[#1F2C3A]"):("text-[#3385D3] bg-[#E5F0FA]")} rounded-md`}>{Type}</p>
                          <p className='py-1 px-2 text-sm text-white bg-black rounded-md'>{level}</p>
                        </div>
                            <span><i className={`fa-regular fa-bookmark ${Darkmode?"text-white":"text-black"}`}></i></span>
                      </div>

                      <p className={`text-2xl ${Darkmode?"text-white":"text-black"}`}>{Title}</p>
                     <div className='flex justify-between items-center mt-5'>
                     <div className='flex items-center gap-2'>
                        <span className='text-yellow-500'>{rating} <i className="fa-solid fa-star text-yellow-500"></i></span>
                        <p className={`${Darkmode?"text-white":"text-black"}`}>({vote})</p>
                      </div>
                      <div>
                        <p className={`${Darkmode?"text-white":"text-black"}`}>{Student} (Student)</p>
                      </div>
                     </div>
                     <div className='py-5 flex items-center gap-4'>
                       <span className={`${Darkmode?"text-white":"text-black"} flex gap-2 items-center `}><i className="fa-regular fa-clock text-[#AF2637]"></i>{duration}</span>
                       <span className={`${Darkmode?"text-white":"text-black"} flex gap-2 items-center `}><i className="fa-solid fa-table text-[#FD7E14]"></i>{lectures} Lectures</span>
                     </div>
                     <hr className='my-2'/>
                     <div className='flex justify-between items-center'>
                       <div className='flex items-center gap-3'>
                       <img src={profile} alt="" className='w-12 rounded-md'/>
                       <p className={`${Darkmode?"text-white":"text-black"}`}>{names}</p>
                       </div>
                       <p className='text-[#0CBC87] font-bold text-3xl'>{Price}</p>
                     </div>
                       </div>
          </SwiperSlide>
        
        })}
            
          </Swiper>
   
      
    </div>
  )
}

export default Training