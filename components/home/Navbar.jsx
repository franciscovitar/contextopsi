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
    if (window.scrollY > 80) setNavbar(true);
    else setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  }, []);

  return (
    <nav className={navbar ? "navbar-container1" : "navbar-container2"}>
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        {/* ---------- Logo ---------- */}
        <div className="left">
          <motion.div className="logo" {...textVariants}>
            <Link href="/" className="logo-banderas">
              <Image
                className="logo_time"
                src={Logo}
                alt="Logo"
                title="Logo"
                priority
              />
            </Link>
          </motion.div>
        </div>

        {/* ---------- Links Desktop ---------- */}
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
            <Link href="/#Inicio" title="Nosotros">
              Inicio
            </Link>
            {/* <Link href="/capacitaciones" title="Capacitaciones">
              Capacitaciones
            </Link> */}

            <div className="dropdown" title="Capacitaciones">
              <span>
                Capacitaciones <i className="bi bi-chevron-down"></i>
              </span>
              <div className="dropdown-menu">
                <Link href="/cursos-inicio" title="Inicios">
                  Curso de Inicios
                </Link>
                <a title="Charlas" href="ciclo-charlas">
                  Ciclo de Charlas
                </a>
              </div>
            </div>

            <div className="dropdown" title="Contenido">
              <span>
                Contenido <i className="bi bi-chevron-down"></i>
              </span>
              <div className="dropdown-menu">
                <Link href="/contenido" title="Publicaciones">
                  Publicaciones
                </Link>
                <a
                  title="Videos"
                  href="https://www.youtube.com/watch?v=_2ncZBjns-o&list=PLmJk3GS1utEkZVr3aHRRUGAGQdfaVetEq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Videos
                </a>
              </div>
            </div>

            <Link href="/contacto" title="Contacto">
              Contacto
            </Link>

            <a
              className="terapy"
              title="opiniones"
              href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezar terapia
            </a>
          </div>

          {/* ---------- Icono Hamburguesa ---------- */}
          <i
            type="button"
            onClick={handleClick}
            className={`hamburguesa bi ${clicked ? "bi-x" : "bi-list"}`}
          ></i>
        </motion.div>

        {/* ---------- Menu Móvil ---------- */}
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <Link onClick={handleClick} href="/#Inicio" title="Inicio">
              Inicio
            </Link>
            {/* <Link
              onClick={handleClick}
              href="/capacitaciones"
              title="Servicios"
            >
              Capacitaciones
            </Link> */}

            <div className="dropdown" title="Capacitaciones">
              <span>
                Capacitaciones <i className="bi bi-chevron-down"></i>
              </span>
              <div className="dropdown-menu">
                <Link href="/cursos-inicio" title="cursos">
                  Curso de Inicios
                </Link>
                <a title="Ciclo" href="ciclo-charlas">
                  Ciclo de Charlas
                </a>
              </div>
            </div>

            <div className="dropdown" title="Contenido">
              <span>
                Contenido <i className="bi bi-chevron-down"></i>
              </span>
              <div className="dropdown-menu">
                <Link href="/contenido" title="Publicaciones">
                  Publicaciones
                </Link>
                <a
                  title="Videos"
                  href="https://www.youtube.com/watch?v=_2ncZBjns-o&list=PLmJk3GS1utEkZVr3aHRRUGAGQdfaVetEq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Videos
                </a>
              </div>
            </div>
            <Link onClick={handleClick} href="/contacto" title="Contacto">
              Contacto
            </Link>

            <a
              className="terapy"
              title="opiniones"
              href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
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
