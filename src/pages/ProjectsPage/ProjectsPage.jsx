import React from 'react'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import ProjectShowcase from '../../components/Projectshowcase/Projectshowcase';
import PageBanner from '../../components/Pagebanner/Pagebanner';
import ProjectBannerImg from "../../assets/hero-banner.webp";


function ProjectsPage() {
  return (
    <div>
      <Navbar/>
      <PageBanner
        image={ProjectBannerImg}
        title="Our Projects"
        currentPage="Our Projects"
      />
      <ProjectShowcase/>
      <Footer/>
      
    </div>
  )
}

export default ProjectsPage
