import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import solarPanelBrands from "../../data/solarPanelBrands";
import "./SolarPanelBrandPage.css";

// ===== Default banner (used when a brand has no image below) =====
import heroBanner from "../../assets/hero-banner.webp";

// ===== Per-brand banner images =====
// Jab kisi brand ki image mil jaye, bas 2 kaam karo:
// 1. Yahan ek naya import add karo
// 2. Neeche brandImageMap mein us brand ka slug: importedImage add karo
// import jaSolarImg from "../../assets/brands/ja-solar.webp";
// import longiImg from "../../assets/brands/longi.webp";

const brandImageMap = {
  // "ja-solar": jaSolarImg,
  // "longi": longiImg,
  // ... jaise-jaise images milen, yahan entry add karte jao
};

function SolarPanelBrandPage() {
  // URL se brandSlug nikalo, e.g. /solar-panels/ja-solar -> "ja-solar"
  const { brandSlug } = useParams();

  // Data file mein matching brand dhoondo
  const brand = solarPanelBrands.find((b) => b.slug === brandSlug);

  // Agar brand na mile (galat slug), simple message dikhao
  if (!brand) {
    return (
      <div>
        <Navbar />
        <div className="brand-not-found">
          <p>Brand not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Is brand ki image map mein mile tou wahi use karo, warna default heroBanner
  const bannerImage = brandImageMap[brand.slug] || heroBanner;

  return (
    <div>
      <Navbar />

      <PageBanner image={bannerImage} title={brand.name} currentPage={brand.name} />

      {/* Brand ka content - abhi placeholder hai, baad mein products/specs add karo */}
      <section className="brand-content">
        <div className="container">
          <h2 className="brand-content-title">{brand.name}</h2>
          <p className="brand-content-description">
            {brand.description || "Details coming soon."}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SolarPanelBrandPage;