import { useState } from "react";
import Progress from "./ui/Progress";
import Resultados from "./Resultados";
import { motion, AnimatePresence } from 'framer-motion';

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
  const [activeButton, setActiveButton] = useState(null);
  const [direction, setDirection] = useState(0);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      calculateResult(newAnswers);
    } else {
      setDirection(1);
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!result ? (
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-8" />
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentQuestion}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-white border-2 border-primary text-primary font-medium py-3 px-6 rounded-xl focus:outline-none transition-all duration-200 text-left
                      ${activeButton === index ? 'bg-primary text-white shadow-lg' : 'md:hover:bg-primary md:hover:text-white'}`}
                    onClick={() => handleAnswer(option.value)}
                    onTouchStart={() => setActiveButton(index)}
                    onTouchEnd={() => setActiveButton(null)}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Resultados resultado={result} />
        </motion.div>
      )}
    </div>
  );
}
