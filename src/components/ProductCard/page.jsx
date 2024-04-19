"use client";
import { FaCartPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";

function ProductCard({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  // Variable donde se guardan los productos
  const [products, setProducts] = useState([]);
  //  Trae los productos desde la base de datos al FRONT
  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.NODE_ENV === 'production' ? 'https://enzo-entrena.vercel.app/api/products' : 'http://localhost:3000/api/products';
        const res = await fetch(url);
        const productsData = await res.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className=" text-white min-h-screen justify-center items-center flex flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between items-center gap-5 m-5 bg-BG-2 h-[500px] w-[300px] "
        >
          <div className="w-[300px] h-[300px] bg-gray-300 flex justify-center items-center overflow-hidden">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="px-5">
            <h3 className="font-bold px-2">{product.name}</h3>
            <p className="font-thin px-2 text-amarillo">
              $ {product.price.toLocaleString("es-AR")}
            </p>
            <div className="w-full py-3">
              <div
                className="bg-amarillo hover:bg-black text-black hover:text-amarillo transition-all duration-300 space-x-3 flex justify-center items-center w-[250px] h-[50px]  cursor-pointer"
                onClick={() => onAddProduct(product)}
              >
                <FaCartPlus className="text-xl" />
                <p>Agregar al Carrito</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
