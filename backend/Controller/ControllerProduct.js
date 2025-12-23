import * as ServiceProduct from '../Services/ServiceProduct.js'
import dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

dotenv.config()

export async function viewAll(req,res) {
    try {
        const ViewAll= await ServiceProduct.viewProduct()
        res.status(200).json(ViewAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error})
    }
    
}

export async function createProduct(req,res) {
    try {
        const {name}=req.body
        const verification= await prisma.product.findUnique({where:{name}})
        if(verification){
            return res.status(404).json({message:"product alredy exist"})
        }
        const creationProduct= await ServiceProduct.create(req.body)
        res.status(200).json({message:"successfully created product",creationProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error})
    }
}