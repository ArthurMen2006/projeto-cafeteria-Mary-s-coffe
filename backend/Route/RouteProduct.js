//todas as importacoes
import * as ControllerProduct from '../Controller/ControllerProduct.js'
import express from 'express'

const router = express.Router()
//visualizar todos
router.get('/product',ControllerProduct.viewAll)
//visualizar unico
router.get('/product/:id',ControllerProduct.viewUnique)
//criar
router.post('/product',ControllerProduct.createProduct)
//atualizar
router.put('/product/:id',ControllerProduct.updateProduct)
//deletar
router.delete('/product/:id',ControllerProduct.deleteProduct)



export default router