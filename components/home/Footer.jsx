"use client";

import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="detalleFooter">
      <p>
        © Copyright. Diseñado por{" "}
        <a
          title="genova"
          href="https://genovasite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Genova
        </a>
        . Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
