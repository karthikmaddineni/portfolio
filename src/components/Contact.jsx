import React from 'react'
import "./Contact.css"
const Contact = () => {
return (
    <section id="contact" class="animate-in">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">✉</div>
                    <div class="contact-text">
                        <span>Email</span>
                        karthikmaddineni7@gmail.com
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <div class="contact-text">
                        <span>Phone</span>
                        +1 937-219-5114
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-text">
                        <span>Location</span>
                        Dayton, OH
                    </div>
                </div>
            </div>
            {/*
            <form id="contactForm">
                <div class="form-group">
                    <input type="text" id="name" class="form-input" placeholder=" " />
                    <label for="name" class="form-label">Your Name</label>
                </div>
                <div class="form-group">
                    <input type="email" id="email" class="form-input" placeholder=" " />
                    <label for="email" class="form-label">Your Email</label>
                </div>
                <div class="form-group">
                    <input type="text" id="subject" class="form-input" placeholder=" " />
                    <label for="subject" class="form-label">Subject</label>
                </div>
                <div class="form-group">
                    <textarea id="message" class="form-input" placeholder=" "></textarea>
                    <label for="message" class="form-label">Your Message</label>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
            */}
        </div>
    </section>
)
}

export default Contact
