import React, { useState } from "react";
import "./Loginregister.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageBanner from "../../components/Pagebanner/Pagebanner";
import BannerImg from "../../assets/hero-banner.webp";


// Simple Login + Register component (two side-by-side cards)
function LoginRegister() {
  // State for login form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // State for register form field
  const [email, setEmail] = useState("");

  // Handle login form submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { username, password, rememberMe });
  };

  // Handle register form submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted:", { email });
  };

  return (
    <div>
      <Navbar />
      <PageBanner image={BannerImg} title="My account" currentPage="Login / Register" />
      <div className="auth-container flex flex-wrap justify-center items-start gap-8">
      {/* LOGIN CARD */}
      <div className="auth-column">
        <h1 className="auth-title">Login</h1>

        <form className="auth-card" onSubmit={handleLoginSubmit}>
          {/* Username or email field */}
          <div className="form-group">
            <label htmlFor="username">
              Username or email address <span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password field with show/hide toggle */}
          <div className="form-group">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Remember me checkbox */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn-primary">
            LOG IN
          </button>

          {/* Lost password link */}
          <a href="#" className="lost-password-link">
            Forget password?
          </a>
        </form>
      </div>

      {/* REGISTER CARD */}
      <div className="auth-column">
        <h1 className="auth-title">Register</h1>

        <form className="auth-card" onSubmit={handleRegisterSubmit}>
          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email">
              Email address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Helper text */}
          <p className="helper-text">
            A link to set a new password will be sent to your email address.
          </p>

          {/* Submit button */}
          <button type="submit" className="btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default LoginRegister;