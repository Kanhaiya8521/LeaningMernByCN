const express = require('express');
const app = express();
app.get('', (req, res)=>{
    res.send('Hello, This is Hone page');
});

app.get('/about', (req, res)=>{
    res.send('Hello, This is About page');
});

app.listen(7000);