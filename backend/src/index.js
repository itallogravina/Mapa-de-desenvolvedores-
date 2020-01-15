const express = require('express');
const mogoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MongoDB (banco de dados não relacinal)

mogoose.connect('mongodb+srv://admin:admin@cluster0-xeakx.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true,
 useUnifiedTopology: true,
 });

app.use(express.json());
app.use(routes);



app.listen(3333);