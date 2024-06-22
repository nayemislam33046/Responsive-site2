import React from 'react'
import Card from './Card'
const Service = () => {
  return (
    <div className='mt-20 px-5 md:px-11 bg-[rgb(32,33,36)] xl:px-[100px] py-20 text-center'>
        <p className='bg-[rgb(41,42,45)] inline-block py-1 px-2 text-white rounded-md'>🚀 Innovative solutions, Measurable results</p>
        <p className='text-4xl mt-5 font-bold text-white'>We specialize in the following services</p>
        <div className='grid grid-cols-1 mt-16 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
             <Card icon={"fa-solid fa-layer-group"} titleLink={"Digital Marketing"} desc={"Growing brands online through digital channels."}/>
             <Card icon={"fa-solid fa-circle-stop"} titleLink={"Product Design"} desc={"Creating products that users love and businesses need ."}/>
             <Card icon={"fa-solid fa-boxes-stacked"} titleLink={"Web Design"} desc={"Designing websites that are visually appealing & user-friendly."}/>
             <Card icon={"fa-regular fa-pen-fancy"} titleLink={"UI/UX Design"} desc={"Creating user interfaces that are both efficient and enjoyable."}/>
             <Card icon={"fa-solid fa-briefcase"} titleLink={"Business Strategy"} desc={"Developing and executing plans to achieve business goals."}/>
             <Card icon={"fa-solid fa-binoculars"} titleLink={"Research"} desc={"Gathering and analyzing data to inform decision-making."}/>
             <Card icon={"fa-solid fa-code"} titleLink={"Web Development"} desc={"Building and maintaining websites and web applications."}/>
             <Card icon={"fa-solid fa-bullseye"} titleLink={"Brand Design"} desc={"Creating brands that are unique, memorable, and meaningful."}/>
        </div>
           </div>
  )
}

export default Service





{/* <i class="fa-solid fa-layer-group"></i> 
<i class="fa-solid fa-boxes-stacked"></i>
<i class="fa-solid fa-circle-stop"></i>
<i class="fa-regular fa-pen-fancy"></i>
<FontAwesomeIcon icon="fa-solid fa-briefcase" />
<FontAwesomeIcon icon="fa-solid fa-binoculars" />
<FontAwesomeIcon icon="fa-solid fa-code" />
<FontAwesomeIcon icon="fa-solid fa-bullseye" /> */}