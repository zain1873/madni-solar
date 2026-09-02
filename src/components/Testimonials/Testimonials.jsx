import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Ahmad Raza",
    role: "Homeowner",
    location: "Lahore",
    rating: 5,
    quote:
      "Madni Solar installed a complete 10kW system at my home. The team was professional, the installation was spotless, and my electricity bill has dropped by more than 70%. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Factory Owner",
    location: "Karachi",
    rating: 5,
    quote:
      "They designed and installed a solar solution for our factory. Tier-1 panels and excellent after-sales support. The savings are real, and the whole process was smooth from start to finish.",
  },
  {
    id: 3,
    name: "Muhammad Usman",
    role: "Agricultural Farm Owner",
    location: "Multan",
    rating: 5,
    quote:
      "From consulting to net billing support, Madni Solar handled everything for our farm. The system powers all our tube wells reliably. Truly a trustworthy partner for clean energy.",
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Business Owner",
    location: "Islamabad",
    rating: 5,
    quote:
      "Outstanding service! The team guided us through the right panel and inverter choice for our budget and later helped with grid connection. Our monthly energy cost is now a fraction of what it was.",
  },
];

function Testimonials() {
  // Track the currently visible testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index) => {
    const count = testimonialsData.length;
    // Wrap around so the slider is seamless
    setActiveIndex(((index % count) + count) % count);
  };

  const nextSlide = () => goToSlide(activeIndex + 1);
  const prevSlide = () => goToSlide(activeIndex - 1);

  // Auto-advance the slider every 3 seconds (pauses while hovering)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container testimonials-container">
        {/* ===== Section header (matches theme pattern) ===== */}
        <div className="testimonials-header">
          <div className="testimonials-tag flex">
            <span className="testimonials-tag-highlight">Testimonials</span>
            <span className="testimonials-tag-plain">What Our Clients Say</span>
          </div>
          <h2 className="testimonials-heading">
            Trusted by Homeowners &amp; Businesses
          </h2>
          <p className="testimonials-subtext">
            Real stories from clients across Pakistan who switched to clean,
            affordable solar energy with Madni Solar.
          </p>
        </div>

        {/* ===== Slider ===== */}
        <div
          className="testimonials-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slide track */}
          <div className="testimonials-viewport">
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonialsData.map((t) => (
                <article className="testimonial-card" key={t.id}>
                  {/* Quote mark */}
                  <span className="testimonial-quote-icon">
                    <FaQuoteLeft />
                  </span>

                  {/* Star rating */}
                  <div className="testimonial-stars flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="testimonial-star" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="testimonial-quote">“{t.quote}”</p>

                  {/* Author */}
                  <div className="testimonial-author flex items-center">
                    <span className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </span>
                    <div className="testimonial-meta">
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">
                        {t.role} - {t.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-prev"
            aria-label="Previous testimonial"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-next"
            aria-label="Next testimonial"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* ===== Dots navigation ===== */}
        <div className="testimonials-dots flex">
          {testimonialsData.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={`testimonial-dot ${
                i === activeIndex ? "active" : ""
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;