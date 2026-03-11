"use client";

import { motion } from "framer-motion";
import "../styles/_supervisiones.scss";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  viewport: { once: true },
};

export default function Supervision() {
  return (
    <section className="supervisiones-page">
      <div className="supervisiones-wrapper">
        <motion.div className="hero" {...fadeUp}>
          <span className="eyebrow">Contexto.Psi</span>

          <h1>Espacios de Supervisión</h1>

          <div className="line" />

          <p className="intro">
            En Contexto.Psi acompañamos a profesionales que quieren seguir
            creciendo en su práctica. Creamos espacios de supervisión,
            individuales y grupales, para pensar casos, revisar intervenciones,
            integrar miradas y trabajar en nuestro rol como terapeutas.
          </p>

          <div className="modalidad-chip">
            <span className="chip-label">Modalidad</span>
            <span className="chip-value">Virtual</span>
          </div>
        </motion.div>

        <div className="cards-grid">
          <motion.article className="info-card" {...fadeUp}>
            <div className="card-accent" />
            <h2>Supervisión individual</h2>
            <p>
              Un espacio para profundizar en casos, dudas, decisiones clínicas y
              estilo personal de trabajo. Diseñado para quienes están empezando
              y para quienes ya tienen recorrido, pero desean sostener su
              práctica con una mirada externa y actualizada.
            </p>
          </motion.article>

          <motion.article className="info-card" {...fadeUp}>
            <div className="card-accent" />
            <h2>Supervisión grupal</h2>
            <p>
              Encuentros en grupos de entre 5 y 10 personas, para compartir
              casos, herramientas y experiencias. Un espacio de intercambio
              horizontal que nutre, acompaña y construye red entre colegas,
              coordinado por profesionales de Contexto.Psi.
            </p>
          </motion.article>
        </div>

        <motion.article className="steps-card" {...fadeUp}>
          <div className="steps-header">
            <div>
              <span className="mini-label">Cómo empezar</span>
              <h3>Escribinos para coordinar tu espacio de supervisión</h3>
            </div>

            <a
              className="cta-desktop"
              href="mailto:info@contextopsi.com.ar?subject=Consulta%20-%20Espacios%20de%20Supervisi%C3%B3n"
            >
              Escribir por mail
            </a>
          </div>

          <p className="steps-text">
            Enviá un mail a{" "}
            <a href="mailto:info@contextopsi.com.ar">info@contextopsi.com.ar</a>{" "}
            con la siguiente información:
          </p>

          <div className="steps-list">
            <div className="step-item">
              <span className="dot" />
              <p>modalidad (individual o grupal)</p>
            </div>

            <div className="step-item">
              <span className="dot" />
              <p>resumen del recorrido profesional y perspectiva teórica</p>
            </div>

            <div className="step-item">
              <span className="dot" />
              <p>disponibilidad horaria</p>
            </div>

            <div className="step-item">
              <span className="dot" />
              <p>objetivos de supervisión</p>
            </div>

            <div className="step-item">
              <span className="dot" />
              <p>
                si es para supervisión individual, una breve descripción del
                caso que querés trabajar
              </p>
            </div>
          </div>

          <a
            className="cta-mobile"
            href="mailto:info@contextopsi.com.ar?subject=Consulta%20-%20Espacios%20de%20Supervisi%C3%B3n"
          >
            Escribir por mail
          </a>
        </motion.article>
      </div>
    </section>
  );
}
