import React from 'react';
import "./Edu.css";
import ud from "../../assets/image.ico"; 
import snist from "../../assets/snist.png"; 
const Edu = () => {
return (
   <section id="education" className="animate-in">
      <h2 className="section-title">My Education</h2>
      <div className="education-grid">
        <div className="education-card">
          <div className="education-image">
            <img src={ud} alt="University" height={20} width={20} />
          </div>
          <div className="education-content">
            <h3 className="education-title">Graduate Degree</h3>
            <p>Graduate in Computer Science with focus on web development and software engineering.</p>
            <div className="education-tags">
              <span className="education-tag">2023-2025</span>
              <span className="education-tag">3.8 GPA</span>
            </div>
          </div>

          <div className="education-overlay">
            <h3 className="overlay-title">Computer Science Degree</h3>
            <p className="overlay-description">
              Earned a Graduate Degree in Computer Science with honors, specializing in machine learning methodologies and advanced data structures.
            </p>
            <ul className="overlay-features">
              <li>Advanced coursework in algorithms and data structures</li>
              <li>Senior project: Developed a community marketplace application</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edu
