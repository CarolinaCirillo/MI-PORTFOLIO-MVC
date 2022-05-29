const express = require('express');
const app = express();
const mainRutas = require('./routes/main');
const path = require('path');
const { ppid } = require("process");
const port = 3000;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.use (express.static(path.join(__dirname, '/public')))
app.use('/', mainRutas)

app.listen(process.env.PORT || 3000,function () {
    console.log(`App listening at http://localhost:${port}`)
    console.log(__dirname)
})
