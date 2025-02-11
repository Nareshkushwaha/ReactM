import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>NARESH KUSHWAHA</h1>
        <p className="title">Full Stack Developer</p>
        <nav>
          <ul className="nav-links">
            {/* <Link to="/">Header</Link>
            <Link to="/header">About</Link>
           <Link to="/about">Projects</Link>
           <Link to ="/projects">Contact</Link>
           <Link to ="/contact">Page</Link> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
