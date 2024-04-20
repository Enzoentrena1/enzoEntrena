import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

export const Carrito = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const redirectToWhatsApp = () => {
    const cartContent = allProducts
      .map(
        (product) => `${product.quantity} x ${product.name} - $${product.price}`
      )
      .join("\n");
    const cartTotal = `Total a pagar: $${total}`;
    const fullContent = `Hola me gustaría comprar los siguientes productos:\n\n${cartContent}\n\n${cartTotal}`;

    // Crear un elemento temporal para copiar al portapapeles
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = fullContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    // Redirigir al enlace de WhatsApp con el contenido del carrito prellenado en el mensaje
    window.open(
      `https://api.whatsapp.com/send?phone=3755586849&text=${encodeURIComponent(
        fullContent
      )}`,
      "_blank"
    );
  };

  return (
    <header className="flex max-w-[400px] text-white fixed right-[1%] top-[10%]">
      <div className=" w-full">
        <div className="relative w-full flex justify-end items-center rounded-full cursor-pointer">
          <div
            className=" w-[50px] h-[50px] bg-amarillo rounded-full p-2 flex justify-center items-center hover:shadow-md hover:shadow-amarillo transition-all duration-300"
            onClick={() => setActive(!active)}
          >
            <CiShoppingCart className="text-[30px] text-black" />
          </div>
          <div
            className="absolute top-0 right-0 bg-black w-5 h-5 flex items-center justify-center rounded-full text-xs"
            onClick={() => setActive(!active)}
          >
            <span className="text-amarillo">{countProducts}</span>
          </div>
        </div>

        <div
          className={`flex flex-col justify-around w-full bg-BG-2 p-3 rounded-md ${
            active ? "block" : "hidden"
          }`}
        >
          {allProducts.length ? (
            <>
              <div className="">
                {allProducts.map((product) => (
                  <div key={product.id}>
                    <div className="flex justify-between items-center space-x-3">
                      <span>{product.quantity}</span>
                      <div className="flex justify-between w-full p-3 mt-1 space-x-3">
                        <p className=" ">{product.name}</p>
                        <span className="  text-xl">${product.price}</span>
                      </div>
                      <div className="flex justify-center items-center">
                        <MdDelete
                          className="text-[20px] cursor-pointer text-red-800"
                          onClick={() => onDeleteProduct(product)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="  flex justify-between items-center space-x-3">
                <div className="flex w-full justify-end items-center space-x-3">
                  <p className="font-bold text-xl text-end">Total:</p>

                  <span className="text-xl text-end">${total}</span>
                </div>
                <div className="flex justify-center items-center">
                  <IoIosClose
                    onClick={onCleanCart}
                    className="text-[40px] cursor-pointer text-red-800"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={redirectToWhatsApp}
                  className="bg-green-500 hover:shadow-md hover:shadow-green-700 text-black font-bold py-2 px-4 rounded flex justify-center items-center space-x-3 transition-all duration-300"
                >
                  <IoLogoWhatsapp />
                  <p>Realizar Pedido</p>
                </button>
              </div>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
