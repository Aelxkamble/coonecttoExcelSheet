import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    sendUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      if (response.status === 200) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h3>We’re Listening – Share Your Thoughts</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "8px",
        }}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        value={formData.phone}
        onChange={handleChange}
        required
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "8px",
        }}
      />
      <label style={{ display: "block", marginBottom: "10px" }}>
        <input
          type="checkbox"
          name="sendUpdates"
          checked={formData.sendUpdates}
          onChange={handleChange}
        />
        Send Updates On WhatsApp
      </label>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "linear-gradient(to right, #f953c6, #b91d73)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        FREE QUOTE
      </button>
    </form>
  );
};

export default FeedbackForm;
