import React, { useContext } from 'react'
import FeedbackDetails from './FeedbackDetails'
import client1 from "../../assets/excellentThemeClient.jpg"
import client2 from "../../assets/denishBarrett.jpg"
import client3 from "../../assets/nixmaxwell.jpg"
import client4 from "../../assets/carolinortiz.jpg"
import allclient from "../../assets/allclient.jpg"
import excellentThemeClient1 from "../../assets/excellentThemeClient.jpg"
import "./style.css"
import { Swiper ,SwiperSlide } from 'swiper/react'
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { ThemeProvider } from '../../Context/context'


const Feedback = () => {
  const {state,dispatch} = useContext(ThemeProvider)
  const darkmode = state.Darkmode
  const id = new Date().getTime().toString()
  return (
    <div className='mt-32 px-7 lg:flex lg:justify-between xl:px-[100px]'>
        
           <div className='lg:w-2/4'> 

           <div>
        <p className='text-white bg-[rgb(41,42,45)] inline-block py-1 px-2 rounded-md'>💖 Real results from real clients</p>
        <p className={`${darkmode?("text-black"):("text-white")} text-3xl font-bold mt-7`}>See how we've helped our clients succeed</p>
        <p className={`${darkmode?("text-black"):("text-white")} font-bold mt-8 text-xl`}>More than 1500+ agencies using Mizzle</p>
            </div>
        <div>
          <Swiper modules={[Autoplay,Pagination]} pagination={{clickable:true,bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`}} 
          autoplay={{delay:1500}}
          loop={true} slidesPerView={1} key={id} breakpoints={{
            640:{
              slidesPerView:2
            }
          }}>
                <SwiperSlide>
                <FeedbackDetails desc={"Mizzle is the perfect theme for businesses that want to create a stylish and functional website."} src={client1} names={"By Nix Maxwell"} Ratings={4.5}/>
                </SwiperSlide>
                
                <SwiperSlide>
            <FeedbackDetails desc={"The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need."} src={client2} names={"By Dennis Barrett"} Ratings={4.5}/>
                </SwiperSlide>

                <SwiperSlide>
            <FeedbackDetails desc={" Webestica helped us create a stunning website that reflects our brand perfectly.avatar"} src={client3} names={"By Dennis Barrett"} Ratings={4.5}/>
                </SwiperSlide>

                <SwiperSlide>
            <FeedbackDetails desc={"I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.avatar"} src={client4} names={"By Carolyn Ortiz"} Ratings={4.5}/>
                </SwiperSlide>
          </Swiper>
       
              </div>
           </div>
       
       {/* ALL Client */}
           <div className='relative mt-10 sm:mt-0 lg:mt-0 md:mt-20'>
                  <img src={allclient} alt="allclient" className='sm:w-[80%] rounded xl:ml-auto' />
  
  
                  <div className='bg-[#202124] absolute w-full flex items-center gap-4 py-3 rounded-lg -left-7 -top-3 sm:top-12 sm:w-2/4 lg:-left-10 lg:py-2 lg:top-10 lg:w-[60%] xl:left-16'>
                    <img src="https://mizzle.webestica.com/assets/images/avatar/09.jpg" alt="avatar09" className='w-10 rounded-full'/>
                    <p className='text-white font-semibold'>The best Bootstrap theme we've ever used 🔥</p>
                  </div>


                  <div className='bg-[#FFFFFF] absolute flex items-center gap-4 py-2 rounded-lg -left-7 bottom-0 sm:bottom-16 px-3 xl:left-16 xl:bottom-1'>
                    <img src={excellentThemeClient1} alt="excellentThemeClient1" className='w-10 rounded-full'/>
                    <p className='text-black'>Excellent Theme 💗</p>
                  </div>
           </div>
    </div>
  )
}

export default Feedback