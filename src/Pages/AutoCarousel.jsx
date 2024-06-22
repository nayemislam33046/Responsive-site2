import React, { useContext } from 'react'
import sitemark from "../assets/sitemark.svg"
import pinpoint from "../assets/pinpoint.svg"
import logicsum from "../assets/logicsum.svg"
import logicsum2 from "../assets/logoipsum2.svg"
import greenish from "../assets/greenish.svg"

import { Swiper ,SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { ThemeProvider } from '../Context/context'


const AutoCarousel = () => {
const {state,dispatch} = useContext(ThemeProvider)
const darkmode = state.Darkmode

  return (
    <div className='pt-[100px] md:flex lg:pt-[70px] px-7 w-full lg:px-[40px] self-center items-center gap-3'>
       <div className='md:w-[28%]'>
       <p className={` font-bold text-2xl break-words pe-7 ${darkmode?("text-black"):("text-white")}`}>100+ Comanies Trust Us :</p>
       </div>
       <div className='md:w-[68%] md:mt-0 mt-7'>
         
         <div className='flex items-center'>
                    <Swiper modules={[Autoplay]} spaceBetween={30} loop={true} slidesPerView={2} breakpoints={{
                      600 : {
                                      slidesPerView:3,
                                      spaceBetween:50,
                      },
                      950 : {
                                      slidesPerView:4,
                                      spaceBetween:40,
                      },
                      1200 : {
                                      slidesPerView:5,
                                      spaceBetween:40,
                      }
                    }} autoplay={{delay:2000,disableOnInteraction:false}}>
                <SwiperSlide>
                   <img src={sitemark} alt="" className='md:w-36'/>
                </SwiperSlide>
              <SwiperSlide>
                <img src={pinpoint} alt="" className='md:w-36'/>

              </SwiperSlide>
                <SwiperSlide>
                <img src={logicsum} alt="" className='md:w-36'/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={pinpoint} alt="" className='md:w-36'/>
              </SwiperSlide>
                <SwiperSlide>
                <img src={logicsum2} alt="" className='md:w-36 mt-2'/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={logicsum} alt="" className='md:w-36'/>

                </SwiperSlide>
                <SwiperSlide>
                <img src={greenish} alt="" className='md:w-36 mt-1'/>

                </SwiperSlide>

        
       
                    </Swiper>

          </div>

         
        

       </div>

    </div>
  )
}

export default AutoCarousel