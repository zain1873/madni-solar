import React, { useState, useEffect } from "react";
import "./UserTestimonials.css";
import logo from "../../assets/project-logo.png";
import panelImage from "../../assets/hero-banner.webp";

function Testimonials() {
  // Testimonials data - easy to update or load from an API later.
  // Maximum 5 testimonials as requested.
  const testimonialsData = [
    {
      name: "Malik Ammar Mustafa",
      location: "Lahore, Pakistan",
      message:
        "They are doing perfect job. Totally satisfied with their quick & perfect services.",
    },
    {
      name: "Ayesha Khan",
      location: "Islamabad, Pakistan",
      message:
        "Great installation experience from start to finish. The team was professional and on time.",
    },
    {
      name: "Bilal Ahmed",
      location: "Faisalabad, Pakistan",
      message:
        "My electricity bill dropped a lot after installing the solar system. Highly recommended.",
    },
    {
      name: "Sana Tariq",
      location: "Multan, Pakistan",
      message:
        "Excellent customer support and fast response. They explained everything clearly before installation.",
    },
    {
      name: "Usman Raza",
      location: "Karachi, Pakistan",
      message:
        "Reliable products and honest pricing. Very happy with the whole SunSolar team.",
    },
  ];

  // Track which testimonial is currently showing
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto move to the next testimonial every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [testimonialsData.length]);

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="container testimonials-wrapper flex flex-wrap">
        {/* Left side image */}
        <div className="testimonials-image-col">
          <img
            src={panelImage}
            alt="Solar panels installed on a rooftop"
            className="testimonials-image"
          />
        </div>

        {/* Right side content */}
        <div className="testimonials-content-col">
          {/* Small tag above heading */}
          <div className="testimonials-tag flex">
            <span className="testimonials-tag-highlight">Madni Solar</span>
            <span className="testimonials-tag-plain">Testimonials</span>
          </div>

          {/* Heading */}
          <h2 className="testimonials-heading">
            What Our Customers Say About Our Services
          </h2>

          {/* Slider card - shows one testimonial at a time */}
          <div className="testimonial-card">
            <div className="testimonial-top flex items-center">
              <img src={logo} alt="SunSolar Logo" className="testimonial-logo" />
              <div className="testimonial-person">
                <h3 className="testimonial-name">{activeTestimonial.name}</h3>
                <p className="testimonial-location">
                  {activeTestimonial.location}
                </p>
              </div>
            </div>

            <div className="testimonial-divider"></div>

            <p className="testimonial-message">
              “{activeTestimonial.message}”
            </p>
          </div>

          {/* Dots to show slider position */}
          <div className="testimonial-dots flex">
            {testimonialsData.map((testimonial, index) => (
              <button
                key={index}
                className={`testimonial-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;