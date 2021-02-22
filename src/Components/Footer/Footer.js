import React, { useState } from "react";
import "./style.css";

const Footer = () => {
  const [foot, setFoot] = useState(15);
  return (
    <footer className="footer-style">
      <p>Ignacio Aristo |</p>
      <div className="logos"></div>
    </footer>
  );
};

export default Footer;
