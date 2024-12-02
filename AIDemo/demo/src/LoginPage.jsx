import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Log In Successful!");
    navigate("/"); // Redirect to the main page
  };

  return (
    <div className="login-page-container">
      <h1>Log Ind</h1>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Kodeord"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Log In
        </button>
      </form>
      {/* Tilbage Button */}
      <button className="tilbage-button" onClick={() => navigate("/")}>
        Tilbage
      </button>
    </div>
  );
};

export default LoginPage;
