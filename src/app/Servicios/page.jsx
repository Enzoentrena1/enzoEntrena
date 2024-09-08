import Link from "next/link";
// Iconos imports
import { FaWhatsapp } from "react-icons/fa";
// Iconos imports end

const Servicios = () => {
  return (
    <div className="flex flex-wrap items-stretch gap-5 justify-center my-20 text-white">
      {/* Separador */}
      <div className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md">
        <div>
          <div className="flex flex-col justify-center items-center p-2">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-amarillo font-bold text-2xl">Básico</h3>
            </div>
            <div className="flex space-x-2">
              <a
                target="_blank"
                href="https://wa.me/3755662970?text=Hola%20me%20interesa%20el%20plan%20de%20entrenamiento%20Básico"
                className="flex justify-center items-center space-x-3 text-black font-bold bg-green-600 rounded-md p-2 my-1 hover:text-green-600 hover:bg-black transition-all duration-300"
              >
                <p>CONSULTAR PRE$IO</p>
                <FaWhatsapp className="font-bold text-xl" />
              </a>
            </div>
            <p className="text-center text-xs">Servicio Estandar</p>
          </div>
          {/* Separador */}
          <ul class="w-full list-disc border-amarillo border p-2">
            <li className=" p-2 mt-2 ml-5">
              Entrenamiento guiado para que aprendas a entrenar por tu cuenta
            </li>
            <li className="p-2 mt-2 ml-5">
              Vas a recibir una planilla mensual en donde se va a registrar:
              <ul class="list-disc ml-4">
                <li className="p-1">Registro del entrenamiento</li>
                <li className="p-1">Registro del volumen del entrenamiento</li>
                <li className="p-1">Registro de peso corporal</li>
              </ul>
            </li>
            <div className="w-full flex flex-col justify-center items-center my-5">
              <p>Horarios</p>
              <p>Lunes a Viernes</p>
              <p>7:00 a 12:00 hs</p>
            </div>
          </ul>

          <div className="flex justify-center items-center my-5">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Separador */}
      <div
        href="/Contacto"
        className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md"
      >
        <div>
          <div className="flex flex-col justify-center items-center p-2">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-amarillo font-bold text-2xl">
                Personalizado
              </h3>
            </div>
            <div className="flex space-x-2">
            <a
                target="_blank"
                href="https://wa.me/3755662970?text=Hola%20me%20interesa%20el%20plan%20de%20entrenamiento%20Personalizado"
                className="flex justify-center items-center space-x-3 text-black font-bold bg-green-600 rounded-md p-2 my-1 hover:text-green-600 hover:bg-black transition-all duration-300"
              >
                <p>CONSULTAR PRE$IO</p>
                <FaWhatsapp className="font-bold text-xl" />
              </a>
            </div>
            <p className="text-center text-xs">Servicio Exclusivo</p>
          </div>
          <ul class="w-full list-disc border-amarillo border p-2">
            <li className=" p-2 mt-2 ml-5">
              Balanza digital inteligente.
            </li>
            <li className="p-2 mt-2 ml-5">
              Entrenamiento adaptado al cliente.
            </li>
            <li className="p-2 mt-2 ml-5">
              Alimentacion adaptada al cliente.
            </li>
            <li className="p-2 mt-2 ml-5">
              Medidas corporales.
            </li>
            <li className="p-2 mt-2 ml-5">
              Comprobación de fotos.
            </li>
            <li className="p-2 mt-2 ml-5">
              Perdida de grasa (Periodización).
            </li>
            <li className="p-2 mt-2 ml-5">
              Aumento de masa muscular (Periodización).
            </li>
            <div className="w-full flex flex-col justify-center items-center my-5">
              <p>Horarios</p>
              <p>Lunes a Viernes</p>
              <p>A convenir </p>
            </div>
          </ul>

          <div className="flex justify-center items-center my-5">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Separador */}
      <div
        href="/Contacto"
        className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md"
      >
        <div>
          <div className="flex flex-col justify-center items-center p-2">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-amarillo font-bold text-2xl">
                Entrenamiento Online
              </h3>
            </div>
            <div className="flex space-x-2">
            <a
                target="_blank"
                href="https://wa.me/3755662970?text=Hola%20me%20interesa%20el%20plan%20de%20entrenamiento%20Online"
                className="flex justify-center items-center space-x-3 text-black font-bold bg-green-600 rounded-md p-2 my-1 hover:text-green-600 hover:bg-black transition-all duration-300"
              >
                <p>CONSULTAR PRE$IO</p>
                <FaWhatsapp className="font-bold text-xl" />
              </a>
            </div>
            <p className="text-center text-xs">Servicio Premium</p>
          </div>
          <ul class="w-full list-disc border-amarillo border p-2">
            <li className=" p-2 mt-2 ml-5">
              Perdida de grasa mes a mes.
            </li>
            <li className="p-2 mt-2 ml-5">
              Aumento de masa muscular mes a mes.
            </li>
            <li className="p-2 mt-2 ml-5">
              Conteo de calorías.
            </li>
            <li className="p-2 mt-2 ml-5">
              Guía nutricional.
            </li>
            <li className="p-2 mt-2 ml-5">
              Entrenamiento eficaz y específico.
            </li>
            <li className="p-2 mt-2 ml-5">
              Comprobación de fotos.
            </li>
            <div className="w-full flex justify-around items-center my-5">
              <div className="flex flex-col justify-center items-center">
                <p>Horarios</p>
                <p>Lunes a Domingo</p>
                <p>24/7</p>
              </div>
            </div>
          </ul>

          <div className="flex justify-center items-center my-5">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Separador */}
      <div
        href="/Contacto"
        className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md"
      >
        <div>
          <div className="flex flex-col justify-center items-center p-2">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-amarillo font-bold text-2xl">
                Control corporal
              </h3>
            </div>
            <div className="flex space-x-2">
            <a
                target="_blank"
                href="https://wa.me/3755662970?text=Hola%20me%20interesa%20el%20control%20corporal"
                className="flex justify-center items-center space-x-3 text-black font-bold bg-green-600 rounded-md p-2 my-1 hover:text-green-600 hover:bg-black transition-all duration-300"
              >
                <p>CONSULTAR PRE$IO</p>
                <FaWhatsapp className="font-bold text-xl" />
              </a>
            </div>
          </div>
          <ul class="w-full list-disc border-amarillo border p-2">
            <li className=" p-2 mt-2 ml-5">
              Toma de medidas corporales.
            </li>
            <li className="p-2 mt-2 ml-5">
              Peso corporal.
            </li>
            <li className="p-2 mt-2 ml-5">
              Medición de porcentaje % graso corporal.
            </li>
            <li className="p-2 mt-2 ml-5">
            Medición de porcentaje % de masa muscular corporal.
            </li>
            <div className="">
              <img src="/images/servicioControlCorporal.jpg" alt="FotoBalanza" />
            </div>
          </ul>

          <div className="flex justify-center items-center my-5">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
