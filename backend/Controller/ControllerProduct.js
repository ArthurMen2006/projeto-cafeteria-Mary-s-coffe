//todas as importacoes
import * as ServiceProduct from '../Services/ServiceProduct.js'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()



//visualizar todos os produtos 
export async function viewAll(req,res) {
    try {
        const ViewAll= await ServiceProduct.getAll()
        res.status(200).json(ViewAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error})
    }
    
}

//visualizar um unico produto
export async function viewUnique(req,res) {
    try {
        const product_id= parseInt(req.params.id)
        const verification= await prisma.product.findUnique({where:{id:product_id}})
        if(!verification){
            return res.status(404).json({message:"product not found"})
        }
        const viewUnique= await ServiceProduct.getUnique(product_id)
        res.status(200).json({viewUnique})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error}) 
    }
}

//criar um produto 
export async function createProduct(req,res) {
    try {
        const {name}=req.body
        const verification= await prisma.product.findUnique({where:{name}})
        if(verification){
            return res.status(409).json({message:"product alredy exist"})
        }
        const creationProduct= await ServiceProduct.create(req.body)
        res.status(200).json({message:"successfully created product",creationProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error})
    }
}

//atualizar um produto
export async function updateProduct(req,res) {
    try {
        const product_id=parseInt(req.params.id)
        const updatedProduct = await ServiceProduct.update(product_id, req.body)
        res.status(200).json({message:"successfully update product", updatedProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error})       
    }
}

//deletar um produto
export async function deleteProduct(req,res) {
    try {
        const product_id= parseInt(req.params.id)
        const verification= await prisma.product.findUnique({where:{id:product_id}})
        if(!verification){
            return res.status(404).json({message:"product not found"})
        }
        const deleteProduct= await ServiceProduct.del(product_id)
        res.status(200).json({message:"successfully delete product",deleteProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"fatal error",error})        
    }
}