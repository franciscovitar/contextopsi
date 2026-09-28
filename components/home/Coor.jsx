"use client";

import React, { useCallback, useState } from "react";
import "../styles/_coord.scss";
import ProfessionalModal from "./ProfessionalModal";
import ProfessionalPhoto from "./ProfessionalPhoto";
import { admissions, coordinators } from "./teamData";

function TeamCard({ member, onSeeMore }) {
  return (
    <div className="coordination-item">
      <div className="coordination-image-wrapper">
        <ProfessionalPhoto
          professional={member}
          className="coordination-image"
        />
      </div>
      <div className="coordination-info">
        <p className="coordination-name">{member.name}</p>
        {member.number && <p className="coordination-mn">{member.number}</p>}
        <button
          type="button"
          onClick={() => onSeeMore(member)}
          className="see-more"
          aria-label={"Ver más sobre " + member.name}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

function Coor() {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section id="equipo" className="coordination">
      <h2 className="coordination-title">
        <span>EQUIPO DE COORDINACIÓN</span>
      </h2>

      <div className="coordination-list horizontal-list">
        {coordinators.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            onSeeMore={setSelected}
          />
        ))}
      </div>

      <h2 className="coordination-title">
        <span>EQUIPO DE ADMISIONES</span>
      </h2>

      <div className="coordination-list horizontal-list">
        {admissions.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            onSeeMore={setSelected}
          />
        ))}
      </div>

      <ProfessionalModal professional={selected} onClose={closeModal} />
    </section>
  );
}

export default Coor;
