import React from "react";
import "./Privacypolicy.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import privacyBannerImg from "../../assets/hero-banner.webp";

function PrivacyPolicy() {
  // Privacy policy content - each item has a heading and its text.
  // Easy to update the wording later without touching the layout.
  const policyData = [
    {
      heading: "Who We Are",
      text: "Our website address is: https://Madnisolar.pk.",
    },
    {
      heading: "Comments",
      text: "When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.",
    },
    {
      heading: "Media",
      text: "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.",
    },
    {
      heading: "Cookies",
      text: "If you leave a comment on our site you may opt in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.",
    },
    {
      heading: "Embedded Content From Other Websites",
      text: "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.",
    },
    {
      heading: "Who We Share Your Data With",
      text: "If you request a password reset, your IP address will be included in the reset email.",
    },
    {
      heading: "How Long We Retain Your Data",
      text: "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.",
    },
    {
      heading: "What Rights You Have Over Your Data",
      text: "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you.",
    },
    {
      heading: "Where Your Data Is Sent",
      text: "Visitor comments may be checked through an automated spam detection service.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Page banner with title and breadcrumb */}
      <PageBanner
        image={privacyBannerImg}
        title="Privacy Policy"
        currentPage="Privacy Policy"
      />

      <section className="privacy-section">
        <div className="container">
          {policyData.map((item, index) => (
            <div className="privacy-item" key={index}>
              <h2 className="privacy-heading">{item.heading}</h2>
              <p className="privacy-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;