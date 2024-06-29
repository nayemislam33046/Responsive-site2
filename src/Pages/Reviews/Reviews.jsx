import React, { useContext } from 'react'
import { ThemeProvider } from '../../Context/Context'
import ReviewBse from './ReviewBse'
import SmallRating from './SmallRating'

const Reviews = () => {
    const {state} = useContext(ThemeProvider)
    const Darkmode = state.Darkmode
  return (
    <div className={`${Darkmode ? ("bg-[#2A2C31]"):("bg-[#F5F7F9]")} mt-10 md:px-6 py-20 z-40 xl:px-[150px] relative xl:flex items-center xl:gap-5`}>
        

<span className='absolute -left-20 -z-30 xl:top-10 xl:left-0 top-72 md:top-56'>
<svg className={`${Darkmode ? ("fill-[#4C2B33]"):("fill-[#EECDD3]")}`} width="211px" height="211px">
<path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
</svg>
</span>


 <div className='z-10 text-center px-2 order-2 xl:text-start'>
        <p className={`text-4xl xl:text-5xl font-bold pb-3 ${Darkmode ? ("text-white"):("text-black")}`}>Some valuable feedback from our students</p>
        <p className='text-[#A1A1A8] pb-3'>Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
        <button className='py-2 font-semibold px-4 bg-[#055AAB] rounded-lg text-white'>View Reviews</button>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:mt-16'>
    <ReviewBse src={"https://eduport.webestica.com/assets/images/avatar/01.jpg"} desc={"Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing"} rating={4.5} names={"Carolyn Ortiz"}/>
   
   
   
   <div className='hidden md:block '>
  <div className='bg-[#222529] rounded-lg inline-block p-5 '>
    <p className='text-white font-bold mb-3 relative'>100+ Verified Mentors           <span className='bg-[#F7C32E] rounded-full px-5 py-4 absolute -top-12 -right-10'><i className="fa-solid fa-check text-black"></i></span></p>
        <div className='flex items-center gap-3'>
        <img src="https://eduport.webestica.com/assets/images/avatar/09.jpg" alt="" className='rounded-md w-12 '/>
          <div>
            <p className='text-white'>Lori Stevens</p>
            <p className='text-[#44464B]'>Tutor of physic</p>
          </div>
        </div>       
        <div className='flex items-center gap-3 mt-5'>
        <img src="https://eduport.webestica.com/assets/images/avatar/04.jpg" alt="" className='rounded-md w-12 '/>
          <div>
            <p className='text-white'>Billy Vasquez</p>
            <p className='text-[#44464B]'>Tutor of chemistry</p>
          </div>
        </div>       
        <div className='flex items-center gap-3 mt-5'>
        <img src="https://eduport.webestica.com/assets/images/avatar/02.jpg" alt="" className='rounded-md w-12 '/>
          <div>
            <p className='text-white'>Larry Lawson</p>
            <p className='text-[#44464B]'>Tutor of technology</p>
          </div>
        </div>       
    </div>
  </div>


    <div className='w-44 h-28 bg-blue-500 mt-14 rounded-xl text-center hidden md:block ms-auto relative'>
     <span className='absolute -top-16 -left-20 -z-10'>
     <svg className='fill-[#D6293E]' height="180px">
								<path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2"></ellipse>
								<path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"></path>
								<path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z"></path>
								<path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z"></path>
								<path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
								<path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2"></ellipse>
								<path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2"></ellipse>
								<ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2"></ellipse>
								<path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
								<ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2"></ellipse>
								<path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2"></ellipse>
								<path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z"></path>
								<path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z"></path>
								<path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z"></path>
								<ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2"></ellipse>
								<path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
								<path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
								<path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
								<path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
								<path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
								<path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z"></path>
								<path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
								<path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z"></path>
								<path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z"></path>
							</svg>
     </span>
       
       <p className='text-white font-bold text-2xl mt-2'>4.5/5.0</p>
       <SmallRating rating={4.5}/>
       <p className='text-white '>Based on 3265 ratings</p>
    </div>

       <div className='xl:-mt-32'>
       <ReviewBse src={"https://eduport.webestica.com/assets/images/avatar/03.jpg"} desc={"At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending."} rating={4.5} names={"Dennis Barrett"}/>
       </div>
</div>

    </div>
  )
}

export default Reviews