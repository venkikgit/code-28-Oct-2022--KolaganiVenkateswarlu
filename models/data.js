const mongoose = require('mongoose');

const path = require('path');

const dataSchema = new mongoose.Schema({
    Gender:{
        type : String,
        default:'Male'
    },
    HeightCm:{
        type:Number
    },
    WeightKg:{
        type:Number
    },
    BMI:{
        type:Number
    },
    BMICategory:{

    },
    Risk:{
        type:String
    }
},{
    timestamps:true
});

const Data = mongoose.model('Data',dataSchema);

module.exports = Data;