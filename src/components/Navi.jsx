import React from 'react'
import { useState } from 'react'
import "./Nav.css";


const Navi = () => {
    const [menu,setMenu]=useState(false);

return (
    <nav id="navbar">
        <a href="#" class="logo">KM</a>
        <ul class="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="menu-toggle" id="menuToggle">☰</div>
    </nav>
    )
}

export default Navi
