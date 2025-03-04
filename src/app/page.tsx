'use client';
import Form from "./components/Form";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="relative w-48 h-36 sm:w-56 sm:h-42">
              <Image 
                src="/images/logo.png" 
                alt="iaes-fl-logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-secondary text-center">
              Conocé a detalle las carreras en nuestra web:{' '}
              <a 
                href="https://www.iaes.edu.ar/" 
                target="_blank" 
                rel="noopener" 
                className="text-primary hover:text-primary-dark transition-colors inline-flex items-center"
              >
                IAES WEBSITE
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-7"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
            Test de Interés Vocacional 🎓
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Seleccioná según tu interés y descubrí tu carrera ideal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Form />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200 font-medium group"
          >
            Rehacer Test
            <svg className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm text-gray-300">
              Este test es únicamente informativo y no ha sido evaluado por profesionales de orientación pedagógica. El objetivo es brindar una guía general sobre las áreas profesionales que podrían ser de tu interés. Para hacer un Test de Orientación Vocacional te recomendamos que busques asesoramiento pedagógico profesional.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
