import express from 'express'
import 'dotenv/config'

import clientRouter from './src/clients/routers/client.router'

const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.use('/api', clientRouter)

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`))