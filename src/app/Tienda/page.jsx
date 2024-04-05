'use client'
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard/page";
import Cart from "@/components/Cart/page";

const Tienda = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="mt-16 min-h-screen bg-BG-1">
      <ProductCard addToCart={(product) => setCartItems([...cartItems, product])}/>
      <Cart cartItems={cartItems}/>
    </div>
  );
};

export default Tienda;
