import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="py-10 w-[80%] mx-auto">
      <h2 className="text-white text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-white">No hay productos en el carrito</p>
      ) : (
        <ul className="bg-BG-1 p-4 rounded-md">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-16 h-16 mr-2 rounded-md" />
                <span>{item.name}</span>
              </div>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
