"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "../styles/_formulario.scss";

function Formulario() {
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
    toast.success("Formulario enviado con exito");
    setNombre("");
    setMail("");
    setTelefono("");
    setConsulta("");
  };

  return (
    <div>
      <form>
        <h3>Completa nuestro formulario de contacto!</h3>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          name="nombre"
          type="text"
          placeholder="Nombre"
        />
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          name="mail"
          type="text"
          placeholder="Email"
        />
        <input
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          name="telefono"
          type="text"
          placeholder="Teléfono"
        />
        <textarea
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          name="consulta"
          type="text"
          placeholder="Consulta"
        />

        <div className="enviar">
          {/* <span>Todos los campos son obligatorios.</span> */}
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
