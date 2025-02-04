'use client';
import Form from "./components/Form";
import Image from 'next/image';
import logo from './images/logo.png';

export default function Home() {
  return (
    <>
      <header className="p-5 flex justify-center items-center ">
        <div className=" flex flex-col justify-center items-center">
        <Image src={logo} alt="iaes-fl-logo" width={200} height={150} />
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Conocé a detalle las carreras en nuestra web: <a href="https://www.iaes.edu.ar/" target="_blank" rel="noopener" className="text-blue-700">IAES WEBSITE</a>
        </h1>
        </div>
      </header>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Test de Interés Vocacional 🎓
        </h1>
        <h2 className="text-sm mx-auto mb-2 text-blue-800">Selecioná según tu interés.</h2>
        <Form />
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 hover:bg-blue-700 text-black py-2 px-4 rounded border border-blue-700 flex items-center justify-center">
          Rehacer Test
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="text-center">
          <p className="text-sm">
            Este test es únicamente informativo y no ha sido evaluado por profesionales de orientación pedagógica. El objetivo es brindar una guía general sobre las áreas profesionales que podrían ser de tu interés. Para hacer un Test de Orientación Vocacional te recomendamos que busques asesoramiento pedagógico profesional.
          </p>
        </div>
      </footer>
    </>
  );
}
