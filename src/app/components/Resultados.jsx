import React from "react";

const Resultados = ({ resultado }) => {
  const resultadoDetalles = obtenerDetalles(resultado);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">RESULTADO</h2>
      <h3 className="text-xl font-bold mb-2">{resultadoDetalles.titulo}</h3>
      <p className="text-gray-600">{resultadoDetalles.estiloDeVida}</p>
      <p className="text-gray-600">🛠️ Salidas laborales: {resultadoDetalles.salidasLaborales}</p>
      <p className="text-gray-600">📚 Materias clave: {resultadoDetalles.materiasClave}</p>
    </div>
  );
};

const obtenerDetalles = (resultado) => {
  switch (resultado) {
    case "A":
      return {
        titulo: (
          <span>
            📜 Técnico Superior en Adminisración de Empresas. {" "}
            <a className="mx-auto text-md font-light text-blue-700" href="https://iaes.edu.ar/administracion-de-empresas/" target="_blank" rel="noopener noreferrer">
              Más información
            </a>.
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
            📜 Técnico Superior en Análisis de Sistemas en Computación. {" "}
            <a className="mx-auto text-md font-light text-blue-700" href="https://iaes.edu.ar/analista-de-sistemas/" target="_blank" rel="noopener noreferrer">
              Más información
            </a>.
          </span>
        ),
        estiloDeVida: "📌 Ideal para personas analíticas y con pasión por la tecnología. Un mundo en constante evolución. Gracias a sus diferentes disciplinas completamente virtuales, podrías trabajar en una gran empresa👩‍💻🌐, o tomar un camino viajero🛫⛱️.",
        salidasLaborales: "Analista de sistemas, Desarrollador de software, Consultor Tecnológico, Técnico de Redes y Seguridad. Opciones de trabajar remoto.",
        materiasClave: "Análisis de Requerimienos, Programación, Redes, Bases de Datos, Pasantías Profesionales I y II.",
      };
    case "C":
      return {
        titulo: (
          <span>
            📜 Técnico Superior en Régimen Aduanero. {" "}
            <a className="mx-auto text-md font-light text-blue-700" href="https://iaes.edu.ar/tecnico-superior-en-regimen-aduanero/" target="_blank" rel="noopener noreferrer">
              Más información
            </a>.
          </span>
        ),
        estiloDeVida: "Ideal para personas con interés en comercio internacional y normativa aduanera 🚢🛫.",
        salidasLaborales: "Asesorar, planificar, desarrollar, coordinar y controlar actividades de importación y exportación, vinculadas al sector público y privado.",
        materiasClave: "Importación, Exportación, Informática Aduanera, Derecho Tributario, Pasantías Profesionales I y II.",
      };
    case "D":
      return {
        titulo: (
          <span>
            📜 Técnico Superior en Turismo y Gestión Hotelera. {" "}
            <a className="mx-auto text-md font-light text-blue-700" href="https://iaes.edu.ar/turismo-y-gestion-hotelera/" target="_blank" rel="noopener noreferrer">
              Más información
            </a>.
          </span>
        ),
        estiloDeVida: "Ideal para personas sociables y con pasión por viajar 🏞️🛫🏝️, aprender idiomas y brindar experiencias increibles a sus clientes.",
        salidasLaborales: "Agencias de viajes, Emprendimientos Turísticos Regionales, Hoteles, Aerolíneas, Operadores Turísticos.",
        materiasClave: "Turismo Sustentable, Administración Hotelera y Relaciones Públicas, Pasantías Profesionales I y II.",
      };
    case "E":
      return {
        titulo: (
          <span>
            📜 Técnico Superior en Gestión de Recursos Humanos. {" "}
            <a className="mx-auto text-md font-light text-blue-700" href="https://iaes.edu.ar/recursos-humanos/" target="_blank" rel="noopener noreferrer">
              Más información
            </a>.
          </span>
        ),
        estiloDeVida: "Ideal para personas con habilidades de comunicación y liderazgo.",
        salidasLaborales: "Empresas privadas, consultoras, departamentos de RRHH.",
        materiasClave: "Ciencias del Comportamiento, Selección de Personal, Derecho Laboral, Negocialción y Manejo de Conflictos, Pasantías Profesionales I y II.",
      };
    default:
      return {
        titulo: "📌 No se puede determinar un resultado claro.",
        estiloDeVida: "Parece que las respuestas fueron variadas.",
        salidasLaborales: "Podrías considerar explorar múltiples áreas.",
        materiasClave: "Explora diferentes áreas y materias para encontrar tu camino.",
      };
  }
};

export default Resultados;
