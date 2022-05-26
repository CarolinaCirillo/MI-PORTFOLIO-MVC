const express = require('express');
const app = express();
const mainRutas =require('./routes/main');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use (express.static(path.join(__dirname, 'public')))
app.use('/', mainRutas)

app.listen(3000 || process.env.PORT, ()=>
    console.log ('Servidor funcionando'));

