import express from 'express'
import dotenv from 'dotenv'
import RouteRequest from './Route/RouteRequest.js'
import RouteProduct from './Route/RouteProduct.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/', RouteProduct)
app.use('/', RouteRequest)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
