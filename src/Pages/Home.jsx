import React from 'react'
import Header from '../Header/Header'
import Homepage from './Homepage/Homepage'
import Course from './Course/Course'
import Training from './Training/Training'
import Reviews from './Reviews/Reviews'
import Footer from './Footer/Footer'
import Copyright from './Footer/Copyright'
import BacktoTop from './BacktoTop/BacktoTop'

const Home = () => {
  return (
    <div>
      <Header/>
      <Homepage/>
      <Course/>
      <Training/>
      <Reviews/>
      <Footer/>
      <Copyright/>
      <BacktoTop/>
    </div>
  )
}

export default Home