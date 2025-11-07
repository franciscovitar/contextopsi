"use client";

import React, { useState } from "react";
import "../styles/_coord.scss";
import Cara1 from "../../Images/cara1.png";
import Image from "next/image";

import FotoBrendaLopatka from "../../Images/FotoBrendaLopatka.jpeg";
import FotoCamilaLarocca from "../../Images/FotoCamilaLarocca.jpeg";
import FotoFacundoLezzi from "../../Images/FotoFacundoIezzi.jpeg";
import FotoFlorInchauspe from "../../Images/FotoFlorInchauspe.jpeg";
import FotoFranciscoHerzberg from "../../Images/FotoFranciscoHerzberg.jpeg";
import FotoJesuanaFlores from "../../Images/FotoJesuanaFlores.jpeg";
import FotoJosefinaRueda from "../../Images/FotoJosefinaRueda.jpeg";
import FotoJulietaPera from "../../Images/FotoJulietaPera.jpeg";
import FotoLizaMurlender from "../../Images/FotoLizaMurlender.jpeg";
import FotoLucianaConti from "../../Images/FotoLucianaConti.jpeg";
import FotoMicaelaPrandi from "../../Images/FotoMicaelaPrandi.jpeg";
import FotoSoLeibgorin from "../../Images/FotoSolLeibgorin.jpeg";
import FotoTatianaGalinsky from "../../Images/FotoTatianaGalinsky.jpeg";
import FotoVeronicaPercara from "../../Images/FotoVeronicaPercara.jpeg";
import FotoVictoriaNunez from "../../Images/FotoVictoriaNuez.jpeg";
function Coor() {
  const [selected, setSelected] = useState(null);

  const coordinadores = [
    {
      name: "Lic. Julieta Pera",
      mn: "M.N. 68973",
      img: FotoJulietaPera,
      bio: `Psicóloga clínica. Ex concurrente del Hospital Muñiz. Diplomada en Educación Sexual Integral y Equidad de Género y Políticas Públicas. Formada en Psicoterapia Analítico Funcional (FAP) y Terapias de Tercera Ola (ACT, DBT, RO-DBT) y TDAH en adultxs. Creadora y coordinadora del espacio Encuentros Neurodivergentes.`,
    },
    {
      name: "Lic. Prof. Liza Murlender",
      mn: "M.N. 70026",
      img: FotoLizaMurlender,
      bio: `Psicóloga clínica integrativa, formada en Terapias contextuales, Trauma, Género y diplomada en Educación Sexual Integral. Consultora en Psicología organizacional, Liderazgo, Management y Estrategia.`,
    },
    {
      name: "Lic. Sol Leibgorin",
      mn: "M.N. 69481",
      img: FotoSoLeibgorin,
      bio: `Psicóloga Clínica Integrativa, especializada en Sexología Clínica y diplomada en Educación Sexual Integral. También se desempeña en el ámbito de la Psicología Educativa.`,
    },
    {
      name: "Lic. Luciana Conti",
      mn: "M.N. 69515",
      img: FotoLucianaConti,
      bio: `Especialista en Psicología Clínica. Ex-concurrente del Hospital de Niños Dr. Ricardo Gutiérrez. Diplomada en Problemáticas actuales infanto-juveniles. Formada en DBT para adolescentes y familias y en psicoterapia con psicodélicos.`,
    },
    {
      name: "Lic. Tatiana Galinsky",
      mn: "M.N. 69655",
      img: FotoTatianaGalinsky,
      bio: `Psicoterapeuta Integral de adultxs y parejas. Diplomada en Educación Sexual Integral y diversidad. Diplomada en terapias contextuales y de tercera generación: ACT, DBT, Terapia Integral de Pareja (IBCT) y Regulación Emocional (RO DBT).`,
    },
  ];

  const admisores = [
    {
      name: "Lic. Francisco Herzberg",
      mn: "M.N. 64321",
      img: FotoFranciscoHerzberg,
    },
    {
      name: "Lic. Facundo Lezzi",
      mn: "M.N. 76480",
      img: FotoFacundoLezzi,
    },

    {
      name: "Lic. Camila Larocca",
      mn: "M.N. 72753",
      img: FotoCamilaLarocca,
    },
    {
      name: "Lic. Brenda Lopatka",
      mn: "M.N. 71964",
      img: FotoBrendaLopatka,
    },
    {
      name: "Lic. Victoria Núñez",
      mn: "M.N. 59247",
      img: FotoVictoriaNunez,
    },
    {
      name: "Lic. Verónica Percara",
      mn: "M.N. 67069",
      img: FotoVeronicaPercara,
    },
    {
      name: "Lic. Micaela Prandi",
      mn: "M.N. 72139",
      img: FotoMicaelaPrandi,
    },
    {
      name: "Lic. Josefina Rueda",
      mn: "M.N. 74790",
      img: FotoJosefinaRueda,
    },
  ];

  return (
    <section className="coordination">
      <h2 className="coordination-title">
        <span>EQUIPO DE COORDINACIÓN</span>
      </h2>

      <div className="coordination-list horizontal-list">
        {coordinadores.map((member, index) => (
          <div key={index} className="coordination-item">
            <div className="coordination-image-wrapper">
              <Image
                src={member.img}
                alt={`Foto de ${member.name}`}
                className="coordination-image"
              />
            </div>
            <div className="coordination-info">
              <p className="coordination-name">{member.name}</p>
              <p className="coordination-mn">{member.mn}</p>
              <button onClick={() => setSelected(member)} className="see-more">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="coordination-modal" onClick={() => setSelected(null)}>
          <div
            className="coordination-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.img}
              alt={selected.name}
              className="coordination-modal-image"
            />
            <h3>{selected.name}</h3>
            <p className="coordination-mn">{selected.mn}</p>
            <p className="coordination-bio">{selected.bio}</p>
            <button onClick={() => setSelected(null)} className="close-btn">
              Cerrar
            </button>
          </div>
        </div>
      )}

      <h2 className="coordination-title">
        <span> EQUIPO DE ADMISIONES</span>
      </h2>
      <div className="coordination-list horizontal-list">
        {admisores.map((member, index) => (
          <div key={index} className="coordination-item">
            <div className="coordination-image-wrapper">
              <Image
                src={member.img}
                alt={`Foto de ${member.name}`}
                className="coordination-image"
              />
            </div>
            <div className="coordination-info">
              <p className="coordination-name">{member.name}</p>
              <p className="coordination-mn">{member.mn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coor;
