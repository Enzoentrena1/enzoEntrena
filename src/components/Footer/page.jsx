"use client";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isClick, setIsClick] = useState(false);
  const pathname = usePathname();

  const handleSetActiveLink = (href) => {
    setActiveLink(href);
  };

  const navLink = [
    {
      name: "Inicio",
      href: "/",
      icon: FaHome,
    },
    {
      name: "Tienda",
      href: "/Tienda",
      icon: FaShoppingBag,
    },
    {
      name: "Servicios",
      href: "/Servicios",
      icon: MdOutlineSportsGymnastics,
    },
    {
      name: "Contacto",
      href: "/Contacto",
      icon: MdContactMail,
    },
  ];
  const Icon = navLink.icon;
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full justify-around items-start bg-amarillo py-4">
        <div className="w-full md:w-auto">
          {/* Informacion de contacto */}
          <h2 className="text-black dark:text-txt1 w-full text-center p-2">
            Informacion de Contacto
          </h2>
          <div className="flex justify-start items-center w-full p-2 space-x-3">
            <MdEmail />
            <p>Enzojoves@gmail.com</p>
          </div>
          <div className="flex justify-start items-center w-full p-2 space-x-3">
            <FaPhone />
            <p className="text-black">3755-662970</p>
          </div>
          <div className="flex justify-start items-center w-full p-2 space-x-3">
            <FaClock />
            <p className="text-black ">Lunes a Viernes: 9 - 20hs</p>
          </div>
        </div>
        {/* Mapa del sitio */}
        <div className="w-full md:w-auto">
          <h2 className="text-black dark:text-txt1 p-2 text-center">
            Mapa del sitio
          </h2>
          <div className="w-full">
            <nav className="flex flex-col justify-start items-start text-black">
              {navLink.map((link) => {
                const isActive = pathname.startsWith(link.href);
                const Icon = link.icon;

                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={
                      pathname === link.href
                        ? "font-bold text-VD p-2 font-mono"
                        : "hover:text-VD p-2 font-mono"
                    }
                  >
                    <div className="p-2 gap-5 flex justify-center items-center">
                      <Icon />
                      {link.name}
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        {/* Logo Y redes */}
        <div className=" flex flex-col items-center justify-center w-full md:w-auto py-5">
          <div className="w-full h-full flex justify-center items-center">
            <Link href="/" className="w-32 h-32">
              <img
                src="/images/Logo.png"
                alt="Logo"
                className="w-[100px] h-[100px]"
              />
            </Link>
          </div>
          <div>
            <ul className="flex pt-6">
              <li className="text-2xl p-2">
                <a
                  href="https://www.instagram.com/enzo_entrena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  className="hover:theShadow-orange"
                >
                  <FaInstagram className="text-black hover:text-IG transition-all" />
                </a>
              </li>

              <li className="text-2xl p-2">
                <a
                  href="https://wa.me/3755662970"
                  target="_blank"
                  className="hover:theShadow-orange"
                >
                  <FaWhatsapp className="text-black hover:text-WP transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Derechos Reservados */}
      <div className="flex justify-center items-center bg-amarillo space-x-3">
        <p>Desarrollado por</p>
        <div className=" text-black hover:text-IGH font-bold">
          <a
            href="https://www.instagram.com/zalazar_developer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="flex"
          >
            Zalazar Lautaro
            <FaInstagram className="text-xl cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export { Footer };
