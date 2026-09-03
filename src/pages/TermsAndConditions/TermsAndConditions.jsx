import React from "react";
import "./TermsAndConditions.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import termsBannerImg from "../../assets/hero-banner.webp";

function TermsAndConditions() {
  // Terms & conditions content - each item has a heading and its text.
  // Easy to update the wording later without touching the layout.
  const termsData = [
    {
      heading: "Acceptance Of Terms",
      text: "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.",
    },
    {
      heading: "Use Of The Website",
      text: "The content and products provided on this website are intended to inform and assist customers with solar products and solutions. You agree not to misuse the website or use it for any unlawful purpose.",
    },
    {
      heading: "Products And Services",
      text: "Madni Solar offers a range of solar products including panels, inverters, batteries, and accessories. We also provide solar system design, installation, net billing, and maintenance services. Product specifications and availability may change without prior notice.",
    },
    {
      heading: "Orders And Payments",
      text: "All orders are subject to confirmation and acceptance by Madni Solar. Prices are listed in Pakistan Rupees (PKR) unless otherwise stated. We reserve the right to refuse or cancel any order at our discretion.",
    },
    {
      heading: "Pricing And Availability",
      text: "While we make every effort to keep pricing and availability accurate, we do not guarantee that the information is error-free. We reserve the right to correct any errors, inaccuracies, or omissions without prior notice.",
    },
    {
      heading: "Intellectual Property",
      text: "All content on this website, including text, graphics, logos, and images, is the property of Madni Solar and is protected by applicable copyright and intellectual property laws. You may not reproduce or redistribute it without permission.",
    },
    {
      heading: "Limitation Of Liability",
      text: "Madni Solar shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of, or inability to use, this website or its products and services.",
    },
    {
      heading: "Governing Law",
      text: "These terms and conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, and any disputes shall be subject to the jurisdiction of the courts of Pakistan.",
    },
    {
      heading: "Changes To These Terms",
      text: "We may update these terms and conditions from time to time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review these terms periodically.",
    },
    {
      heading: "Contact Us",
      text: "If you have any questions about these Terms and Conditions, please contact us through the contact page or by visiting our website https://Madnisolar.pk.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Page banner with title and breadcrumb */}
      <PageBanner
        image={termsBannerImg}
        title="Terms And Conditions"
        currentPage="Terms And Conditions"
      />

      <section className="terms-section">
        <div className="container">
          {termsData.map((item, index) => (
            <div className="terms-item" key={index}>
              <h2 className="terms-heading">{item.heading}</h2>
              <p className="terms-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsAndConditions;