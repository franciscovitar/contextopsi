"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/_faqHome.scss";

const faqs = [
  {
    question: "¿Cómo funciona el proceso de admisión?",
    answer:
      "Completás un formulario breve con tus datos, motivo de consulta y preferencias. Nuestro equipo de admisión se contacta con vos en menos de 4 días hábiles para orientarte y derivarte lx mejor profesional para vos.",
  },
  {
    question: "¿Atienden de forma presencial y virtual?",
    answer:
      "Sí. Contamos con atención presencial en Buenos Aires y virtual para todo el mundo. Podés elegir la que mejor se adapte a tu situación y según la disponibilidad.",
  },
  {
    question: "¿Tienen cobertura de obras sociales?",
    answer:
      "No trabajamos con obras sociales y prepagas pero podemos realizar factura para solicitar reintegros.",
  },
  {
    question: "¿Atienden a niñxs y adolescentes?",
    answer:
      "Sí. Tenemos profesionales especializadxs en todas las franjas etarias: infancia, adolescencia, adultxs y adultxs mayores.",
  },
  {
    question: "¿Cuánto dura el proceso de derivación?",
    answer:
      "Nos comprometemos a dar respuesta en menos de 4 días hábiles para coordinar el llamado de admisión. En la mayoría de los casos podés tener tu primera sesión con tu terapeuta dentro de la misma semana o en la semana siguiente a la admisión.",
  },
  {
    question: "¿Trabajan con perspectiva de género en todas las consultas?",
    answer:
      "Sí. La perspectiva de género y de derechos es transversal a todo nuestro equipo, tanto en la atención clínica como en las propuestas formativas.",
  },
  {
    question: "¿Qué tipo de capacitaciones ofrecen?",
    answer:
      "Ofrecemos cursos de inicio a la práctica clínica, grupos de supervisión, ciclos de charlas y cursos asincrónicos sobre distintas temáticas. Están pensados tanto para profesionales en formación como para quienes ya están en ejercicio. Algunos cursos asincrónicos son para personas que quieren aprender o trabajar sobre su salud mental.",
  },
  {
    question: "¿Las capacitaciones son virtuales?",
    answer:
      "Sí, todas nuestras actividades formativas se realizan en formato virtual. Dependiendo la capacitación, puede ser sincrónica o asincrónica y con o sin posibilidad de acceder a la grabación. Consultanos para saber más.",
  },
  {
    question:
      "¿Las supervisiones son también para profesionales que no son de la red?",
    answer:
      "Sí, podés acceder a supervisiones individuales o grupales aún sin ser parte de la red. Duran 1 hora y quien te supervise estará alineadx con tu estilo / experiencia. Consultanos para saber más.",
  },
];

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-home-section">
      <motion.div
        className="faq-home-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <span>Preguntas frecuentes</span> */}
        <h2>Preguntas frecuentes</h2>
        <p>Antes de empezar, resolvemos tus dudas</p>
      </motion.div>

      <div className="faq-home-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`faq-home-item ${isOpen ? "active" : ""}`}
              key={faq.question}
            >
              <button
                className="faq-home-question"
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <i className={`bi ${isOpen ? "bi-dash" : "bi-plus"}`}></i>
              </button>

              <div className="faq-home-answer" aria-hidden={!isOpen}>
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
