const Servicios = () => {
  return (
    <div className="flex flex-wrap items-stretch gap-5 justify-center my-20 text-white">
      {/* Separador */}
      <div className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md">
        <div className="flex flex-col justify-center items-center p-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-amarillo font-bold text-2xl">Básico</h3>
          </div>
          <div className="flex space-x-2">
            <p className="text-amarillo font-bold text-2xl">AR$</p>
            <p className="text-amarillo font-bold text-2xl">6.000</p>
            <p className="text-amarillo font-bold text-2xl">/mes</p>
          </div>
          <p className="text-center text-xs">Servicio Estandar</p>
        </div>
        <ul class="w-full list-disc border-amarillo border p-2">
          <li className=" p-2 mt-2 ml-5">
            Entrenamiento guiado para que aprendas a entrenar por tu cuenta
          </li>
          <li className="p-2 mt-2 ml-5">
            Vas a recibir una planilla mensual en donde se va a registrar:
            <ul class="list-disc ml-4">
              <li className="p-1">Pesos</li>
              <li className="p-1">Repeticiones</li>
              <li className="p-1">Ejercicios</li>
              <li className="p-1">Técnicas</li>
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
      {/* Separador */}
      <div className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md">
        <div className="flex flex-col justify-center items-center p-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-amarillo font-bold text-2xl">Personalizado</h3>
          </div>
          <div className="flex space-x-2">
            <p className="text-amarillo font-bold text-2xl">AR$</p>
            <p className="text-amarillo font-bold text-2xl">10.000</p>
            <p className="text-amarillo font-bold text-2xl">/mes</p>
          </div>
          <p className="text-center text-xs">Servicio Exclusivo</p>
        </div>
        <ul class="w-full list-disc border-amarillo border p-2">
          <li className=" p-2 mt-2 ml-5">
            Entrenamiento y alimentacion personalizado.
          </li>
          <li className="p-2 mt-2 ml-5">
            Entrenamiento guíado de intensidad, peso, técnica, seguridad,
            revision, etc
          </li>
          <li className="p-2 mt-2 ml-5">
            Planilla y rutina planificada con métodos y técnicas adaptadas al
            cliente
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
      {/* Separador */}
      <div className="mt-2 md:mt-0 bg-BG-2 cursor-pointer hover:shadow-2xl hover:shadow-amarillo transition-all p-5 max-w-[400px] flex flex-col justify-between items-center rounded-md">
        <div className="flex flex-col justify-center items-center p-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-amarillo font-bold text-2xl">
              Entrenamiento Online
            </h3>
          </div>
          <div className="flex space-x-2">
            <p className="text-amarillo font-bold text-2xl">AR$</p>
            <p className="text-amarillo font-bold text-2xl">10.000</p>
            <p className="text-amarillo font-bold text-2xl">/mes</p>
          </div>
          <p className="text-center text-xs">Servicio Premium</p>
        </div>
        <ul class="w-full list-disc border-amarillo border p-2">
          <li className=" p-2 mt-2 ml-5">
            Rutina de entrenamiento personalizado.
          </li>
          <li className="p-2 mt-2 ml-5">Plan de alimentación personalizado.</li>
          <li className="p-2 mt-2 ml-5">
            Control a travéz de fotos mensuales.
          </li>
          <li className="p-2 mt-2 ml-5">
            Vas a recibir documentos PDF, Word, Vídeos y audios explicando al
            detalle todo.
          </li>
          <div className="w-full flex justify-around items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <p>Horarios</p>
              <p>Lunes a Domingo</p>
              <p>24/7</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Reportes</p>
              <p>Finalizando el mes</p>
              <p>de pago</p>
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
  );
};

export default Servicios;
