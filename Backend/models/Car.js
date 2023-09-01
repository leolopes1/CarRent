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
        required:false,
    },
    preco:{
        type: Number,
        required:false
    }
})

export default mongoose.model('Car', carSchema)