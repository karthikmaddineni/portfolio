import React from 'react'
import "./Exp.css"
import exp1 from "../../assets/LOGO_EduSkills.png"; 
const Exp = () => {
return (
    <section id="experience" class="animate-in">
    <h2 class="section-title">My Experience</h2>
    <div class="experience-grid">
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp1} alt="EDUSKILLS" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">AI-ML Intern Engineer(AWS sponsered)</h3>
                <p class="">Worked on various types of data to make sure model gets trained well by using EC2, S3 buckets, RDS from AWS.</p>
                <div class="experience-tags">
                    <span class="experience-tag">Python</span>
                    <span class="experience-tag">OpenCV</span>
                    <span class="experience-tag">Machine Learning</span>
                    <span class="experience-tag">Deep Learning</span>
                    <span class="experience-tag">AWS</span>
                </div>
            </div>
            
            <div class="experience-overlay">
                <h3 class="overlay-title">AI-ML Intern Engineer</h3>
                <p class="overlay-description">Led frontend development for a team of five engineers, implementing modern UI solutions and establishing best practices for code quality and application architecture.</p>
                <ul class="overlay-features">
                    <li>Reduced application load time by 40% through code optimization</li>
                    <li>Mentored co-junior developers and conducted code reviews</li>
                </ul>
            </div>
        </div>
    </div>
</section>
)
}

export default Exp
