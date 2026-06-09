"use client";

import React, { useEffect, useState } from "react";
import Logo from "../../Images/logo.jpeg";
import Image from "next/image";
import "../styles/navBar.scss";
import Link from "next/link";

const TERAPIA_LINK =
  "https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      setNavbar(window.scrollY > 40);
    };

    changeBg();
    window.addEventListener("scroll", changeBg);

    return () => window.removeEventListener("scroll", changeBg);
  }, []);

  const closeMenu = () => setClicked(false);

  return (
    <nav className={`navbar-site ${navbar ? "scrolled" : ""}`}>
      <div className="navbar-shell">
        {/* Logo izquierda */}
        <div className="navbar-left">
          <Link href="/" className="logo-link" aria-label="Contexto Psi">
            <Image
              className="logo_time"
              src={Logo}
              alt="Logo Contexto Psi"
              title="Contexto Psi"
              priority
            />
          </Link>
        </div>

        {/* Links centro */}
        <div className="navbar-center">
          <div className="links">
            <Link href="/#Inicio">Inicio</Link>

            <div className="dropdown">
              <span>
                Capacitaciones <i className="bi bi-chevron-down"></i>
              </span>

              <div className="dropdown-menu capacitaciones-menu">
                <span className="dropdown-header">EN VIVO</span>

                <Link href="/cursos-inicio">
                  Curso de Inicios{" "}
                  <span className="badge badge-blue">sincrónico</span>
                </Link>

                <Link href="/ciclo-charlas">
                  Ciclo de Charlas{" "}
                  <span className="badge badge-blue">sincrónico</span>
                </Link>

                <span className="dropdown-header mt-spaced">A TU RITMO</span>

                <Link
                  href="https://cursos.contextopsi.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cursos Online{" "}
                  <span className="badge badge-green">asincrónico</span>
                </Link>
              </div>
            </div>

            <Link href="/supervisiones">Supervisiones</Link>

            <div className="dropdown">
              <span>
                Contenido <i className="bi bi-chevron-down"></i>
              </span>

              <div className="dropdown-menu">
                <Link href="/contenido">Publicaciones</Link>

                <a
                  href="https://www.youtube.com/watch?v=_2ncZBjns-o&list=PLmJk3GS1utEkZVr3aHRRUGAGQdfaVetEq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Videos
                </a>
              </div>
            </div>

            <Link href="/contacto">Contacto</Link>
          </div>
        </div>

        {/* Botón derecha */}
        <div className="navbar-right">
          <a
            className="terapy desktop-cta"
            href={TERAPIA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Empezar terapia
          </a>

          <button
            type="button"
            onClick={() => setClicked(!clicked)}
            className="hamburguesa"
            aria-label="Abrir menú"
          >
            <i className={`bi ${clicked ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <div className={`mobile-menu ${clicked ? "active" : ""}`}>
        <div className="links-active">
          <Link onClick={closeMenu} href="/#Inicio">
            Inicio
          </Link>

          <Link onClick={closeMenu} href="/cursos-inicio">
            Curso de Inicios
          </Link>

          <Link onClick={closeMenu} href="/ciclo-charlas">
            Ciclo de Charlas
          </Link>

          <Link
            onClick={closeMenu}
            href="https://cursos.contextopsi.com.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cursos Online
          </Link>

          <Link onClick={closeMenu} href="/supervisiones">
            Supervisiones
          </Link>

          <Link onClick={closeMenu} href="/contenido">
            Contenido
          </Link>

          <Link onClick={closeMenu} href="/contacto">
            Contacto
          </Link>

          <a
            className="terapy"
            href={TERAPIA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Empezar terapia
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
