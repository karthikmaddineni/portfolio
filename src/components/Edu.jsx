import React from 'react';
import "./Edu.css";
import ud from "../../assets/image.ico"; 
import snist from "../../assets/snist.png"; 
const Edu = () => {
return (
    <section id="education" class="animate-in">
    <h2 class="section-title">My Education</h2>
    <div class="education-grid">
        <div class="education-card">
            <div class="education-image">
                <img src={ud}alt="University" height={20} width={20}/>
            </div>
            <div class="education-content">
                <h3 class="education-title">Graduate Degree</h3>
                <p class="">Graduate in Computer Science with focus on web development and software engineering.</p>
                <div class="education-tags">
                    <span class="education-tag">2023-2025</span>
                    <span class="education-tag">3.8 GPA</span>
                    
                </div>
            </div>
            
            <div class="education-overlay">
                <h3 class="overlay-title">Computer Science Degree</h3>
                <p class="overlay-description">Earned a Graduate Degree in Computer Science with honors, specializing in machine learning methodologies and advanced data structures.</p>
                <ul class="overlay-features">
                    <li>Advanced coursework in algorithms and data structures</li>
                    <li>Senior project: Developed a community marketplace application</li>
                    
                </ul>
                
            </div>
        </div>
        
        <div class="education-card">
            <div class="education-image">
                <img src={snist} alt="UnderGrad" />
            </div>
            <div class="education-content">
                <h3 class="education-title">Under Graduate Degree</h3>
                <p class="">Bachelor in Information Technology with focus on OOPS in java, web development, computer networks , system design and software engineering.</p>
                <div class="education-tags">
                    <span class="education-tag">2017-2023</span>
                    <span class="education-tag">7.6 GPA</span>
                    
                </div>
            </div>
            
            <div class="education-overlay">
                <h3 class="overlay-title">Information Technology Degree</h3>
                <p class="overlay-description">Earned a Bachelor of Science in Computer Science with honors, specializing in modern web technologies and application development methodologies.</p>
                <ul class="overlay-features">
                    <li>Advanced coursework in java, system design and computer networks</li>
                    <li>Senior project: Developed an hand gesture model using openCV</li>
                    <li>Teaching assistant in System Design for freshmans</li>
                </ul>
            </div>
        </div>
    </div>
</section>
)
}

export default Edu
