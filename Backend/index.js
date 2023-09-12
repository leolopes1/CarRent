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


app.put('/cars/:id',async (req, res) => {
    const carId = req.params.id;
    const result = await Car.replaceOne({_id: carId,}, req.body)
    console.log(result);
    res.json({updatedCount : result.modifiedCount})
});
app.delete('/cars/:id',async (req, res) => {
    const carId = req.params.id;
    const result = await Car.deleteOne({_id: carId,}, req.body)
    console.log(result);
    res.json({updatedCount : result.modifiedCount})
});

app.get('/cars', async (req, res) => {
    // headers[{ key:'Acess-Control-Allow-Origin', value: 'true' }]
    const cars = await Car.find()

    return res.json(cars)

})
app.get('/cars/:id', async (req, res) => {
    // headers[{ key:'Acess-Control-Allow-Origin', value: 'true' }]
    const carId = req.params.id;
    const result = await Car.findById({_id: carId,},req.body)

    return res.json(result)

})

mongoose.connect('mongodb+srv://leonardo:hU5oPlZgGYCDxH8P@cluster0.jfumh9u.mongodb.net/?retryWrites=true&w=majority',)
.then(() => console.log("Banco de Dados Conectado"))
.catch(() => console.log("Falhou a conexão"))

app.listen(3000)