import Image from "next/image";

const Contacto = () => {
  return (
    <div className=" mx-auto flex justify-center items-center w-[90%] p-20 max-w-[1300px] min-h-screen bg-BG-1">
      <div className="border-2 border-white shadow-md shadow-white md:flex min-h-[700px]">
        <div className="flex md:w-1/2 justify-center items-center bg-BG-1">
          <div className=" md:h-[70%] flex flex-col ">
            <div className="md:h-[25%] flex flex-col justify-center items-center">
              <div className="w-full flex flex-col items-center">
                <h1 className="text-amarillo font-bold text-center p-2 w-full text-xl">
                  ¡CONTACTATE CONMIGO!
                </h1>
                <p className="text-white text-center p-5 text-xs w-[60%]">
                  Estoy aquí para ayudarte. Escríbeme o llámame para
                  resolver cualquier duda o inquietud que tengas sobre mi servicios
                </p>
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <form
                action="#"
                className="flex flex-col gap-5 justify-center items-center w-[70%]"
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  className="font-thin text-black p-1 px-4 w-full bg-amarillo border border-blanco rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="font-thin text-black p-1 px-4 w-full bg-amarillo border border-blanco rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Mensaje"
                  className="font-thin text-black p-1 px-4 w-full pb-32 bg-amarillo border border-blanco rounded-lg"
                />
                <div className="w-full">
                  <button className="bg-amarillo text-black px-16 py-2 font-bold text-xl rounded-lg">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-amarillo md:rounded-tl-[200px] md:flex flex-col justify-center items-center p-4 mx-2 my-5 md:m-0">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-morado2 font-bold text-2xl w-[70%] text-start">
              HABLEMOS
            </h2>
            <div className="w-full flex space-x-3 justify-center items-center p-4">
              <i className="bi bi-envelope-fill text-xl text-morado2"></i>
              <p className="text-morado2 text-xl text-start w-full">
                toCorreo@gmail.com
              </p>
            </div>
            <div className="w-full flex space-x-3 justify-center items-center p-4">
              <i className="bi bi-telephone-fill text-xl text-morado2"></i>
              <p className="text-morado2 text-xl text-start w-full">
                +54 9 0000000000
              </p>
            </div>
            <div className="w-full flex space-x-3 justify-center items-center p-4">
              <i className="bi bi-clock-fill text-xl text-morado2"></i>

              <p className="text-morado2 text-xl text-start w-full">
                Lunes a Viernes: 9 a 20hs
              </p>
            </div>
            <div className="w-full p-4">
              <div className="flex w-full justify-between items-start space-x-4">
                <a
                  href="#"
                  className="bg-morado2 p-1 rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <i className="bi bi-instagram text-xl text-blanco"></i>
                </a>

                <a
                  href="#"
                  className="bg-morado2 p-1 rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <i className="bi bi-linkedin text-xm text-blanco"></i>
                </a>

                <a
                  href="#"
                  className="bg-morado2 p-1 rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <i className="bi bi-tiktok text-xl text-blanco"></i>
                </a>
                <div>
                  <Image src={"/images/Logo.png"} width={100} height={100} alt="Logo"></Image>
                </div>
                <div className="flex justify-end items-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
