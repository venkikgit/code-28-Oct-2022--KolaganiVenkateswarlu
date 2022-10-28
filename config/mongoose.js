const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const url = process.env.DATABASE;

const db = mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })