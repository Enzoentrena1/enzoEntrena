import { NextResponse } from "next/server";
import { prisma } from "@/libs/db";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request) {
  const { name, price, img, quantity } = await request.json();
  const newProduct = await prisma.product.create({
    data: {
      name,
      price,
      img,
      quantity,
    },
  });
  return NextResponse.json(newProduct);
}
