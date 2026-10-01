"use client";

import { useEffect } from "react";
import "../styles/_professional-modal.scss";
import ProfessionalPhoto from "./ProfessionalPhoto";

function ProfessionalModal({ professional, onClose }) {
  useEffect(() => {
    if (!professional) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [professional, onClose]);

  if (!professional) return null;

  const titleId = "professional-modal-title-" + professional.id;

  return (
    <div className="professional-modal" onClick={onClose} role="presentation">
      <div
        className="professional-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="professional-modal-x"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="professional-modal-image-wrapper">
          <ProfessionalPhoto
            professional={professional}
            className="professional-modal-image"
          />
        </div>

        <h3 id={titleId}>{professional.name}</h3>
        {professional.number && (
          <p className="professional-modal-number">{professional.number}</p>
        )}
        <p className="professional-modal-bio">{professional.bio}</p>

        <button
          type="button"
          onClick={onClose}
          className="professional-modal-close"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ProfessionalModal;
