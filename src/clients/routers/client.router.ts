import {Router} from 'express'
import clientController from '../controllers/client.controller'

const router = Router()

router.get('/client/:id', clientController.getClient)

router.post('/client/create', clientController.createClient)

router.put('/client/:id/update', clientController.updateClient)

router.delete('/client/:id/delete', clientController.deleteClient)

export default router