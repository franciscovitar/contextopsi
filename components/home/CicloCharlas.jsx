"use client";

import React from "react";
import "../styles/_charlas.scss";
import Image from "next/image";

import FlyerParte2 from "../../Images/Flyer-Contexto-1.png";
import FlyerParte1 from "../../Images/Flyer-Contexto-2.png";

const CicloCharlas = () => {
  return (
    <section className="capacitaciones-section">
      <div className="container">
        <h1>Ciclo de Charlas Contexto.Psi</h1>

        <div className="bloque">
          <p>
            El <strong>Ciclo de Charlas Contexto.Psi</strong> busca ser un
            espacio de actualización e intercambio sobre temáticas actuales en
            salud mental, género, tecnologías, vínculos y otros ejes relevantes
            para profesionales de la salud y disciplinas afines.
          </p>

          <p>
            A lo largo del año se desarrollan diferentes encuentros con
            especialistas invitados, ofreciendo una mirada crítica y actualizada
            que promueve la reflexión y la formación continua.
          </p>

          <div className="flyers-grid">
            <div className="flyer">
              {/* <h3>— Perspectiva de Género y Diversidad</h3> */}
              <div className="flyer-card">
                <Image
                  src={FlyerParte2}
                  alt="Ciclo de Charlas Parte 1 - Perspectiva de Género y Diversidad"
                  className="flyer-img"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>

            <div className="flyer">
              {/* <h3>— Temáticas Actuales en Salud Mental</h3> */}
              <div className="flyer-card">
                <Image
                  src={FlyerParte1}
                  alt="Ciclo de Charlas Parte 2 - Temáticas Actuales en Salud Mental"
                  className="flyer-img"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>
          </div>

          <a
            href="https://forms.gle/WuK7grmzhpRY7feD7"
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

export default CicloCharlas;
