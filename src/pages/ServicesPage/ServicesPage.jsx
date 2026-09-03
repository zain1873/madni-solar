import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import EquipmentTrading from "../../components/Equipments/Equipmenttrading";
import ContactInfoBar from "../../components/Contactinfobar/Contactinfobar";
import ServicesBanner from "../../assets/hero-banner.webp";
import "../../components/Solarservices/Solarservices.css";

import {
  FaLightbulb,
  FaHome,
  FaChargingStation,
  FaHandHoldingUsd,
  FaTools,
  FaSolarPanel,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import solarServices1 from "../../assets/solar-services/1.webp";
import solarServices2 from "../../assets/solar-services/2.webp";
import solarServices3 from "../../assets/solar-services/3.webp";
import solarServices4 from "../../assets/solar-services/4.webp";
import solarServices5 from "../../assets/solar-services/1.webp";
import solarServices6 from "../../assets/solar-services/2.webp";
import solarServices7 from "../../assets/solar-services/3.webp";
import solarServices8 from "../../assets/solar-services/4.webp";

function ServicesPage() {
  const servicesData = [
    {
      image: solarServices1,
      icon: <FaLightbulb />,
      title: "Solar Equipment Trading",
      description:
        "Supplying high-quality solar panels, inverters, cables, VFDs, batteries, and breakers.",
    },
    {
      image: solarServices2,
      icon: <FaHome />,
      title: "EPC Solar Solutions",
      description:
        "Complete EPC solar solutions including design, procurement, installation, and commissioning.",
    },
    {
      image: solarServices3,
      icon: <FaChargingStation />,
      title: "Net Billing Solutions",
      description:
        "WAPDA-approved net billing services to help reduce your electricity costs.",
    },
    {
      image: solarServices4,
      icon: <FaHandHoldingUsd />,
      title: "Solar Installments — Through Banks",
      description:
        "Sun Solar does not offer direct financing. Bank approval and terms apply.",
    },
    {
      image: solarServices5,
      icon: <FaTools />,
      title: "Maintenance & Repair",
      description:
        "Routine servicing, cleaning, and repair of solar panels, inverters, and batteries.",
    },
    {
      image: solarServices6,
      icon: <FaSolarPanel />,
      title: "Solar System Design",
      description:
        "Custom load-based system design for residential, commercial, and industrial needs.",
    },
    {
      image: solarServices7,
      icon: <FaShieldAlt />,
      title: "Warranty & After-Sales Support",
      description:
        "Manufacturer-backed warranty support and dedicated after-sales assistance.",
    },
    {
      image: solarServices8,
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock consultation and support for all solar-related queries.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* ===== Page banner with breadcrumb ===== */}
      <PageBanner
        image={ServicesBanner}
        title="Our Services"
        currentPage="Our Services"
      />

      {/* ===== All services section (manually added) ===== */}
      <section className="solar-services-section">
        <div className="container">
          <div className="services-tag flex justify-center">
            <span className="services-tag-highlight">About</span>
            <span className="services-tag-plain">Solar Service</span>
          </div>

          <h2 className="services-heading">
            A leading Lahore-based solar company offering high-quality solar
            products and professional services nationwide.
          </h2>

          <div className="services-grid grid">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-icon-badge">{service.icon}</div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                  <button className="service-btn flex items-center justify-between">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* ===== Solar equipment trading section ===== */}
      <EquipmentTrading />

      <ContactInfoBar />
      <Footer />
    </div>
  );
}

export default ServicesPage;