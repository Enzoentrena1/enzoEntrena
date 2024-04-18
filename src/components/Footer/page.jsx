"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full justify-around items-start bg-amarillo py-4">
        <div className="w-full md:w-auto">
          <h2 className="text-black dark:text-txt1 font-bold w-full text-center p-2">
            Informacion de Contacto
          </h2>
          <div className="flex justify-start items-center w-full p-2">
            <i className="bi bi-envelope-fill nbm text-xl"></i>
            <p className="text-black ml-2 font-bold">
              <spam>TuCorreo@gmail.com</spam>
            </p>
          </div>
          <div className="flex justify-start items-center w-full p-2">
            <i className="bi bi-telephone-fill nbm text-xl "></i>
            <p className="text-black ml-2 font-bold">+54 9 0000000000</p>
          </div>
          <div className="flex justify-start items-center w-full p-2">
            <i className="bi bi-clock-fill nbm text-xl"></i>
            <p className="text-black ml-2 font-bold">
              Lunes a Viernes: 9 - 20hs
            </p>
          </div>
        </div>
        {/* Mapa del sitio */}
        <div className="w-full md:w-auto">
          <h2 className="text-black dark:text-txt1 font-bold p-2 text-center">
            Mapa del sitio
          </h2>
          <div className="w-full">
            <nav className="flex flex-col justify-start items-start text-black">
              <Link href="/">
                <div className="p-2 font-bold text-black">
                  <p>Inicio</p>
                </div>
              </Link>

              <Link href="/Tienda">
                <div className="p-2 font-bold text-black">
                  <p>Tienda</p>
                </div>
              </Link>

              <Link href="/Servicios">
                <div className="p-2 font-bold text-black">
                  <p>Servicios</p>
                </div>
              </Link>

              <Link href="/Contacto">
                <div className="p-2 font-bold text-black">
                  <p>Contacto</p>
                </div>
              </Link>
            </nav>
          </div>
        </div>
        {/* Logo Y redes */}
        <div className=" flex flex-col items-center justify-center w-full md:w-auto py-5">
          <div className="w-full h-full flex justify-center items-center">
            <Link href="/" className="w-32 h-32">
              <Image
                src="/images/Logo.png"
                width={800}
                height={800}
                alt="Logo"
              ></Image>
            </Link>
          </div>
          <div>
            <ul className="flex pt-6">
              <li className="nbm text-2xl p-2">
                <a href="#" target="_blank" className="hover:theShadow-orange">
                  <FaInstagram className="text-black hover:text-yellow-400 transition-all" />
                </a>
              </li>
              <li className="nbm text-2xl p-2">
                <a href="#" target="_blank">
                  <FaFacebookSquare className="text-black hover:text-yellow-400 transition-all" />
                </a>
              </li>
              <li className="nbm text-2xl p-2">
                <a href="#" target="_blank">
                  <FaTiktok className="text-black hover:text-yellow-400 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Texhref de derechos de auhrefr */}
      <div className="flex justify-center items-center bg-amarillo">
        <p className="text-black font-bold text-center">
          © 2024 Zalazar Lautaro. hrefdos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export { Footer };

<div className="bg-blanco">
  <IoIosArrowUp className="w-full h-full" />
</div>;
