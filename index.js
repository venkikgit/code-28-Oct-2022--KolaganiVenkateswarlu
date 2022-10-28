const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Errror in running the server:${err}`)
    }else{
        console.log(`Server listening on port ${port}`);
    }
});