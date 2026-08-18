import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing.css';

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="brand">HR.GOV CIM</div>
        <nav>
          <Link to="/clients" className="btn">Go to Clients</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Client Information Management</h1>
          <p>Manage citizen and employee client records securely for your LGU.</p>
          <div className="hero-actions">
            <Link to="/clients" className="primary">Get Started</Link>
            <a href="#features" className="secondary">Features</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="card">CIM Dashboard Preview</div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>What you can do</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Centralized Records</h3>
            <p>Store and access client records in a single secure place.</p>
          </div>
          <div className="feature">
            <h3>Quick Search & Filters</h3>
            <p>Find clients fast with powerful search and filtering tools.</p>
          </div>
          <div className="feature">
            <h3>Role-Based Access</h3>
            <p>Control who sees and edits sensitive data.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <small>© {new Date().getFullYear()} HR.GOV CIM — Local Government Unit</small>
      </footer>
    </div>
  );
};

export default Landing;
