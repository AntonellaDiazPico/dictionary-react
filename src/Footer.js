import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
    <footer>Coded by Antonella Diaz Pico</footer>
    <div className="open-source-div">
      <a
        href="https://github.com/AntonellaDiazPico/dictionary-react"
        target="_blank"
        rel="noreferrer"
        className="open-source-link"
      >
        Open-source code
      </a>
    </div>
  </div>
  );
}
