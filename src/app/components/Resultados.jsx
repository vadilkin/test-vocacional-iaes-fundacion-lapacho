import React from "react";

const Resultados = ({ resultado }) => {
  const getResultado = (resultado) => {
    switch (resultado) {
      case "A":
        return {
          titulo: (
            <span>
              <span className="text-primary">Administración de Empresas</span>
              <br />
              <span className="text-sm text-secondary-light">
                Título: Técnico Superior en Administración de Empresas
              </span>
            </span>
          ),
          descripcion: (
            <span>
              Esta carrera te prepara para gestionar y dirigir organizaciones de manera eficiente. Aprenderás sobre{" "}
              <a
                href="https://www.iaes.edu.ar/carreras/administracion-de-empresas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                administración estratégica, finanzas, marketing y recursos humanos
              </a>
              .
            </span>
          ),
          estiloDeVida: "📌 Ideal para personas organizadas y con visión emprendedora.",
          salidasLaborales: "Empresas privadas, Organismos Públicos o Emprendimientos Propios.",
          materiasClave: "Administración de Empresas, Costos y Presupuestos, Contabilidad, Liquidación de Sueldos, Pasantías Profesionales I y II.",
        };
      case "B":
        return {
          titulo: (
            <span>
              <span className="text-primary">Técnico Superior en Análisis de Sistemas en Computación</span>
              <br />
              <span className="text-sm text-secondary-light">
                Título: Técnico Superior en Análisis de Sistemas en Computación
              </span>
            </span>
          ),
          descripcion: (
            <span>
              Esta carrera te prepara para analizar y desarrollar sistemas informáticos. Aprenderás sobre{" "}
              <a
                href="https://iaes.edu.ar/analista-de-sistemas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                análisis de requerimientos, programación, redes, bases de datos y pasantías profesionales
              </a>
              .
            </span>
          ),
          estiloDeVida: "📌 Ideal para personas analíticas y con pasión por la tecnología. Un mundo en constante evolución. Gracias a sus diferentes disciplinas completamente virtuales, podrías trabajar en una gran empresa👩‍💻🌐, o tomar un camino viajero🛫⛱️.",
          salidasLaborales: "Analista de sistemas, Desarrollador de software, Consultor Tecnológico, Técnico de Redes y Seguridad. Opciones de trabajar remoto.",
          materiasClave: "Análisis de Requerimientos, Programación, Redes, Bases de Datos, Pasantías Profesionales I y II.",
        };
      case "C":
        return {
          titulo: (
            <span>
              <span className="text-primary">Técnico Superior en Régimen Aduanero</span>
              <br />
              <span className="text-sm text-secondary-light">
                Título: Técnico Superior en Régimen Aduanero
              </span>
            </span>
          ),
          descripcion: (
            <span>
              Esta carrera te prepara para asesorar, planificar, desarrollar, coordinar y controlar actividades de importación y exportación, vinculadas al sector público y privado. Aprenderás sobre{" "}
              <a
                href="https://iaes.edu.ar/tecnico-superior-en-regimen-aduanero/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                importación, exportación, informática aduanera, derecho tributario y pasantías profesionales
              </a>
              .
            </span>
          ),
          estiloDeVida: "📌 Ideal para personas con interés en comercio internacional y normativa aduanera 🚢🛫.",
          salidasLaborales: "Asesorar, planificar, desarrollar, coordinar y controlar actividades de importación y exportación, vinculadas al sector público y privado.",
          materiasClave: "Importación, Exportación, Informática Aduanera, Derecho Tributario, Pasantías Profesionales I y II.",
        };
      case "D":
        return {
          titulo: (
            <span>
              <span className="text-primary">Técnico Superior en Turismo y Gestión Hotelera</span>
              <br />
              <span className="text-sm text-secondary-light">
                Título: Técnico Superior en Turismo y Gestión Hotelera
              </span>
            </span>
          ),
          descripcion: (
            <span>
              Esta carrera te prepara para gestionar hoteles y agencias de viajes. Aprenderás sobre{" "}
              <a
                href="https://www.iaes.edu.ar/carreras/turismo-y-gestion-hotelera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                turismo sustentable, administración hotelera y relaciones públicas y pasantías profesionales
              </a>
              .
            </span>
          ),
          estiloDeVida: "📌 Ideal para personas sociables y con pasión por viajar 🏞️🛫🏝️, aprender idiomas y brindar experiencias increíbles a sus clientes.",
          salidasLaborales: "Agencias de viajes, Emprendimientos Turísticos Regionales, Hoteles, Aerolíneas, Operadores Turísticos.",
          materiasClave: "Turismo Sustentable, Administración Hotelera y Relaciones Públicas, Pasantías Profesionales I y II.",
        };
      case "E":
        return {
          titulo: (
            <span>
              <span className="text-primary">Técnico Superior en Gestión de Recursos Humanos</span>
              <br />
              <span className="text-sm text-secondary-light">
                Título: Técnico Superior en Gestión de Recursos Humanos
              </span>
            </span>
          ),
          descripcion: (
            <span>
              Esta carrera te prepara para gestionar recursos humanos. Aprenderás sobre{" "}
              <a
                href="https://www.iaes.edu.ar/carreras/recursos-humanos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                gestión del talento, desarrollo organizacional, derecho laboral y pasantías profesionales
              </a>
              .
            </span>
          ),
          estiloDeVida: "📌 Ideal para personas con habilidades de comunicación y liderazgo.",
          salidasLaborales: "Empresas privadas, consultoras, departamentos de RRHH.",
          materiasClave: "Ciencias del Comportamiento, Selección de Personal, Derecho Laboral, Negociación y Manejo de Conflictos, Pasantías Profesionales I y II.",
        };
      default:
        return {
          titulo: (
            <span>
              <span className="text-primary">No se puede determinar un resultado claro</span>
              <br />
              <span className="text-sm text-secondary-light">
                Considera explorar múltiples áreas
              </span>
            </span>
          ),
          descripcion: "Parece que las respuestas fueron variadas. Te recomendamos explorar diferentes áreas para encontrar tu camino.",
          estiloDeVida: "📌 Explora diferentes áreas y materias para encontrar tu camino.",
          salidasLaborales: "Podrías considerar explorar múltiples áreas profesionales.",
          materiasClave: "Explora diferentes áreas y materias para encontrar tu camino.",
        };
    }
  };

  const resultadoInfo = getResultado(resultado);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
          {resultadoInfo.titulo}
        </h2>
        <p className="text-lg text-secondary-light max-w-2xl mx-auto">
          {resultadoInfo.descripcion}
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Estilo de Vida
          </h3>
          <p className="text-secondary-light">
            {resultadoInfo.estiloDeVida}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Salidas Laborales
          </h3>
          <p className="text-secondary-light">
            {resultadoInfo.salidasLaborales}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Materias Clave
          </h3>
          <p className="text-secondary-light">
            {resultadoInfo.materiasClave}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
