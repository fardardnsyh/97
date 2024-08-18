// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>AI-Powered Form Creation Tool</h1>
        <p>Effortlessly create dynamic, customized forms with the power of AI.</p>
        <Link to="/form-builder" className="btn-get-started">Get Started</Link>
      </header>

      <section className="features">
        <div className="feature">
          <h2>🔧 AI-Assisted Form Building</h2>
          <p>Generate form fields and validation rules based on the purpose of your form.</p>
        </div>
        <div className="feature">
          <h2>📐 Customizable Layouts</h2>
          <p>Easily adjust form layouts to match your branding and design preferences.</p>
        </div>
        <div className="feature">
          <h2>📊 Performance Analytics</h2>
          <p>Track form submissions, user interactions, and optimize performance with actionable insights.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 AI Form Builder. All rights reserved.</p>
        <p><Link to="/about">About</Link> | <Link to="/contact">Contact</Link></p>
      </footer>
    </div>
  );
};

export default Home;
