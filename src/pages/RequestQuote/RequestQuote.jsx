import React, { useState } from "react";
import "./RequestQuote.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import QuoteBanner from "../../assets/hero-banner.webp";
import PageBanner from "../../components/Pagebanner/Pagebanner";


// Simple "Send the request" quote form component
function SendRequest() {
  // State for each form field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [createAccount, setCreateAccount] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request submitted:", {
      firstName,
      lastName,
      phone,
      email,
      message,
      createAccount,
    });
  };

  return (
    <div>
    <Navbar/>
        <PageBanner
        image={QuoteBanner}
        title="Request a Quote"
        currentPage="Request a Quote"
      />

    <div className="request-container flex justify-start">
      <div className="request-column">
        <h1 className="request-title">Send the request</h1>

        <form className="request-form" onSubmit={handleSubmit}>
          {/* First Name field */}
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name field */}
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Phone field */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Email field (optional) */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message field (optional) */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Create an account checkbox */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="createAccount"
              checked={createAccount}
              onChange={(e) => setCreateAccount(e.target.checked)}
            />
            <label htmlFor="createAccount">Create an account?</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn-primary">
            SEND YOUR REQUEST
          </button>
        </form>
      </div>
    </div>

    <Footer/>
    </div>
  );
}

export default SendRequest;