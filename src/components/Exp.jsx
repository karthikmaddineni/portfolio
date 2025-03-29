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
                <img src={exp1} alt="MOURI" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Java Developer</h3>
                <p class="">I was tasked with developing and optimizing backend services using Spring Boot and Hibernate. One of my first major projects was building a RESTful API for a financial application, where I had to ensure high performance and security.</p>
                <div class="experience-tags">
                    <span class="experience-tag">Java</span>
                    <span class="experience-tag">React</span>
                    <span class="experience-tag">Micro services </span>
                    <span class="experience-tag">CI/CD</span>
                    <span class="experience-tag">SDLC</span>
                </div>
            </div>
            
            <div class="experience-overlay">
                <h3 class="overlay-title">Java Developer</h3>
                <p class="overlay-description">Got involved in microservices architecture, breaking down a monolithic application into independent services, which improved scalability, contributed to CI/CD pipelines using Jenkins and containerized applications with Docker</p>
                <ul class="overlay-features">
                    <li>Developed the IoT-Based Smart Warehouse Management System, integrating IoT sensors with AWS IoT Core to enable real-time inventory tracking, reducing stock discrepancies by 30%.</li>
                    <li>Engineered a React.js dashboard with interactive charts and WebSocket-based updates, allowing warehouse managers to monitor stock movement seamlessly.</li>
                </ul>
            </div>
        </div>

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
