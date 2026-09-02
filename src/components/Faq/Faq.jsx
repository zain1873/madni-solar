import React, { useState } from "react";
import "./Faq.css";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How much can I save on my electricity bill with solar?",
    answer:
      "With a correctly sized system, most homeowners and businesses reduce their electricity bills by 60% to 80%. On-grid systems with net billing typically pay for themselves within 3 to 5 years, and the savings continue for the 25+ year lifespan of the panels.",
  },
  {
    id: 2,
    question: "How long does a solar installation take?",
    answer:
      "For a typical home system, the complete process takes 2 to 4 weeks. This includes a free site survey and design, equipment procurement, installation (usually 1 to 3 days), and final commissioning. Larger commercial and industrial projects may take longer depending on the scope.",
  },
  {
    id: 3,
    question: "Do I really need net billing, and how does it work?",
    answer:
      "Net billing lets you feed surplus energy into the grid and receive a credit, which is deducted from the units you consume at night. We handle the full WAPDA-approved net billing application for you, from paperwork to the final meter and approval.",
  },
  {
    id: 4,
    question: "Can I buy solar panels on installments?",
    answer:
      "Yes. We partner with leading banks and leasing companies to offer installment plans on solar systems. The application is submitted through the bank and final approval and terms are subject to the bank's assessment and policies.",
  },
  {
    id: 5,
    question: "What brands and quality of equipment do you supply?",
    answer:
      "We only use Tier-1, internationally certified solar panels, inverters, batteries, and cables. Our systems come with panel performance warranties of up to 30 years and a workmanship warranty backed by our dedicated after-sales team.",
  },
  {
    id: 6,
    question: "What is the warranty and after-sales support?",
    answer:
      "Every installation includes a full workmanship warranty plus manufacturer warranties on panels and inverters. We offer responsive after-sales support, regular maintenance checks, and quick on-site service whenever you need it - even after installation is complete.",
  },
];

function Faq() {
  // Only one item is expanded at a time (null = all closed)
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        {/* ===== Section header (matches theme pattern) ===== */}
        <div className="faq-header">
          <div className="faq-tag flex">
            <span className="faq-tag-highlight">FAQ</span>
            <span className="faq-tag-plain">Common Questions</span>
          </div>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtext">
            Can't find what you're looking for? Get in touch with our team and
            we'll help you go solar with confidence.
          </p>
        </div>

        {/* ===== Accordion list ===== */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={item.id}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-icon">
                    <FaQuestionCircle />
                  </span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-chevron">
                    <FaChevronDown />
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq-answer ${isOpen ? "open" : ""}`}
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;