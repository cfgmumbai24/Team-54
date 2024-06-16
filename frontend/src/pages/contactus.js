import React from 'react';
import ContactForm from '../components/ContactForm';

const contactus = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center mb-4">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <h2>Get in Touch</h2>
          <p>
            We would love to hear from you! Feel free to reach out to us through any of the following methods:
          </p>
          <ul className="list-unstyled">
            <li>
              <a href="contact.vopa@gmail.com" className="text-decoration-none">contact.vopa@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Contact Form</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default contactus;