"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../../Images/logo.jpeg";
import Image from "next/image";
import "../styles/navBar.scss";
import Link from "next/link";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, x: -50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0 },
  },
};

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const bgDiv = useRef(null);
  const linksActive = useRef(null);

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked(!clicked);
  };

  const changeBg = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <nav className={navbar ? "navbar-container1" : "navbar-container2"}>
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        <div className="left">
          <motion.div className="logo" {...textVariants}>
            <Link href="/">
              <div className="logo-banderas">
                <Image
                  className="logo_time"
                  src={Logo}
                  alt="Logo"
                  title="Logo"
                />
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="right"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          <div className="links">
            <a title="Nosotros" href="/#nosotros">
              Nosotrxs
            </a>
            <a className="dropdown" title="Servicios">
              Capacitaciones <i class="bi bi-chevron-down"></i>
              <div className="dropdown-menu">
                <a
                  title="Ciclo de Charlas"
                  href="https://forms.gle/WuK7grmzhpRY7feD7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ciclo de Charlas
                </a>
                <a
                  title="Curso de Inicios"
                  href="https://docs.google.com/forms/d/1jUShRaffa0ukAjgHzvyS-llKJVqCGot5_8rwij8tZw8/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curso de Inicios
                </a>
              </div>
            </a>
            <a title=" Diseño Web" href="/contenido">
              Contenido
            </a>
            <a title="Contacto" href="/#contacto">
              Contacto
            </a>{" "}
            <a
              className="terapy"
              title="opiniones"
              href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
            >
              Empezar terapia
            </a>
          </div>
          <i
            type="button"
            onClick={handleClick}
            className={`bi  ${clicked ? "bi-x" : "bi-list"}`}
          ></i>
        </motion.div>
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <a onClick={handleClick} title="Inicio" href="/#inicio">
              Inicio
            </a>
            <a onClick={handleClick} title="Nosotros" href="/#nosotros">
              Nosotrxs
            </a>
            <a className="dropdown" title="Servicios">
              Capacitaciones <i class="bi bi-chevron-down"></i>
              <div className="dropdown-menu">
                <a
                  title="Ciclo de Charlas"
                  href="https://forms.gle/WuK7grmzhpRY7feD7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ciclo de Charlas
                </a>
                <a
                  title="Curso de Inicios"
                  href="https://docs.google.com/forms/d/1jUShRaffa0ukAjgHzvyS-llKJVqCGot5_8rwij8tZw8/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curso de Inicios
                </a>
              </div>
            </a>
            <a onClick={handleClick} title=" Diseño Web" href="/contenido">
              Contenido
            </a>
            <a onClick={handleClick} title="Contacto" href="/#contacto">
              Contacto
            </a>{" "}
            <a
              onClick={handleClick}
              className="terapy"
              title="opiniones"
              href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
            >
              Empezar terapia
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
