import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import ContactInfoBar from '../components/Contactinfobar/Contactinfobar'
import HeroBanner from '../components/Herobanner/Herobanner'
import AboutCompany from '../components/Aboutcompany/Aboutcompany'
import Testimonials from '../components/Testimonials/Testimonials'
import SolarTrustSection from '../components/Solartrustsection/Solartrustsection'
import StatsCards from '../components/Statscards/Statscards'
import EquipmentTrading from '../components/Equipments/Equipmenttrading'
import SolarServices from '../components/Solarservices/Solarservices'
import Faq from '../components/Faq/Faq'

function home() {
  return (
    <div>
      <Navbar/>
      <HeroBanner/>
      <AboutCompany/>
      <StatsCards/>
      <EquipmentTrading/>
      <SolarServices/>
      <SolarTrustSection/>
      <Testimonials/>
      <Faq/>
      <ContactInfoBar/>
      <Footer/>
      
    </div>
  )
}

export default home
