import React from 'react'
import Banner from '../commponents/home/Banner'
import Hero from '../commponents/home/Hero'
import Features from '../commponents/home/Features'
import Testimonials from '../commponents/home/Testimonials'
import CallToAction from '../commponents/home/CallToAction'
import Footer from '../commponents/home/Footer'

function Home() {
  return (
    <div>
      <Banner/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home