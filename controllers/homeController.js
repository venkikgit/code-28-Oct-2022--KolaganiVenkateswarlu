const Data = require('../models/data');
const mongoose = require('mongoose');
module.exports.home = function (req,res){
    Data.find({},function(err,data){
        if (err) {
            console.log('Error in getting data');
            return;
        }
        // console.log(data);
        data.map((item) =>{
            let weight = item.WeightKg;
            let height = item.HeightCm;
            let bmi = parseFloat(weight*100/height*100/height).toFixed(1);
            let bmic ='';
            let risk = ''
            if(bmi >= 40){
                bmic = 'Very severely obese';
                risk = 'Very high risk';
            }else if(bmi >=35){
                bmic = 'Severely obese';
                risk ='High';
            }else if( bmi>=30){
                bmic = 'Moderately obese';
                risk = 'Medium risk';
            }else if(bmi >= 25){
               bmic = 'Overweight';
               risk = 'Enhanced risk';
            }else if(bmi >=18.5){
                bmic = 'Normal weight';
                risk = 'Low risk';

            }else {
                bmic = 'underweight';
                risk = 'Malnutrition risk';
            }
            item.BMI = bmi;
            item.BMICategory = bmic;
            item.Risk = risk;

        })
        return res.render('home',{
            title:'BMI Monitoring Info',
            bmi_data: data,
        });
    })
}

module.exports.creatNewData = function(req,res){

    Data.create({
        Gender: req.body.Gender,
        WeightKg: req.body.WeightKg,
        HeightCm: req.body.HeightCm,
    },function(err,newData){
        if(err){
            console.log('Error in calculating new data BMI');
        }
        console.log(newData);

        return res.redirect('back');
    })
}

// const { json } = require('body-parser');
// const fs = require('fs');
// const data = require('../data/data.json');
// fs.readFile('\data/data.json','utf-8',(err,jsonString)=>{
//     if(err) throw err;
//     const data = JSON.parse(jsonString);
//     console.log(data[1].HeightCm);
// })

// const newData =[{
//     'id':121,
//     'Name':'Rani'
// }]
// console.log(data);
// fs.writeFile('/data\data.json', JSON.stringify(newData,null,2),(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Writing is done');
// })
// module.exports.home = function(req,res){

//     return res.render('home',{
//         title:'BMI Calculator'
//     })
// }