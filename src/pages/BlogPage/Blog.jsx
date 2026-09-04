import React, { useState } from "react";
import "./Blog.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import ContactInfoBar from "../../components/Contactinfobar/Contactinfobar";
import BlogBanner from "../../assets/hero-banner.webp";
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaComments,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

import blogImg1 from "../../assets/solar-services/1.webp";
import blogImg2 from "../../assets/solar-services/2.webp";
import blogImg3 from "../../assets/solar-services/3.webp";
import blogImg4 from "../../assets/solar-services/4.webp";
import blogImg5 from "../../assets/solar-services/1.webp";
import blogImg6 from "../../assets/solar-services/2.webp";

const blogPosts = [
  {
    id: 1,
    image: blogImg1,
    category: "Solar Panels",
    title: "How to Choose the Right Solar Panel for Your Home in 2026",
    excerpt:
      "A practical guide to comparing wattage, efficiency, tier, and warranty so you can pick the best solar panel for your budget and roof.",
    date: "Mar 12, 2026",
    author: "Madni Solar",
    comments: 8,
    readTime: "6 min read",
  },
  {
    id: 2,
    image: blogImg2,
    category: "Inverters",
    title: "On-Grid vs. Hybrid Inverters: Which One Do You Actually Need?",
    excerpt:
      "Understand the difference between on-grid and hybrid inverters, including backup behaviour, sizing, and when each option makes financial sense.",
    date: "Feb 28, 2026",
    author: "Madni Solar",
    comments: 12,
    readTime: "8 min read",
  },
  {
    id: 3,
    image: blogImg3,
    category: "Batteries",
    title: "A Beginner’s Guide to Lithium Solar Batteries",
    excerpt:
      "Lithium batteries last longer and charge faster. Learn about capacity, cycles, BMS, and how to size a battery bank for your home.",
    date: "Feb 10, 2026",
    author: "Madni Solar",
    comments: 5,
    readTime: "7 min read",
  },
  {
    id: 4,
    image: blogImg4,
    category: "Net Metering",
    title: "Net Metering in Pakistan: How It Works and How to Apply",
    excerpt:
      "Step-by-step walkthrough of the WAPDA net metering application process, connection approvals, and billing benefits for solar users.",
    date: "Jan 22, 2026",
    author: "Madni Solar",
    comments: 21,
    readTime: "9 min read",
  },
  {
    id: 5,
    image: blogImg5,
    category: "Government Policy",
    title: "Solar Energy Policies to Watch in 2026",
    excerpt:
      "From tax incentives to net metering tariff revisions, here are the policy changes that could affect the cost of going solar this year.",
    date: "Jan 08, 2026",
    author: "Madni Solar",
    comments: 3,
    readTime: "5 min read",
  },
  {
    id: 6,
    image: blogImg6,
    category: "Maintenance",
    title: "7 Simple Ways to Keep Your Solar System Running Efficiently",
    excerpt:
      "Routine cleaning, shading checks, and inverter monitoring go a long way. Here are simple maintenance tips to protect your investment.",
    date: "Dec 18, 2025",
    author: "Madni Solar",
    comments: 9,
    readTime: "6 min read",
  },
];

const categories = [
  "All",
  "Solar Panels",
  "Inverters",
  "Batteries",
  "Net Metering",
  "Government Policy",
  "Maintenance",
];

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;
    const q = query.trim().toLowerCase();
    const matchQuery =
      q === "" ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchCategory && matchQuery;
  });

  return (
    <div>
      <Navbar />

      {/* ===== Page banner with breadcrumb ===== */}
      <PageBanner
        image={BlogBanner}
        title="Our Blog"
        currentPage="Blog"
      />

      {/* ===== Blog section ===== */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-tag flex justify-center">
            <span className="blog-tag-highlight">Blog</span>
            <span className="blog-tag-plain">News &amp; Articles</span>
          </div>

          <h2 className="blog-heading">
            Latest Insights On Solar Energy, Products &amp; Savings
          </h2>

          {/* ===== Filters / search ===== */}
          <div className="blog-toolbar">
            <div className="blog-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-category ${
                    activeCategory === cat ? "blog-category-active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="blog-search">
              <input
                type="text"
                className="blog-search-input"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <FaSearch className="blog-search-icon" />
            </div>
          </div>

          {/* ===== Blog grid ===== */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid grid">
              {filteredPosts.map((post) => (
                <article className="blog-card" key={post.id}>
                  <div className="blog-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                    />
                    <span className="blog-category-badge">{post.category}</span>
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-meta-item">
                        <FaCalendarAlt /> {post.date}
                      </span>
                      <span className="blog-meta-item">
                        <FaUser /> {post.author}
                      </span>
                      <span className="blog-meta-item">
                        <FaComments /> {post.comments}
                      </span>
                    </div>

                    <h3 className="blog-title line-clamp-3">{post.title}</h3>
                    <p className="blog-excerpt line-clamp-3">{post.excerpt}</p>

                    <div className="blog-card-footer">
                      <span className="blog-read-time">
                        <FaTag className="blog-read-icon" /> {post.readTime}
                      </span>
                      <button className="blog-btn">
                        Read More <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="blog-empty">
              No articles found. Try changing the category or search term.
            </p>
          )}
        </div>
      </section>

      <ContactInfoBar />
      <Footer />
    </div>
  );
}

export default BlogPage;