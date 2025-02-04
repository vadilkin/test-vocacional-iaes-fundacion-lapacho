import { useState } from "react";
import  Progress  from "./ui/Progress";
import Resultados from "./Resultados";

const questions = [
  {
    question: "¿Qué tipo de actividades disfrutas más?",
    options: [
      { text: "Organizar proyectos y tomar decisiones estratégicas.", value: "A" },
      { text: "Resolver problemas lógicos y trabajar con tecnología.", value: "B" },
      { text: "Conocer sobre comercio exterior y normas internacionales.", value: "C" },
      { text: "Viajar, conocer culturas y planificar experiencias.", value: "D" },
      { text: "Ayudar a las personas a mejorar su rendimiento y bienestar laboral.", value: "E" }
    ]
  },
  {
    question: "¿Cómo te imaginas trabajando en el futuro?",
    options: [
      { text: "Dirigiendo mi propia empresa o gestionando negocios.", value: "A" },
      { text: "Programando o analizando datos en una empresa de tecnología.", value: "B" },
      { text: "Supervisando el tránsito de mercaderías en una aduana.", value: "C" },
      { text: "Administrando un hotel o creando paquetes turísticos.", value: "D" },
      { text: "Liderando equipos y gestionando talento en una empresa.", value: "E" }
    ]
  },
  {
    question: "¿Qué materias te interesan más?",
    options: [
      { text: "Economía, gestión empresarial y finanzas.", value: "A" },
      { text: "Matemáticas, informática y lógica.", value: "B" },
      { text: "Derecho, comercio internacional y normativas.", value: "C" },
      { text: "Historia, geografía y atención al cliente.", value: "D" },
      { text: "Psicología, comunicación y gestión de personas.", value: "E" }
    ]
  },
  {
    question: "¿En qué ambiente de trabajo te sentirías más cómodo/a?",
    options: [
      { text: "En una oficina, coordinando equipos y planificando estrategias.", value: "A" },
      { text: "En un entorno digital, trabajando con computadoras y software.", value: "B" },
      { text: "En una zona de comercio, gestionando trámites de importación y exportación.", value: "C" },
      { text: "En un hotel, agencia de viajes o aerolínea, interactuando con personas.", value: "D" },
      { text: "En una empresa, organizando capacitaciones y mejorando el clima laboral.", value: "E" }
    ]
  },
  {
    question: "¿Cuál de estas frases te representa mejor?",
    options: [
      { text: "Me gusta gestionar y hacer que los negocios crezcan.", value: "A" },
      { text: "Disfruto resolver problemas usando la tecnología.", value: "B" },
      { text: "Me interesa el comercio y las relaciones internacionales.", value: "C" },
      { text: "Viajar y conocer nuevos lugares es mi pasión.", value: "D" },
      { text: "Me gusta ayudar a las personas a desarrollarse profesionalmente.", value: "E" }
    ]
  }
];


const results = {
  A: "Administración de Empresas",
  B: "Análisis de Sistemas de Computación",
  C: "Régimen Aduanero",
  D: "Turismo y Gestión Hotelera",
  E: "Gestión de Recursos Humanos",
};


export default function Form() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      calculateResult(newAnswers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = (answers) => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const recommendedCareer = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    setResult(recommendedCareer);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
      {!result ? (
        <>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-4" />
          <h2 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 my-2 rounded-lg focus:outline-none"
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </button>
          ))}
        </>
      ) : (
        <Resultados resultado={result} />
      )}
    </div>
  );
}
