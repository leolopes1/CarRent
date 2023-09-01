import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required:true
        
    },
    marca: {
        type: String,
        required:true
        
    },
    ano:{
        type:Number,
        required:true
    },
    isDisponivel:{
        type:Boolean,
        required:true,
    },
    preco:{
        type: Number,
        required:true
    }
})

export default mongoose.model('Car', carSchema)