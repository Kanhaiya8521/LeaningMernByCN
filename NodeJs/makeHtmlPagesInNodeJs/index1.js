const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public');
//with extension
app.use(express.static(publicPath));
//withoutExtension
app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/index', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})
app.listen(5000);

