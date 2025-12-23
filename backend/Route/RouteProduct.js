import * as ControllerProduct from '../Controller/ControllerProduct.js'
import express from 'express'

const router = express.Router()

router.get('/product',ControllerProduct.viewAll)
router.post('/product',ControllerProduct.createProduct)


export default router