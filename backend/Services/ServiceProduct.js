import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function viewProduct() {
   return await prisma.product.findMany()
}