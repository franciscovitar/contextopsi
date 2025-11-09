"use client";

import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import "../styles/_formContacto.scss";
import FotoContacto from "../../Images/sitioweb.jpg";

const FormContacto = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const nombre = formData.get("nombre");
    const telefono = formData.get("telefono");
    const mail = formData.get("mail");
    const consulta = formData.get("consulta");

    if (!nombre || !telefono || !mail || !consulta) {
      toast.error("Por favor completá todos los campos requeridos.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_9tek7t7", // ID del servicio
        "template_5x1npgm", // ID del template
        form.current,
        "peaHu1sOsNCyxdkIk" // Public key
      )
      .then(
        () => {
          toast.success("¡Mensaje enviado con éxito! ✅");
          form.current.reset();
        },
        (error) => {
          console.error("Error al enviar:", error);
          toast.error(
            "Hubo un error al enviar el mensaje. Intentalo nuevamente."
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-content">
        {/* Texto + imagen */}
        <div className="contact-info">
          <h2>Contacto</h2>
          <p>
            Ante cualquier consulta no dudes en escribirnos. Dejanos tus dudas
            acá o escribinos a <strong>info@contextopsi.com.ar</strong>. Te
            estaremos respondiendo a la brevedad.
          </p>

          <div className="contact-image">
            <Image src={FotoContacto} alt="Contacto" />
          </div>
        </div>

        {/* Formulario */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <input type="text" name="nombre" placeholder="Nombre completo" />
            <input type="email" name="mail" placeholder="Email" />
          </div>

          <input type="text" name="telefono" placeholder="Teléfono" />

          <textarea
            name="consulta"
            placeholder="Mensaje"
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar consulta"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormContacto;
