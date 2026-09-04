import React from "react";
import "./Projectshowcase.css";
import mainImg from "../../assets/hero-banner.webp";
import overlayImg from "../../assets/hero-banner.webp";

// Data for the 3 projects. Each project has an eyebrow label, a title,
// a description (with bold highlights), and a specs list (with bold lead-in text).
const projects = [
  {
    id: "sun-solar-al-fateh",
    eyebrow: "Madni Solar",
    title: "Al-Fateh Cold Store Faisalabad (180kW Ongrid System)",
    description: (
      <>
        madni solar successfully designed and installed a{" "}
        <strong>180kW on-grid solar system</strong> for{" "}
        <strong>Al-Fateh Cold Store in Faisalabad</strong>. This
        high-performance solar solution provides a reliable, cost-effective,
        and sustainable power source, significantly reducing electricity
        expenses and ensuring uninterrupted operations for the cold storage
        facility.
      </>
    ),
    specsHeading: "System Specifications",
    specsIntro: "To achieve maximum power output and efficiency, the system includes:",
    specs: [
      {
        bold: "333 x JA Solar 540W Panels",
        text: " – High-efficiency panels ensuring optimal energy generation and long-term performance.",
      },
      {
        bold: "2 x Solis 80kW On-Grid Inverters",
        text: " – Deliver smooth, efficient power conversion with advanced monitoring and smart features.",
      },
    ],
  },
  {
    id: "sun-solar-green-valley",
    eyebrow: "Madni Solar",
    title: "Green Valley Textiles Lahore (250kW Ongrid System)",
    description: (
      <>
        madni solar successfully designed and installed a{" "}
        <strong>250kW on-grid solar system</strong> for{" "}
        <strong>Green Valley Textiles in Lahore</strong>. This
        high-performance solar solution provides a reliable, cost-effective,
        and sustainable power source, significantly reducing electricity
        expenses and ensuring uninterrupted operations for the production
        facility.
      </>
    ),
    specsHeading: "System Specifications",
    specsIntro: "To achieve maximum power output and efficiency, the system includes:",
    specs: [
      {
        bold: "463 x JA Solar 540W Panels",
        text: " – High-efficiency panels ensuring optimal energy generation and long-term performance.",
      },
      {
        bold: "3 x Solis 80kW On-Grid Inverters",
        text: " – Deliver smooth, efficient power conversion with advanced monitoring and smart features.",
      },
    ],
  },
  {
    id: "sun-solar-city-mall",
    eyebrow: "Madni Solar",
    title: "City Mall Multan (120kW Ongrid System)",
    description: (
      <>
        madni solar successfully designed and installed a{" "}
        <strong>120kW on-grid solar system</strong> for{" "}
        <strong>City Mall in Multan</strong>. This high-performance solar
        solution provides a reliable, cost-effective, and sustainable power
        source, significantly reducing electricity expenses and ensuring
        uninterrupted operations for the retail facility.
      </>
    ),
    specsHeading: "System Specifications",
    specsIntro: "To achieve maximum power output and efficiency, the system includes:",
    specs: [
      {
        bold: "222 x JA Solar 540W Panels",
        text: " – High-efficiency panels ensuring optimal energy generation and long-term performance.",
      },
      {
        bold: "2 x Solis 60kW On-Grid Inverters",
        text: " – Deliver smooth, efficient power conversion with advanced monitoring and smart features.",
      },
    ],
  },
];

// Simple presentational component that shows a project summary
// on the left and a full-height image on the right, repeated for
// each project in the projects array.
function ProjectShowcase() {
  return (
    <>
      {projects.map((project) => (
        <section key={project.id} className="showcase flex">
          {/* Left column: text content */}
          <div className="showcase__content flex flex-col justify-center">
            <p className="showcase__eyebrow">{project.eyebrow}</p>

            <h2 className="showcase__title">{project.title}</h2>

            <p className="showcase__description">{project.description}</p>

            <h3 className="showcase__specs-heading">{project.specsHeading}</h3>
            <p className="showcase__description">{project.specsIntro}</p>

            <ul className="showcase__list">
              {project.specs.map((spec) => (
                <li key={spec.bold} className="showcase__list-item">
                  <strong>{spec.bold}</strong>
                  {spec.text}
                </li>
              ))}
            </ul>

            <button type="button" className="showcase__button">
              View Project
            </button>
          </div>

          {/* Right column: image */}
          <div className="showcase__image-wrap">
            <img
              src={mainImg}
              alt="Hiker climbing a red rock canyon"
              className="showcase__image"
            />

            {/* Overlay image sitting on top of the main image */}
            <img
              src={overlayImg}
              alt="Website preview overlay"
              className="showcase__overlay-image"
            />

            <span className="showcase__badge" aria-hidden="true"></span>
          </div>
        </section>
      ))}
    </>
  );
}

export default ProjectShowcase;