import express from 'express'
import * as ControllerRequest from '../Controller/ControllerRequest.js'

const router = express.Router()

router.post('/request', ControllerRequest.createRequest)
router.get('/request', ControllerRequest.getAllRequests)
router.get('/request/:id', ControllerRequest.getRequestById)
router.delete('/request/:id', ControllerRequest.deleteRequest)

export default router
