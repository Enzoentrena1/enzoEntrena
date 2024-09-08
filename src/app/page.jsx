import Link from "next/link";


export default function Home() {
  return (
    // <div className="bg-BG-1">
    //   <div className="w-[80%] mx-auto ">
    //     {/* <Inicio /> */}
    //   </div>
    // </div>
    <div className="bg-BG-1 w-[80%] m-auto">
      {/* Separador */}
      <div className="my-32 flex flex-col justify-center">
        <div>
          <h1 className="text-center md:text-center text-amarillo font-bold text-2xl p-5">
            ¡Bienvenid@!
          </h1>
        </div>
        {/* Separador */}
        <div className="md:flex justify-start items-stretch w-full">
          <div className=" flex justify-start items-center min-w-[300px]">
            <div>
              <img
                src="images/Enzo.png"
                alt="Enzo"
                className="w-[300px] h-[300px] object-cover rounded-full border-amarillo border"
              />
            </div>
          </div>
          {/* Separador */}
          <div className="w-full flex flex-col justify-center items-start p-3 ">
            <p className="p-2 text-xl text-white max-w-[500px]">
              Estas dentro de una comunidad muy apasionada por el fitness, el
              entrenamiento y los buen hábitos. Esta página tiene muchas cosas y
              ¡Te invito a mirar! Testing push
            </p>
            <div className="flex p-2">
              <Link
                className="bg-amarillo p-4 rounded-md text-black font-bold hover:bg-yellow-400 list-none w-fit cursor-pointer"
                href="/Contacto"
              >
                Vamos a hablar
              </Link>
            </div>
          </div>
          {/* Separador */}
        </div>
      </div>
      {/* Separador */}
      <div className="my-32 flex flex-col justify-center">
        <div>
          <h1 className="text-center md:text-center text-amarillo font-bold text-2xl p-5">
            Sobre Mí
          </h1>
        </div>
        {/* Separador */}
        <div className="md:flex justify-end items-stretch w-full">
          {/* Separador */}
          <div className="w-full flex flex-col justify-center items-end p-3 ">
            <p className="p-2 text-xl text-white max-w-[500px]">
              Soy Profesor Nacional de Educación Física dedicado al
              entrenamiento personal y a sacar el máximo potencial a las
              personas, para tener una mejor calidad de vida tanto fisica como
              mentalmente. "Una organización eficiente es la base para acercarme
              a un resultado esperado". Por eso estoy dispuesto en acompañarte
              en este proceso y ser guía para lograr tus metas u objetivos.
            </p>
          </div>
          {/* Separador */}

          <div className=" flex justify-end items-center min-w-[300px]">
            <div>
              <img
                src="/images/Enzo2.jpg"
                alt="Enzo"
                className="w-[300px] h-[300px] object-cover rounded-full border-amarillo border"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Separador */}
    </div>
  );
}
