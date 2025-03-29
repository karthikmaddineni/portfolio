import React from 'react'
import './Pro.css'
import pro from "../../assets/project.png"; 
const Pro = () => {
return (
    <section id="projects" class="animate-in">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="TODO" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">To-Do App with Auth and Team Task Management</h3>
                    <p class="">This To-Do App is a full-stack project built with Node.js for the backend and MongoDB for cloud storage.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">Node</span>
                        <span class="project-tag">Express</span>
                        <span class="project-tag">EJS</span>
                        <span class="project-tag">Mongo DB</span>
                        <span class="project-tag">HTML,CSS,JS</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Task Management</h3>
                    <p class="overlay-description">It provides a secure and efficient task management system with CRUD operations and user authentication using sessions. </p>
                    <ul class="overlay-features">
                        <li>Login and sign-up functionality with session-based authentication.</li>


                        <li>CSURF protection is implemented for enhanced security against CSRF attacks.</li>
                        <li>Users can create team tasks and add members.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/karthikmaddineni/task-manager" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="hand" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Hand Gesture Recognition</h3>
                    <p class="">Implemented real-time hand gesture recognition using OpenCV and Python.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">OpenCV</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Hand Gesture Recognition</h3>
                    <p class="overlay-description">Hand Gesture Recognition using OpenCV is a computer vision technique that enables machines to interpret human hand gestures in real time. </p>
                    <ul class="overlay-features">
                        <li>Utilized contour detection (cv2.findContours()) to identify hand shapes and gestures.</li>
                        <li>Recognized different gestures based on finger positions and movement.</li>
                        <li>Desgined just to show the count of fingers</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/karthikmaddineni/hand-guesture" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="Calculator" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Basic Calculator</h3>
                    <p class="">A fully responsive with shopping cart functionality, product filters, and payment integration.</p>
                    <br></br>
                    <div class="project-tags">
                        <span class="project-tag">HTML5</span>
                        <span class="project-tag">CSS3</span>
                        <span class="project-tag">JavaScript</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Basic Calculator</h3>
                    <p class="overlay-description">Developed a basic calculator using HTML, CSS, and JavaScript and designed a responsive and user-friendly interface with CSS for a clean layout..</p>
                    <ul class="overlay-features">
                        <li>Implemented core arithmetic operations (addition, subtraction, multiplication, division) using JavaScript.</li>
                        <li>Utilized JavaScript eval() function for expression evaluation while ensuring security measures.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/karthikmaddineni/simple-calculator" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>

            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="Library" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">College Library </h3>
                    <p class="">Developed a college library management system using Java, SQL, Swing, and AWT.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">JAVA</span>
                        <span class="project-tag">SQL</span>
                        <span class="project-tag">Swing</span>
                        <span class="project-tag">AWT</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">College Library</h3>
                    <p class="overlay-description">Developed a college library management system using Java, SQL, Swing, and AWT and designed an interactive GUI using Java Swing and AWT for a user-friendly experience.</p>
                    <ul class="overlay-features">
                        <li>Integrated MySQL database to store and manage book records, student details, and transactions.</li>
                        <li>Used JDBC for seamless database connectivity and CRUD operations.</li>
                        <li>Ensured data validation and error handling for smooth application performance.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/karthikmaddineni/lib-management" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Pro
