import React from 'react'
import './About.css'
import myImage from "../../assets/intro.jpg"; 
const About = () => {
    return (
    <section id="about" class="animate-in">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
            <div class="about-image">
                <img src={myImage} alt="Karthik Maddineni"/>
            </div>
            <div class="about-text">
                <p>Hello! I'm Karthik Maddineni, newly graduated and a passionate full-stack developer with over 3 years of experience in creating beautiful, functional, and user-centered digital experiences.</p>
                <p>My approach to design combines creativity with functionality, focusing on clean aesthetics and intuitive navigation to enhance user engagement and satisfaction.</p>
                <p>When I'm not coding or developing, you can find me exploring new technologies, contributing to open-source projects, or hiking in the mountains.</p>
                <div class="skills">
                    <span class="skill">HTML5</span>
                    <span class="skill">CSS3</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">Python</span>
                    <span class="skill">Java Springboot</span>
                    <span class="skill">React JS</span>
                    <span class="skill">Node JS</span>
                    <span class="skill">Express JS</span>
                    <span class="skill">SQL and PostgreSQL</span>
                    <span class="skill">Git & Github</span>
                    <span class="skill">Mongo DB</span>
                    <span class="skill">Basic AWS</span>
                    <span class="skill">Terraform</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
