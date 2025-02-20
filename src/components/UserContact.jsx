import React, { useState } from "react";
import WhatsApp from '../images/contact/WhatsappBlue.png'
import TelegramBlue from '../images/contact/TelegramBlue.png'
import BookMeetingBlue from '../images/contact/BookMeetingBlue.png'
import MailBlue from '../images/contact/MailBlue.png'

const UserContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="user-contact-section">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Get Estimate</h2>
          <p className="form-description">
            Let’s create something extraordinary. Get an estimate with
            Blockchain Technologies today!
          </p>

          <div className="grid-container">
            <input
              id="name"
              className="input-field"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              id="email"
              className="input-field"
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id="phone"
              className="input-field"
              placeholder="Phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              id="budget"
              className="select-field"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select Budget</option>
              <option value="$1000 - $5000">$1000 - $5000</option>
              <option value="$5000 - $10,000">$5000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
          </div>

          <textarea
            id="message"
            className="textarea-field"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="submit-btn">
            <button type="submit">Contact</button>
          </div>
        </form>
      </div>

      <div className="contact-info">
        {/* WhatsApp */}
        <a href="https://wa.me/919607128284" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img alt="WhatsApp" src={WhatsApp} />
          <div className="contact-text">
            <h3>WhatsApp Us</h3>
            <p>+91 9607128284</p>
          </div>
        </a>

        {/* Telegram */}
        <a href="https://t.me/me_kirannn" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img alt="Telegram" src={TelegramBlue} />
          <div className="contact-text">
            <h3>Telegram Us</h3>
            <p>@me_kirannn</p>
          </div>
        </a>

        {/* Book a Meeting */}
        <a href="https://calendly.com/blockchain-technologies" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img alt="BookMeeting" src={BookMeetingBlue} />
          <div className="contact-text">
            <h3>Book Meeting Now</h3>
            <p>Blockchain-technologies</p>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:kirantirmale2362001@gmail.com" className="contact-item">
          <img alt="Mail" src={MailBlue} />
          <div className="contact-text">
            <h3>Drop an Email</h3>
            <p>kirantirmale2362001@gmail.com</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default UserContact;
