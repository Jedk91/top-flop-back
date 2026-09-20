import express from "express"

const app = express()

app.get('/', (req,res) => {
    res.status(200).send('API Top-Flop OK')
})

app.use(express.json())