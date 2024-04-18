import EditProducts from "@/components/EditProducts/page";
import SignOut from "@/components/SignOut/page";
import { prisma } from "@/libs/db";
import Link from "next/link";

async function loadProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await loadProducts();
  return (
    <>
      <section className="mt-20 min-h-screen w-[90%] mx-auto bg-BG-1">
        <div className="flex">
          <Link
            href="/new"
            className="px-6 py-2 bg-amarillo text-black font-bold flex justify-center items-center w-fit m-2 rounded-md"
          >
            <p>Crear</p>
          </Link>
          <SignOut />
        </div>
        <div className="flex flex-wrap">
          {products.map((product) => (
            <EditProducts product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}
