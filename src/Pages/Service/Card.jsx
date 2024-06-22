import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({icon,titleLink,desc}) => {
  return (
    <div className='bg-[rgb(41,42,45)] relative px-5 py-7 mt-4 rounded-lg text-start'>
        <span className='bg-white text-green-500 p-4 rounded-full text-2xl absolute -top-7 left-5 '><i className={icon}></i></span> <br />
        <Link className='text-white text-2xl font-bold hover:text-green-500' to="/">{titleLink}</Link>
        <p className='text-[rgb(196,197,199)] pt-5'>{desc}</p>
        <button className='text-[rgb(7,147,67)] hover:text-[rgb(30,82,10)] pt-6 flex gap-2 items-center group'>Know More <span><i className="fa-solid fa-arrow-right mt-2 group-hover:ms-1 transition-all"></i></span></button>
    </div>
  )
}

export default Card