import axios from 'axios'

const api= axios.create({
    baseURL:"http://localhost:3001"
})

export async function getAllProducts() {
    const response = await api.get("/products")
    return response.data
} 