import React, { useContext } from 'react'
import meeting from "../assets/meeting.jpg"
import meetingTable from "../assets/meetingTable.jpg"
import { ThemeProvider } from '../Context/context'

const Meeting = () => {

  const {state,dispatch} = useContext(ThemeProvider)
  const darkmode = state.Darkmode

  return (
    <div className='lg:flex lg:mt-20 gap-8 px-7 lg:px-[40px]'>
           

      {/* imgbr */}
      <div className='sm:grid sm:grid-cols-4 sm:gap-5 text-white text-2xl mt-16'>
        <div className='sm:col-span-2 sm:row-span-2'>
            <img src={meeting} alt="meeting" className='rounded-lg'/>
        </div>
        <div className='mt-16 sm:mt-0 flex flex-col bg-[rgb(32,33,36)] p-3 rounded-lg text-center sm:h-32'>
            <p className='font-bold text-3xl text-white'>10+</p>
            <span className='text-lg text-[rgb(197,198,199)]'>Years of experience</span>
        </div>
        <div className='bg-[rgb(9,184,80)] rounded-lg text-center sm:h-32 p-3 sm:mt-0 mt-8'>
        <p className='font-bold text-3xl text-white'>1.2k</p>
            <span className='text-lg '>Happy customers</span>
        </div>
        <div className=' sm:col-span-2 sm:row-span-2 mt-8 sm:mt-0'>
          <img src={meetingTable} alt="" className='rounded-lg'/>
        </div>
    </div>

{/* docs br */}
           <div className='lg:mt-16 mt-10'>
                <p className='bg-[rgb(41,42,45)] inline-block py-1 px-2 text-white rounded-md'>🤝 Your gateway to digital success</p>
                <p className={`text-3xl font-bold mt-5 ${darkmode?("text-black"):("text-white")}`}>Defining the future of online experiences!</p>
                <p className={` mt-6 ${darkmode?("text-black"):("text-[rgb(196,197,199)]")}`}>
                Embrace a new era of digital success with Mizzle. Our team combines cutting-edge design with robust development to deliver websites that captivate and convert.
                </p>
                    <div className='mt-6'>
                <p className={` text-lg flex items-center gap-1 ${darkmode?("text-black"):("text-[rgb(196,197,199)]")}`}><span className='text-green-500 pt-1'><ion-icon name="checkmark-circle-sharp"></ion-icon></span> Emphasis on ROI-driven solutions</p>
                <p className={` text-lg flex items-center gap-1 ${darkmode?("text-black"):("text-[rgb(196,197,199)]")}`}><span className='text-green-500 pt-1'><ion-icon name="checkmark-circle-sharp"></ion-icon></span> Expert team with diverse skill</p>
                <p className={` text-lg flex items-center gap-1 ${darkmode?("text-black"):("text-[rgb(196,197,199)]")}`}><span className='text-green-500 pt-1'><ion-icon name="checkmark-circle-sharp"></ion-icon></span> Proven track record of delivering results</p>
                      </div>               
                <button className='bg-[rgb(41,42,45)] mt-8 py-2 px-6 rounded-md hover:bg-[rgb(65,66,69)] transition-all text-white'>Discover more</button>
           </div>
    </div>
  )
}

export default Meeting