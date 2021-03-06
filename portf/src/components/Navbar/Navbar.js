import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <a className="left heading" href="#home">
          ARYAN KALWANI
        </a>
        <a className="right" href="#contact">
          Contact Me
        </a>
        <a className="right" href="#projects">
          Projects
        </a>
        <a className="right" href="#about">
          About
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
