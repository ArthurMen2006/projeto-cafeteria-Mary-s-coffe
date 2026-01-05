import * as ServiceRequest from '../Services/ServiceRequest.js'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createRequest(req, res) {
  try {
    const product_id = parseInt(req.body.product_id)
    const { quantity } = req.body

    if (!product_id) {
      return res.status(400).json({ message: "invalid product id" })
    }

    const product = await prisma.product.findUnique({
      where: { id: product_id }
    })

    if (!product) {
      return res.status(404).json({ message: "product not found" })
    }

    if (quantity > product.quantity) {
      return res.status(409).json({ message: "quantity excessive" })
    }

    const request = await ServiceRequest.create({
      product_id,
      quantity
    })

    res.status(201).json({message: "request created successfully",request})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "fatal error", error })
  }
}

export async function getAllRequests(req, res) {
  try {
    const requests = await ServiceRequest.getAll()
    res.status(200).json(requests)
  } catch (error) {
    res.status(500).json({ message: "fatal error", error })
  }
}

export async function getRequestById(req, res) {
  try {
    const id = parseInt(req.params.id)
    const request = await ServiceRequest.getUnique(id)

    if (!request) {
      return res.status(404).json({ message: "request not found" })
    }

    res.status(200).json(request)
  } catch (error) {
    res.status(500).json({ message: "fatal error", error })
  }
}

export async function deleteRequest(req, res) {
  try {
    const id = parseInt(req.params.id)
    await ServiceRequest.del(id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ message: "fatal error", error })
  }
}
