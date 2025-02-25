import React, { useState } from "react";
import WhatsApp from '../images/contact/WhatsappBlue.png';
import TelegramBlue from '../images/contact/TelegramBlue.png';
import BookMeetingBlue from '../images/contact/BookMeetingBlue.png';
import MailBlue from '../images/contact/MailBlue.png';

const UserContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://mern-app-api-xi.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
      } else {
        setResponseMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Failed to send message. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <section className="user-contact-section">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Get Estimate</h2>
          <p className="form-description">
            Let’s create something extraordinary. Get an estimate with Blockchain Technologies today!
          </p>

          <div className="grid-container">
            <input
              id="name"
              className="input-field"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              className="input-field"
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              id="phone"
              className="input-field"
              placeholder="Phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              id="budget"
              className="select-field"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select Budget</option>
              <option value="$100 - $1000">$100 - $1000</option>
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
            required
          />

          <div className="submit-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Contact"}
            </button>
          </div>

          {responseMessage && <p className="response-message">{responseMessage}</p>}
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
