import { Router, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({message: `responde to ${req.url}`})
})

module.exports = router