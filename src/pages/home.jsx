import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import ContactInfoBar from '../components/Contactinfobar/Contactinfobar'
import HeroBanner from '../components/Herobanner/Herobanner'
import AboutCompany from '../components/Aboutcompany/Aboutcompany'
import Testimonials from '../components/Testimonials/Testimonials'
import SolarTrustSection from '../components/Solartrustsection/Solartrustsection'

function home() {
  return (
    <div>
      <Navbar/>
      <HeroBanner/>
      {/* <AboutCompany/> */}
      {/* <SolarTrustSection/> */}
      <Testimonials/>
      <ContactInfoBar/>
      <Footer/>
      
    </div>
  )
}

export default home
