import React, { useState } from "react";
import './ContactUs.css';  
import OSMapComponent from "./OSMapComponent";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
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
    console.log(formData);
  };


  return (
    <>
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <div className="contact-details">
          <p><strong>Monday to Saturday</strong></p>
          <p><strong>Phone:</strong> +91 97890 86627</p>
          <p><strong>Email:</strong> info@westayclose.in</p>
          <p><strong>Address:</strong> LIVMO PVT. LTD., TNRise, 1st Floor, TANSI Building, Thir. Vi. Ka Industrial Estate, Guindy, Chennai, TN, INDIA - 600 032</p>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
      </div>


      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Subject?</label>
            <div>
              <input
                type="radio"
                name="subject"
                value="General Inquiry"
                onChange={handleChange}
              />
              <label>General Inquiry</label>
              <input
                type="radio"
                name="subject"
                value="Know more"
                onChange={handleChange}
              />
              <label>Know more</label>
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <OSMapComponent/>
    </>
  );
};


export default ContactUs;