import React, { useState } from 'react';
import '../../Styles/Contact.css';

function Contact() {
  function TextInput({ type, label, pattern }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
      setValue(e.target.value);
    }

    return (
      <div className="input-container">
        <input type={type} value={value} onChange={handleChange} />
        <label className={value && 'filled'}>{label}</label>
      </div>
    );
  }
  return (
    <div className="Contact">
      <div className="contact-title">Contact us</div>
      <div className="ContactContainer">
        <div className="ContactForm">
          <form>
            <div className="contact-form">
              <TextInput label="Full Name *" type="text" />
              <TextInput label="Phone Number *" type="tel" required />
              <TextInput label="Email ID " type="email" />
              <textarea
                name="Message *"
                className="contact-message"
                placeholder="Enter your message here"
                required
              ></textarea>
              <button type="submit" className="send-button">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="ContactDetails">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
