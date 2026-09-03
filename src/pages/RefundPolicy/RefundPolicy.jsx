import React from "react";
import "./RefundPolicy.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import refundBannerImg from "../../assets/hero-banner.webp";

function RefundPolicy() {
  // Refund policy content - each item has a heading and its text.
  // Easy to update the wording later without touching the layout.
  const refundData = [
    {
      heading: "Overview",
      text: "At Madni Solar, we want you to be fully satisfied with every purchase. If you are not completely happy with a product, we offer a straightforward refund and return policy as outlined below.",
    },
    {
      heading: "Eligibility For Returns",
      text: "To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging. Please retain your receipt or proof of purchase as it is required to process any return or refund.",
    },
    {
      heading: "Return Window",
      text: "You have 7 calendar days from the date of delivery to request a return or exchange for most products. Requests submitted after this period may not be accepted.",
    },
    {
      heading: "Non-Refundable Items",
      text: "Certain items are not eligible for a refund, including products that have been installed, custom-made or specially ordered items, and products damaged due to misuse, accident, or improper handling by the customer.",
    },
    {
      heading: "How To Request A Return",
      text: "To start a return, please contact our support team through the contact page with your order number and the reason for the return. Our team will guide you through the next steps and provide any necessary return instructions.",
    },
    {
      heading: "Inspection And Approval",
      text: "Once we receive your returned item, it will be inspected to verify that it meets the eligibility conditions. We will notify you of the approval or rejection of your refund within a reasonable time after inspection.",
    },
    {
      heading: "Refund Processing",
      text: "Approved refunds will be processed to your original method of payment within 7-10 business days. The time it takes for the refund to appear in your account may vary depending on your bank or payment provider.",
    },
    {
      heading: "Shipping Costs",
      text: "Shipping and delivery charges are generally non-refundable. If a refund is approved, the cost of return shipping, if applicable, may be deducted from your refund unless the return is due to our error.",
    },
    {
      heading: "Warranty Claims",
      text: "Products covered by a manufacturer warranty are subject to the terms set by the respective manufacturer. Please contact us regarding any Warranty issue and we will assist you in claiming it.",
    },
    {
      heading: "Contact Us",
      text: "If you have any questions about our Refund Policy, please contact us through the contact page or by visiting our website https://Madnisolar.pk.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Page banner with title and breadcrumb */}
      <PageBanner
        image={refundBannerImg}
        title="Refund Policy"
        currentPage="Refund Policy"
      />

      <section className="refund-section">
        <div className="container">
          {refundData.map((item, index) => (
            <div className="refund-item" key={index}>
              <h2 className="refund-heading">{item.heading}</h2>
              <p className="refund-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RefundPolicy;