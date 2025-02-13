import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Correct CSS import

const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
