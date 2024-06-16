import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 bg-white rounded-lg shadow-lg">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 uppercase">About Us</h1>
      </header>

      <nav className="flex justify-around mb-8">
        <Link to="/" className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
          <h1>Home</h1>
        </Link>
        <Link to="/about" className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
          <h1>About</h1>
        </Link>
        <Link to="/contactUs" className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
          <h1>Contact Us</h1>
        </Link>
        <Link to="/loginNGO" className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
          <h1>NGO Login</h1>
        </Link>
        <Link to="/login" className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-300">
          <h1>School Login</h1>
        </Link>
      </nav>

      <section id="welcome" className="mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Welcome to VOPA</h2>
        <p className="text-lg leading-8 mb-6">VOPA (Vowels of People Association) is dedicated to transforming education for underserved school children through innovation and empowerment. Our mission is to provide joyous and meaningful learning experiences that foster self-respect and equal opportunities for every child.</p>
      </section>

      <section id="mission" className="mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
        <p className="text-lg leading-8 mb-6">At VOPA, we believe in the transformative power of education to break barriers and create a brighter future. Our mission is to revolutionize literacy assessment by harnessing technology, ensuring every child receives personalized support for academic success.</p>
      </section>

      <section id="what-we-do" className="mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">What We Do</h2>
        <p className="text-lg leading-8 mb-6">Through our cutting-edge application, we empower teachers to assess students' literacy skills efficiently and accurately. Our platform enables educators to evaluate reading comprehension, track progress, and tailor educational strategies to individual needs.</p>
      </section>

      <section id="why-choose" className="mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Why Choose VOPA?</h2>
        <ul className="text-lg leading-8 mb-6 list-disc pl-5">

          <li><strong>Innovation:</strong> We leverage the latest technology to digitize assessments, saving time and enhancing accuracy.</li>
          <li><strong>Impact:</strong> Our solutions are designed to close educational gaps and promote inclusivity, ensuring no child is left behind.</li>
          <li><strong>Community-Centered:</strong> We collaborate with educators, parents, and communities to create a supportive learning environment.</li>
        </ul>
      </section>

      <section id="join-us" className="mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Join Us in Empowering Education</h2>
        <p className="text-lg leading-8 mb-6">Join VOPA in our mission to redefine education for underserved communities. Together, we can create a world where every child has access to quality education and the opportunity to reach their full potential.</p>
      </section>

      <section id="our-team" className="mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Team</h2>
        <div className="flex flex-wrap justify-around">
          <div className="text-center w-full sm:w-1/2 lg:w-1/3 mb-6 p-5 bg-purple-50 rounded-lg shadow-md">
            <img src="/team-member1.jpg" alt="Team Member 1" className="w-36 h-36 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Person 1</h3>
            <p className="text-lg leading-6">Description of person 1</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/3 mb-6 p-5 bg-purple-50 rounded-lg shadow-md">
            <img src="/team-member2.jpg" alt="Team Member 2" className="w-36 h-36 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Person 2</h3>
            <p className="text-lg leading-6">Description of person 2</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/3 mb-6 p-5 bg-purple-50 rounded-lg shadow-md">
            <img src="/team-member3.jpg" alt="Team Member 3" className="w-36 h-36 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Person 3</h3>
            <p className="text-lg leading-6">Description of person 3</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-10 py-5 bg-gray-800 text-white">
        <p>&copy; 2024 VOPA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;