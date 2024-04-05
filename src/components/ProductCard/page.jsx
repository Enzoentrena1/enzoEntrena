'use client'
import React, { useState } from "react";
import Image from "next/image";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import products from "./db";

const ProductCard = () => {
  // Estado para mantener los productos seleccionados en el carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Producto Agregado")
  };

  return (
    <div className="py-10 w-[80%] mx-auto">
      <ul className="flex justify-around w-full flex-wrap gap-5 bg-BG-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-BG-2 rounded-md p-5 flex flex-col space-x-3 justify-center items-center min-w-[300px]"
          >
            <div>
              <Image
                className="rounded-md"
                src={product.img}
                width={200}
                height={200}
                alt="product image"
              />
            </div>
            <div className="pt-5">
              <p className="text-white p-2 font-bold text-xl">{product.name}</p>{" "}
              <p className="text-amarillo p-2">{product.price}</p>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-3 p-2 items-center justify-center bg-BG-1 rounded-md">
                <div>
                  <IoIosRemoveCircle className="text-amarillo text-[30px]" />
                </div>
                <div className="text-white text-xl">1</div>
                <div>
                  <IoIosAddCircle className="text-amarillo text-[30px]" />
                </div>
              </div>
              <button
                className="flex justify-center items-center px-8 py-1 bg-amarillo rounded-3xl"
                onClick={() => addToCart(product)} // Llamada a la función addToCart al hacer clic en el botón del carrito
              >
                <FaCartShopping className="text-black bg-amarillo text-[40px]" />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
