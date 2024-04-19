"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const pathname = usePathname();

  const navLink = [
    {
      name: "Inicio",
      href: "/Inicio",
    },
    {
      name: "Tienda",
      href: "/Tienda",
    },
    {
      name: "Servicios",
      href: "/Servicios",
    },
    {
      name: "Contacto",
      href: "/Contacto",
    },
  ];

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
            <div className="flex justify-around items-center h-16 bg-amarillo">
              <div>
                {navLink.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      href={link.href}
                      key={link.name}
                      className={
                        isActive ? "navNavbar after:w-[100%]" : "navNavbar"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
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
          <div className="space-y-1">
            {navLink.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <div className="text-black block text-center p-2">
                  <Link
                    href={link.href}
                    key={link.name}
                    className={isActive ? "font-bold text-VD" : "hover:text-VD"}
                    onClick={toggleNavbar}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
