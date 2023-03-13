const express = require('express');
const app = express();
const routes = require('./routes/routes')
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const con = require('./connection');

app.use('/api',routes);

app.listen('3000',()=>{
    console.log("listening")
})