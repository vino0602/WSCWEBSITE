import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    exploringWSCFor: '',
    heardAboutUs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal(); 
  };

  return (
    <div className="contact-form">
      <span className="close-icon" onClick={closeModal}>×</span>
      <h2>2000+ Seniors' Sons & Daughters Have Chosen WSC. Join Us Today!</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        {/* Full Name */}
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        {/* Mobile Number */}
        <label>
          Mobile Number
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Phone Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        {/* Email */}
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        {/* Exploring WSC For */}
        <label>
          Exploring WSC For
          <select
            name="exploringWSCFor"
            value={formData.exploringWSCFor}
            onChange={handleChange}
            required
          >
            <option value="">Exploring WSC for?</option>
            {['Myself or spouse', 'For my parents or an elder'].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        {/* How Did You Hear About Us */}
        <label>
          How Did You Hear About Us?
          <select
            name="heardAboutUs"
            value={formData.heardAboutUs}
            onChange={handleChange}
            required
          >
            <option value="">How did you hear about us?</option>
            {[
              'Search Engine (Google, Bing, etc.)',
              'Social Media (FB, Insta, etc.)',
              'YouTube',
              'Friends or Family',
              'Others',
            ].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
