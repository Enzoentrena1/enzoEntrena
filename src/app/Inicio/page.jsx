import Image from "next/image";
import Link from "next/link";

const Inicio = () => {
  return (
    <div className="bg-BG-1">
      <div className="block md:flex w-full justify-center items-center min-h-screen">
        <div className=" flex justify-center items-center w-full mod:w-1/2">
          <Image
            src="/images/Enzo.png"
            width={400}
            height={400}
            alt="photo 1"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <h1 className="text-center md:text-start text-amarillo font-bold text-4xl p-2">
            ¡Bienvenido!
          </h1>
          <p className="p-2 text-xl text-white">
            Estas dentro de una comunidad muy apasionada por el fitness, el
            entrenamiento y los buen hábitos. Esta página tiene muchas cosas y
            ¡Te invito a mirar!
          </p>
          <div className="flex p-2">
            <Link
              className="bg-amarillo p-4 rounded-full text-black font-bold hover:bg-yellow-400 list-none w-fit cursor-pointer"
              href="/Contacto"
            >
              Vamos a hablar
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <h2 className="text-amarillo font-bold text-[50px] md:text-[100px] text-center p-4">
          SOBRE MÍ
        </h2>
        <div className="block md:flex">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/images/Enzo2.jpg"
              width={300}
              height={300}
              alt="photo 2"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h3 className="text-amarillo text-4xl font-bold p-4">Enzo Joves</h3>
            <p className="text-white p-4">
              Soy Profesor Nacional de Educación Física dedicado al
              entrenamiento personal y a sacar el máximo potencial a las
              personas, para tener una mejor calidad de vida tanto fisica como
              mentalmente. "Una organización eficiente es la base para acercarme
              a un resultado esperado". Por eso estoy dispuesto en acompañarte
              en este proceso y ser guía para lograr tus metas u objetivos.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Inicio;
