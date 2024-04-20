import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacto = () => {
  return (
    <div className="flex justify-center items-center p-2 my-20 md:min-h-screen">
      <div className="bg-BG-2 p-5 border-amarillo border  rounded-md max-w-[400px]">
        <h1 className="text-white font-bold text-3xl p-5 text-center">
          ¡Contáctate conmigo!
        </h1>
        <p className="text-white text-center">
          Para rutinas de entenamiento, servicios de entrenamiento personal u
          cualquier duda que tengas.
        </p>
        <div className="text-white flex md:block justify-around p-5">
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&to=enzojoves@gmail.com"
              target="_blank"
              className="border-amarillo border flex justify-center items-center space-x-2 bg-blue-400 hover:bg-blue-800 mt-2 p-3 rounded-md transition-all duration-300"
            >
              <MdEmail className="text-black text-2xl" />
              <p className="text-black text-xl hidden md:block">Mail</p>
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/3755662970"
              target="_blank"
              className="border-amarillo border flex justify-center items-center space-x-2 bg-WP mt-2 p-3 rounded-md hover:bg-WPH transition-all duration-300"
            >
              <FaWhatsappSquare className="text-black text-2xl" />
              <p className="text-black text-xl hidden md:block">WhatsApp</p>
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/enzo_entrena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="border-amarillo border flex justify-center items-center space-x-2 bg-IG mt-2 p-3 rounded-md hover:bg-IGH transition-all duration-300 text-black"
            >
              <FaInstagramSquare className="text-2xl" />
              <p className="text-black text-xl hidden md:block">Instagram</p>
            </a>
          </div>
          {/* <div>
            <a
              href="#"
              className="flex justify-center items-center space-x-2 bg-blue-400 mt-2 p-3 rounded-md hover:bg-blue-800 transition-all duration-300"
            >
              <FaFacebookSquare />
              <p>Facebook</p>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
