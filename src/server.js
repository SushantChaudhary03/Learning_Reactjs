import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/login', (req, res)=>{
    res.send({
        token: 'test123'
    })
})

app.listen(5000, ()=> console.log('API is runnning'))