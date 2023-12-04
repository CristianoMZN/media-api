
import express from 'express'
import dotenv from 'dotenv'
import { Router, Request, Response } from 'express'
import { Sequelize } from "sequelize"

dotenv.config()

const dbName:       string  =   process.env.DB_NAME     ?   process.env.DB_NAME : ''
const dbUser:       string  =   process.env.DB_USER     ?   process.env.DB_USER : ''
const dbHost:       string  =   process.env.DB_HOST     ?   process.env.DB_HOST : ''
const dbPassword:   string  =   process.env.DB_PASSWORD ?   process.env.DB_PASSWORD : ''

const videoRoute    =   require('./routes/video')
/*
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost,
});
*/
const app = express()

const route = Router()

const port = process.env.PORT

route.use('/video', videoRoute)

route.get('/', (req: Request, res: Response) => {
    res.json({ message: `Running Server at port ${port}` })
    console.log(`Receive GET at endpoint '/' to ${req.ip}`)
})

app.use(route)


app.listen(port, () => `server running on port ${port}`)