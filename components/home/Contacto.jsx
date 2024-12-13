"use client";

import React, { useState } from "react";
import "../styles/_contacto.scss";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Form from "../../Images/form.png";
import Redes from "../../Images/media_social_networks_community_online_forum_interest_groups_icon_260996.png";
import Cafe from "../../Images/cafecito.png";
import Image from "next/image";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};

const paragraphVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  const sendEmail = () => {
    // Crear un formulario temporal en el DOM

    const form = document.createElement("form");

    // Agregar campos al formulario
    form.innerHTML = `
      <input type="hidden" name="nombre" value="${nombre}">
      <input type="hidden" name="telefono" value="${telefono}">
      <input type="hidden" name="mail" value="${mail}">
      <input type="hidden" name="consulta" value="${consulta}">
    `;

    document.body.appendChild(form);

    emailjs
      .sendForm(
        "service_khoqdvt",
        "template_cu6span",
        form,
        "_Xi61NPw_YghhsDhm"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    document.body.removeChild(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consulta || !telefono || !mail || !nombre) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }

    sendEmail();
    toast.success("Formulario enviado con exito");
    setNombre("");
    setMail("");
    setTelefono("");
    setConsulta("");
  };

  return (
    <div id="contacto" className="contacto-container">
      <div className="contacto-container2">
        {" "}
        <motion.h3 {...paragraphVariants}>Contacto</motion.h3>
        <div {...lineVariants} className="line mb-5"></div>
        <div className="contacto">
          <div className="info">
            <motion.div {...paragraphVariants}>
              <Image src={Cafe} />

              <a href="https://cafecito.app/contextopsi">
                Colaborá con un Cafecito
              </a>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-linkedin"></i>
              <a href="https://www.linkedin.com/company/contexto-psi/?viewAsMember=true">
                Contexto.psi | Linkedin
              </a>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <Image src={Redes} />
              <p>
                @contexto.psi en{" "}
                <a href="https://www.instagram.com/contexto.psi">Instagram </a>y{" "}
                <a href="https://www.facebook.com/profile.php?id=100063685473728">
                  {" "}
                  Facebook
                </a>
              </p>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <Image src={Form} />
              <a>equipo.contextopsi@gmail.com</a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
