"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

function EditProducts({ product }) {
  const router = useRouter();
  return (
    <div className="m-2 ">
      <div className="bg-BG-2 text-gray-300 w-[500px] h-[200px] flex rounded-md">
        <div className="w-[30%] h-full overflow-hidden flex justify-center items-center p-5">
          <div className="overflow-hidden flex justify-center items-center w-[190px] h-[190px]">
          <Image
            src={product.img}
            alt="photo"
            width={1000}
            height={1000}
          ></Image>
          </div>
        </div>
        <div className="w-[70%] h-full flex justify-center items-center flex-col">
          <h3 className="w-full p-3 font-bold">{product.name}</h3>
          <p className="w-full text-amarillo px-3 font-bold">$ {product.price}</p>

          <div className=" w-full px-3 py-2">
          <button
          className="text-black bg-amarillo px-6 py-1 rounded-md"
            onClick={() => {
              router.push("/products/edit/" + product.id);
            }}
          >
            Editar
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
