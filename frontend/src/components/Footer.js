import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      alert('Subscribed successfully!');
      setEmail(''); // Clear input after successful submission
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <footer className="text-center bg-body-tertiary text-dark">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline btn-floating m-1 btn-outline-dark" target="_blank" href="https://www.facebook.com/contact.vopa" role="button">
            <FaFacebookF />
          </a>
          <a className="btn btn-outline btn-floating m-1 btn-outline-dark" target="_blank" href="https://vopa.in/" role="button">
            <FaGoogle />
          </a>
          <a className="btn btn-outline btn-floating m-1 btn-outline-dark" target="_blank" href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fvopa.vschool%2F&is_from_rle" role="button">
            <FaInstagram />
          </a>
          <a className="btn btn-outline btn-floating m-1 btn-outline-dark" target="_blank" href="https://www.youtube.com/channel/UCjLnfmyuCWK5CXD1n1XD6ig" role="button">
            <FaYoutube />
          </a>
        </section>
        <section className="mb-4">
          <p className="text-dark">
            VOPA strives to provide Joyous, meaningful education with
            self-respect and equal opportunity to underserved school children.
          </p>
        </section>
      </div>

      
    </footer>
  );
};

export default Footer;