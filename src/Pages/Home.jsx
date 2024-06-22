import React from 'react'
import Header from '../Header/Header'
import Homepage from './Homepage'
import AutoCarousel from './AutoCarousel'
import Meeting from './Meeting'
import Service from './Service/Service'
import Plan from './Plan'
import Feedback from './Feedback/Feedback'
import Footer from './Footer'
import ArrowButton from './ArrowButton'

const Home = () => {
  return (
    <div>
        <Header/>
        <Homepage/>
        <AutoCarousel/>
        <Meeting/>
        <Service/>
        <Plan/>
        <Feedback/>
        <Footer/>
        <ArrowButton/>
    </div>
  )
}

export default Home