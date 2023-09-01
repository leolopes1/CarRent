import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import Car from "./models/Car.js"

const app = express()
// const cors = require('cors');

app.use(express.json())
app.use(cors())
 
app.post('/cars', async (req, res) => {
    const car = req.body

    const newCar = await Car.create(car)

    return res.json(newCar)

})

app.get('/cars', async (req, res) => {
    // headers[{ key:'Acess-Control-Allow-Origin', value: 'true' }]
    const cars = await Car.find()

    return res.json(cars)

})

mongoose.connect('mongodb+srv://leonardo:JcAYnzFlZ0NgcPwl@cluster0.u5t74kt.mongodb.net/?retryWrites=true&w=majority',)
.then(() => console.log("Banco de Dados Conectado"))
.catch(() => console.log("Falhou a conexão"))

app.listen(3000)