"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import "../styles/_formContacto.scss";
import FotoContacto from "../../Images/sitioweb.jpg"; // reemplazá con tu imagen real

const FormContacto = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  const sendEmail = () => {
    const form = document.createElement("form");
    form.innerHTML = `
      <input type="hidden" name="nombre" value="${nombre}">
      <input type="hidden" name="telefono" value="${telefono}">
      <input type="hidden" name="mail" value="${mail}">
      <input type="hidden" name="consulta" value="${consulta}">
    `;
    document.body.appendChild(form);

    emailjs
      .sendForm(
        "service_05h883d",
        "template_vkexfrm",
        form,
        "E6hTZwuGCAOTz2q0h"
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
    toast.success("Formulario enviado con éxito ✅");
    setNombre("");
    setMail("");
    setTelefono("");
    setConsulta("");
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-content">
        {/* Texto + imagen */}
        <div className="contact-info">
          <h2>Contacto</h2>
          <p>
            Ante cualquier consulta no dudes en escribirnos. Dejanos tus dudas
            acá o escribinos a info@contextopsi.com. Te estaremos respondiendo a
            la brevedad.
          </p>

          <div className="contact-image">
            <Image src={FotoContacto} alt="Contacto" />
          </div>
        </div>

        {/* Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <textarea
            name="consulta"
            placeholder="Mensaje"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          ></textarea>
          <button type="submit">Enviar consulta</button>
        </form>
      </div>
    </section>
  );
};

export default FormContacto;
