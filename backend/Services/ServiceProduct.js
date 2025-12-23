import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function viewProduct() {
   return await prisma.product.findMany()
}



export async function create(data) {
   return await prisma.product.create({data:{
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      description: data.description
   }})
}
