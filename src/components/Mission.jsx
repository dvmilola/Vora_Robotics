import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Mission = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-bg"></div>
      <div className="container">
        <div className="mission-content">
          <div className="mission-header">
            <h2 className="mission-title">OUR MISSION</h2>
            <div className="mission-underline"></div>
          </div>
          <div className="mission-text">
            <p>
              To empower Africa with affordable, innovative technology that solves real-world problems, 
              enhances productivity, and transforms industries while promoting sustainability and 
              equipping the next generation with the skills to lead in a tech-driven future.
            </p>
          </div>
          <div className="mission-cta">
            <Link to="/about" className="mission-btn">
              <span className="btn-text">Learn more about our mission</span>
              <Icon icon="mdi:arrow-right" width="16" height="16" className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
