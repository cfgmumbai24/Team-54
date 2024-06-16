import React from 'react';

const aboutus = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center mb-4">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best service possible with a focus on
            customer satisfaction. We strive to bring innovation and excellence
            to everything we do.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Team</h2>
          <p>
            We have a dedicated team of professionals who are passionate about
            their work and committed to delivering the best results. Meet our
            team of experts who make everything possible.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need further information, feel free to
            reach out to us at any time. We are here to help you and ensure your
            experience with us is a positive one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default aboutus;