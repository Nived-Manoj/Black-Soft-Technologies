import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './stats.css';

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when stats item comes into view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    // Observe each stats item
    statsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div className="stats-container">
      <div
        className={`stats-item ${isVisible ? 'animate' : ''}`}
        style={{ '--index': 0 }}
        ref={(el) => (statsRef.current[0] = el)}
      >
        <h2 className="stats-number">
          <CountUp start={0} end={30} duration={5} separator="," />+
        </h2>
        <p className="stats-label">Happy Clients</p>
      </div>
      <div
        className={`stats-item ${isVisible ? 'animate' : ''}`}
        style={{ '--index': 1 }}
        ref={(el) => (statsRef.current[1] = el)}
      >
        <h2 className="stats-number">
          <CountUp start={0} end={50} duration={4} separator="," />+
        </h2>
        <p className="stats-label">Projects Completed</p>
      </div>
      <div
        className={`stats-item ${isVisible ? 'animate' : ''}`}
        style={{ '--index': 2 }}
        ref={(el) => (statsRef.current[2] = el)}
      >
        <h2 className="stats-number">
          <CountUp start={0} end={5000} duration={3} separator="," />+
        </h2>
        <p className="stats-label">Work Hours</p>
      </div>
    </div>
  );
}

export default StatsSection;
