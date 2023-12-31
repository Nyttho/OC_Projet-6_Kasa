import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo de Kasa" />
      <nav>
        <ul>
          <NavLink to="/" activeclassname="active-link">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" activeclassname="active-link">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
