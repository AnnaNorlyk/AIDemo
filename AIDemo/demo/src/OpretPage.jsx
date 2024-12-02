import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OpretPage.css"; // Import the CSS file

const OpretPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="opret-page-container">
      <h1>Opret Bruger</h1>
      <form onSubmit={handleSubmit} className="opret-form">
        <input
          type="text"
          name="firstName"
          placeholder="Fornavn"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Efternavn"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Kodeord"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <button className="tilbage-button" onClick={() => navigate("/")}>
        Tilbage
      </button>
    </div>
  );
};

export default OpretPage;
