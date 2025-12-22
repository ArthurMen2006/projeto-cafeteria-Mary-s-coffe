import * as ServiceProduct from '../Services/ServiceProduct.js'
import dotenv from 'dotenv'
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