import Link from "next/link";
import "../styles/_coursescta.scss";

export default function CoursesCTA() {
  return (
    <section className="section">
      <div className="blurOne" />
      <div className="blurTwo" />

      <div className="container">
        <div className="content">
          {/* <span className="eyebrow">Formación online</span> */}

          <h2 className="title">
            Seguí formándote con propuestas pensadas para profesionales y
            estudiantes de salud mental
          </h2>

          <p className="text">
            Accedé a cursos online con una experiencia simple, clara y flexible.
            Encontrá contenidos diseñados para acompañar tu formación,
            profundizar herramientas clínicas y seguir aprendiendo a tu ritmo.
          </p>

          <div className="tags">
            <span>Modalidad online</span>
            <span>Acceso simple</span>
            <span>Contenido actualizado</span>
          </div>

          <div className="actions">
            <Link
              href="https://cursos.contextopsi.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="primaryBtn"
            >
              Ver cursos
            </Link>

            {/* <Link
              href="https://cursos.contextopsi.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="secondaryBtn"
            >
              Ir a la plataforma
            </Link> */}
          </div>
        </div>

        <div className="card">
          <div className="cardGlow" />

          <span className="cardBadge">Contexto.Psi Cursos</span>

          <h3 className="cardTitle">
            Una nueva forma de aprender, con acceso directo a contenidos
            especializados
          </h3>

          <p className="cardText">
            Explorá cursos, accedé desde donde estés y sumá herramientas para tu
            recorrido profesional.
          </p>

          <div className="cardList">
            <div className="cardItem">
              <strong>100% online</strong>
              <span>Accedé cuando lo necesites</span>
            </div>
            <div className="cardItem">
              <strong>Formación profesional</strong>
              <span>Contenidos pensados para la práctica</span>
            </div>
            <div className="cardItem">
              <strong>Experiencia simple</strong>
              <span>Compra, acceso y navegación clara</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
