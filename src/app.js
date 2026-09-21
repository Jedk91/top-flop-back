import express from "express"
import { User } from "./models/User"
import argon2 from 'argon2'

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).send('API Top-Flop OK')
})

app.post('/login', async (req,res) => {
    const {email, password} = req.body
    const user = await User.findOne({where : {email}})
    if (user === null) {
        return res.status(401).json({
            error : 'Vos identifiants sont erronés'})
        }
    const passwordCorrect = await argon2.verify(user.password, password)
    if (!passwordCorrect) {
        res.status(401).json({
            error: 'Vos identifiants sont erronés'
        }) 
        return
    }
})

app.listen(3000, () => {
    console.log(`🚀 Server lancé sur http://localhost:3000 🚀`);
});
