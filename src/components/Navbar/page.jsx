"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-amarillo w-full fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/images/Logo.png" alt="Logo" className="w-12 h-12" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className="text-black hover:bg-yellow-400 font-bold p-2 h-16 items-center flex"
              >
                <p>Inicio</p>
              </Link>
              <Link
                href="/Tienda"
                className="text-black hover:bg-yellow-400 font-bold p-2 h-16 items-center flex"
              >
                Tienda
              </Link>
              <Link
                href="/Servicios"
                className="text-black hover:bg-yellow-400 font-bold p-2 h-16 items-center flex"
              >
                Servicios
              </Link>
              <Link
                href="/Contacto"
                className="text-black hover:bg-yellow-400 font-bold p-2 h-16 items-center flex"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-black block hover:bg-yellow-400 text-center font-bold p-2"
            >
              Inicio
            </Link>
            <Link
              href="/Tienda"
              className="text-black block hover:bg-yellow-400 text-center font-bold p-2"
            >
              Tienda
            </Link>
            <Link
              href="/Servicios"
              className="text-black block hover:bg-yellow-400 text-center font-bold p-2"
            >
              Servicios
            </Link>
            <Link
              href="/Contacto"
              className="text-black block hover:bg-yellow-400 text-center font-bold p-2"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
