import React, { useState } from "react";
import "./Aboutcompany.css";

function AboutCompany() {
  // Content for each tab - easy to extend or connect to an API later
  const tabsData = [
    {
      id: "who-we-are",
      label: "Who we are",
      description:
        "madni solar is a Pakistan-based solar products and System Installation Service provider. We supply solar panels, inverters, lithium batteries and related equipment for residential, commercial, industrial and agricultural applications. Our services include consultation, system design, equipment supply, installation, grid-connection support and after-sales assistance.",
      points: [
        "Tier-1 Panels",
        "Premium Inverters",
        "Lithium Batteries",
        "Reliable Services",
      ],
    },
    {
      id: "our-mission",
      label: "Our Mission",
      description:
        "Our mission is to make clean, affordable solar energy accessible to every home and business in Pakistan by delivering quality products and dependable installation services backed by expert guidance from day one.",
      points: [
        "Affordable Clean Energy",
        "Nationwide Coverage",
        "Expert Consultation",
        "Long-Term Support",
      ],
    },
    {
      id: "our-goal",
      label: "Our Goal",
      description:
        "We aim to become Pakistan's most trusted solar partner by continuously improving our products, expanding our reach, and helping communities reduce their electricity costs through sustainable, long-lasting solar systems.",
      points: [
        "Trusted Nationwide",
        "Sustainable Growth",
        "Reduced Electricity Bills",
        "Community Impact",
      ],
    },
  ];

  // Track which tab is currently active
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  // Find the data object for the active tab
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="about-section">
      <div className="about-wrapper flex">
        {/* Left side image */}
        <div className="about-image-col">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
            alt="Engineers inspecting solar panels"
            className="about-image"
          />
          {/* Floating experience badge */}
          <div className="about-badge">
            <span className="about-badge-number">2+</span>
            <span className="about-badge-text">Years of Experience</span>
          </div>
        </div>

        {/* Right side content */}
        <div className="about-content-col">
          <div className="container about-content">
            {/* Small tag */}
            <div className="about-tag flex">
              <span className="about-tag-highlight">About</span>
              <span className="about-tag-plain">Company</span>
            </div>

            {/* Heading */}
            <h2 className="about-heading">
              Solar Products and Professional Services Across Pakistan
            </h2>

            {/* Tabs */}
            <div className="about-tabs flex flex-wrap">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  className={`about-tab-btn ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <p className="about-description">{activeContent.description}</p>

            <ul className="about-points">
              {activeContent.points.map((point, index) => (
                <li key={index} className="about-point-item flex items-center">
                  <span className="about-point-icon"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;