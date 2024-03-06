const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const crudRoutes = require('./routes/crudRoute')

app.use(bodyParser.json())

app.use('/', crudRoutes);

// 

app.listen(5000, () => {
    console.log("listening to server at port 3000");
})