const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config({path: 'config/config.env'});



const port = process.env.PORT 

const app = express();
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(port, () => {
    console.log("Server is up and running!");
})




