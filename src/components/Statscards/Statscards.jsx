import React from "react";
import "./Statscards.css";
import {
  FaTrophy,
  FaRocket,
  FaCertificate,
  FaChartLine,
  FaIndustry,
  FaSolarPanel,
  FaHandshake,
  FaHandHoldingUsd,
} from "react-icons/fa";

function StatsCards() {
  // Stats data - easy to update or load from an API later
  const statsData = [
    {
      icon: <FaTrophy />,
      value: "SINCE 2017",
      label: "Limitless Power",
    },
    {
      icon: <FaRocket />,
      value: "380MW",
      label: "Annual Production",
    },
    {
      icon: <FaCertificate />,
      value: "30 YEARS",
      label: "Solar Panel Warranty",
    },
    {
      icon: <FaChartLine />,
      value: "1000+",
      label: "Sales Monthly",
    },
    {
      icon: <FaIndustry />,
      value: "4,831 KTONNES",
      label: "Carbon Footprint Reduction",
    },
    {
      icon: <FaSolarPanel />,
      value: "1000+",
      label: "Site Covered",
    },
    {
      icon: <FaHandshake />,
      value: "100% HAPPY",
      label: "Clients",
    },
    {
      icon: <FaHandHoldingUsd />,
      value: "RS.571M CUSTOMER",
      label: "Savings Over PV System Lifetime",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon-wrapper">
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCards;