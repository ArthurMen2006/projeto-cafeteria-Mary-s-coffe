import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function getAll() {
  return prisma.request.findMany({
    include: {
      product: true
    }
  })
}

export async function getUnique(id) {
  return prisma.request.findUnique({
    where: { id },
    include: {
      product: true
    }
  })
}

export async function create(data) {
  const product = await prisma.product.findUnique({
    where: { id: data.product_id }
  })

  const finalPrice = parseFloat(product.price) * data.quantity

  const request = await prisma.request.create({
    data: {
      quantity: data.quantity,
      total: finalPrice,
      productId: data.product_id
    }
  })


  await prisma.product.update({
    where: { id: data.product_id },
    data: {
      quantity: product.quantity - data.quantity
    }
  })

  return request
}

export async function del(id) {
  return prisma.request.delete({
    where: { id }
  })
}
