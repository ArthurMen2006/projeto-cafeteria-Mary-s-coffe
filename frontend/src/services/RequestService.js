import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export async function createRequest(product_id, quantity) {
    const response = await api.post("/request",{
        product_id: product_id,
        quantity: quantity
    })    
    return response.data
}