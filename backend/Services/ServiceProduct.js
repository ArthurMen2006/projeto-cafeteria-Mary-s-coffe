//todas as importacoes
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//visualizar todos os produtos
export async function getAll() {
   return await prisma.product.findMany()
}

//visualizar apenas um unico produto
export async function getUnique(product_id) {
   return await prisma.product.findUnique({
      where:{id:product_id}
   })
}

//criar produto
export async function create(data) {
   return await prisma.product.create({
      data: {
         name: data.name,
         price: data.price,
         quantity: data.quantity,
         description: data.description
      }
   })
}

//atualizar informacoes dos produtos
export async function update(product_id,data) {
   return await prisma.product.update({
      where:{id:product_id},
      data: {
         name: data.name,
         price: data.price,
         quantity: data.quantity,
         description: data.description
      }
   })
}

//deletar os produtos
export async function del(product_id) {
   return await prisma.product.delete({where:{id:product_id}})
}
