import RouteProduct from './Route/RouteProduct.js'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT=process.env.PORT 
const app= express()

app.use(express.json())

app.use('/',RouteProduct)

app.listen(PORT,()=>{
    console.log(`executing server in http://localhost:${PORT}`);
    
})