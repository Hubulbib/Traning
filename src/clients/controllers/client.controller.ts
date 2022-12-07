import {NextFunction, Request, Response} from 'express'
import clientService from '../services/client.service'

class ClientController {
    getClient = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params

            const response = await clientService.getClient(+id)

            res.json(response)

        } catch (err) {
            console.log(err)
        }
    }

    createClient = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body

            await clientService.createClient(data)

            res.status(201).json({message: 'Клиент успешно создан'})

        } catch (err) {
            console.log(err)
        }
    }

    updateClient = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params
            const data = req.body

            const response = await clientService.updateClient(+id, data)

            res.json(response)
        } catch (err) {
            console.log(err)
        }
    }

    deleteClient = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params

            const response = await clientService.deleteClient(+id)

            res.json({response, message: 'Клиент успешно удален'})
        } catch (err) {
            console.log(err)
        }
    }
}

export default new ClientController()