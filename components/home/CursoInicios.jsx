"use client";

import React, { useState } from "react";
import "../styles/_inicio.scss";
import Image from "next/image";

// 🟣 Imágenes nuevas
import MemeDrake from "../../Images/inicio-meme.jpg";
import BannerVerde from "../../Images/inicio-verde.jpg";
import BannerVioleta from "../../Images/inicio-violeta.jpg";

const CursoInicios = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const secciones = [
    {
      title: "Modalidad de cursada",
      content:
        "2 hs semanales de cursada virtual sincrónica los lunes de 18h a 20h.",
    },
    {
      title: "Fechas",
      content: "De marzo a julio / de agosto a diciembre.",
    },
    {
      title: "Dirigido a",
      content:
        "Psicólogxs recibidxs o estudiantes avanzadxs de la carrera de Psicología que quieran introducirse a la práctica profesional y participar en supervisiones clínicas.",
    },
    {
      title: "Ofrecemos",
      content: `Encuentro semanal grupal de 2 hs, formato teórico-práctico + taller de supervisiones (lunes 18 a 20hs, obligatorio)
3 hs mensuales de participación en espacios de Contexto.Psi (Ciclo de Charlas y encuentros de Supervisión de casos - jueves de 20 a 21h30, opcional). 
Derivación de entre 1 o 2 pacientes con tutores asignadxs para acompañamiento. 
Posibilidad de continuar luego en supervisiones grupales o individuales.`,
    },
    {
      title: "Condiciones para la derivación de consultantes",
      content: `Contar con matrícula habilitante y seguro de mala praxis.
Supervisar al menos uno de los casos asignados.
Participar con cámara encendida en al menos el 75% de las clases.
Enviar al menos 3 opciones de horarios semanales para recibir derivaciones.`,
    },
    {
      title: "Equipo a cargo",
      content:
        "Lic. Julieta Pera, Lic. Liza Murlender, Lic. Tatiana Galinsky, Lic. Luciana Conti, Lic. Sol Leibgorin.",
    },
    {
      title: "Propósitos",
      content: `Promover el intercambio entre profesionales de la salud mental, una mirada crítica y actualizada de la práctica y de la interdisciplina.
Facilitar el acercamiento a la práctica clínica en un espacio cuidado y con acompañamiento grupal e individual.
Formar en lxs futurxs profesionales criterios de ética y responsabilidad con perspectiva de género y derechos humanos.
Brindar herramientas teóricas y prácticas para la clínica.`,
    },
    {
      title: "Objetivos",
      content: `Que lxs estudiantes tengan un acercamiento a la clínica de forma segura, acompañada y responsable.
Que logren adquirir conceptos clínicos, de género y de derechos humanos.
Que formen parte de una red de profesionales donde puedan intercambiar experiencias y compartir la clínica.`,
    },
    {
      title: "Contenidos teóricos",
      content: `Marco normativo y principios básicos.
Encuadre y primeras entrevistas.
Perspectiva de género.
Criterios diagnósticos desde el psicoanálisis.
Introducción a terapias basadas en evidencia (TCC y Contextuales).`,
    },
  ];

  return (
    <section className="capacitaciones-section1">
      <div className="container-1">
        <h1>Curso de Inicios en la Clínica</h1>

        <div className="bloque">
          <h3>Fundamentos</h3>
          <p>
            Desde Contexto.Psi buscamos acompañar los inicios de la práctica
            profesional en la clínica, acercar prácticas actualizadas en
            espacios cuidados, con un acompañamiento personalizado, con
            perspectiva de género y de derechos.
          </p>
          <p>
            Nuestra mirada busca ser diversa y abierta a aportes de distintas
            corrientes teóricas, brindando herramientas concretas para dar los
            primeros pasos en la clínica.
          </p>

          {/* 🟣 Meme principal */}
          {/* <div className="flyer">
            <Image src={MemeDrake} alt="Meme Contexto Psi" />
          </div> */}

          {/* 🟣 Banners de promoción */}
          <div className="banner-duo">
            <Image
              src={BannerVioleta}
              alt="Anotate al curso de inicios en la clínica"
              className="banner"
            />
            <Image
              src={BannerVerde}
              alt="Clases teórico-prácticas con supervisiones"
              className="banner"
            />
          </div>

          {/* 🟣 Acordeón */}
          <div className="accordion">
            {secciones.map((item, i) => (
              <div key={i} className="accordion-item">
                <button
                  className={`accordion-title ${active === i ? "active" : ""}`}
                  onClick={() => toggle(i)}
                >
                  {item.title}
                  <span>{active === i ? "−" : "+"}</span>
                </button>
                {active === i && (
                  <div className="accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <a
            href="https://docs.google.com/forms/d/1jUShRaffa0ukAjgHzvyS-llKJVqCGot5_8rwij8tZw8/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quiero inscribirme
          </a>
          <p className="info-extra">
            Para más información o consultas, escribinos a{" "}
            <a href="mailto:info@contextopsi.com.ar">info@contextopsi.com.ar</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CursoInicios;
