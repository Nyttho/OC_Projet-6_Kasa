import React from "react";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
