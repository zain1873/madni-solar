import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PageBanner from '../components/Pagebanner/Pagebanner'
import Faq from '../components/Faq/Faq'
import UserTestimonials from '../components/UserTestimonials/UserTestimonials'
import faqBannerImg from '../assets/hero-banner.webp'

function FaqPage() {
  return (
    <div>
      <Navbar/>

      <PageBanner
        image={faqBannerImg}
        title="FAQ"
        currentPage="FAQ"
      />

      <Faq/>
      <UserTestimonials/>
      <Footer/>

    </div>
  )
}

export default FaqPage