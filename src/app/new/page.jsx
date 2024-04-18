"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [img, setImg] = useState("");
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    if (params.id) {
      fetch(`/api/products/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setPrice(data.price);
          setImg(data.img);
          setQuantity(data.quantity);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/products/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, price, img, quantity }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({ name, price, img, quantity }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = await res.json();
    }
    router.push("/Tienda");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-16 p-10">
      <form
        className="bg-BG-2 text-white p-10 sm:w-1/2 w-full"
        onSubmit={onSubmit}
      >
        <label htmlFor="name" className="font-bold text-sm text-white">
          Nombre de producto
        </label>
        <input
          id="name"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label htmlFor="price" className="font-bold text-sm text-white">
          Precio:
        </label>
        <input
          id="price"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Precio del producto"
          type="number"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          value={price}
        ></input>

        <label htmlFor="quantity" className="font-bold text-sm text-white">
          quantity
        </label>
        <input
          id="quantity"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="quantity"
          type="number"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
        ></input>

        <label htmlFor="img" className="font-bold text-sm text-white">
          URL Imagen
        </label>
        <input
          id="img"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="URL"
          onChange={(e) => setImg(e.target.value)}
          value={img}
        ></input>

        <div className=" flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Crear
          </button>

          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={async () => {
                const res = await fetch(`/api/products/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                console.log(data);
                router.push("/");
                router.refresh("/");
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
