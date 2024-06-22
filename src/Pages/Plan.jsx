import React, { useContext } from 'react'
import moneyWallet from "../assets/money.png"
import { ThemeProvider } from '../Context/context'
const Plan = () => {
  const {state,dispatch} = useContext(ThemeProvider)
  const darkmode = state.Darkmode
  return (
  <div className='lg:px-7 md:px-8 xl:px-[100px]'>
                <div className='py-10 text-center'>
                <p className='bg-[rgb(41,42,45)] inline-block py-1 px-2 text-white rounded-md'>💵 Transparent pricing packages</p>
                <p className={`text-4xl font-bold mt-6 ${darkmode?("text-black"):("text-white")}`}>Get a plan that grows with you</p>
                </div>
    <div className='mt-20 px-5 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='sm:border-r-2 sm:border-gray-600 sm:pr-1 sm:text-start'>
                 <img src={moneyWallet} alt="money" className='w-32 mt-12 m-auto sm:m-0'/>
                 <p className='bg-[rgb(6,13,32)] inline-block px-1 text-white rounded-sm text-sm mt-5'>Boss mode</p>
                 <p className={`font-bold mt-5 ${darkmode?("text-black"):("text-white")}`}><span className='text-6xl'>$59</span> <span className='text-2xl'>/month</span></p>
                 <p className='text-[rgb(180,181,184)] mt-10 text-lg'>The all-in-one solution for businesses that want to succeed online.</p>
            </div>

      <div className='mt-5 lg:-mt-2'>
            <p className={`${darkmode?("text-black"):("text-white")} font-bold text-xl`}>Features list of your need</p>
            <p className={`${darkmode?("text-black"):("text-white")} text-lg font-semibold mt-3`}><i className="fa-solid fa-check text-green-600"></i> Up to 05 users monthly </p>
            <p className={`${darkmode?("text-black"):("text-white")} text-lg font-semibold mt-3`}><i className="fa-solid fa-check text-green-600"></i> Free 5 host & domain </p>
            <p className={`${darkmode?("text-black"):("text-white")} text-lg font-semibold mt-3`}><i className="fa-solid fa-check text-green-600"></i> Google Docs style editors </p>
            <p className={`${darkmode?("text-black"):("text-white")} text-lg font-semibold mt-3`}><i className="fa-solid fa-check text-green-600"></i> Support for 30+ languages </p>
            <p className={`${darkmode?("text-black"):("text-white")} text-lg font-semibold mt-3`}><i className="fa-solid fa-check text-green-600"></i> 24/7 Dedicated Support </p>
            <button className=' mt-8 py-2 px-6 rounded-md bg-[rgb(65,66,69)] transition-all text-white'>Start a free 7-day trial</button>
            <p className={`${darkmode?("text-black"):("text-[rgb(180,181,184)]")} mt-2 text-lg`}>No credit card is required!</p>
      </div>

        <div className='bg-[rgb(9,184,80)] p-8 lg:p-5 text-start mt-10 rounded-lg h-72 lg:h-[26rem] relative sm:col-span-2 lg:col-span-1 lg:-mt-1' >
            <p className='px-[6px] rounded-md text-white text-sm bg-black inline-block'>Enterprise</p>
            <p className='text-2xl text-white mt-5 font-bold' >Custom pricing plan</p>
            <div className='absolute bottom-5 left-0 mx-5 w-[100%]'>
                <button className='text-black bg-white rounded-md py-2 w-[90%] sm:w-[94%] lg:w-[88%] font-semibold'>Contuct Sales</button>
                <p className='text-white text-lg text-center mr-10 mt-2'>Get personalized demo and custom plan</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Plan