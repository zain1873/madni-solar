import React from 'react'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import AboutCompany from './../../components/Aboutcompany/Aboutcompany';
import ContactInfoBar from '../../components/Contactinfobar/Contactinfobar';
import MeetOurTeam from '../../components/Meetourteam/Meetourteam';
import PageBanner from '../../components/Pagebanner/Pagebanner';
import UserTestimonnials from '../../components/UserTestimonials/UserTestimonials';
import AboutBanner from "../../assets/hero-banner.webp";


function AboutPage() {
  return (
    <div>
    <Navbar/>
      <PageBanner
      image={AboutBanner}
      title="About Us"
      currentPage="About Us"
      />
    <AboutCompany/>
    <MeetOurTeam/>
    <UserTestimonnials/>
    <ContactInfoBar/>
    <Footer/>
    </div>
  )
}

export default AboutPage
