const express = require('express');
const app = express();
const mainRutas =require('./routes/main');
const path = require('path');


app.use (express.static(path.join(__dirname, 'public')))
app.use('/', mainRutas)

app.listen(3000, ()=>
    console.log ('Servidor funcionando'));

