const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// withoutExtension
app.get('', (req, res)=>{
    console.log(__dirname);
    return res.render('home', {title: "My Contacts List"});
    // res.sendFile(`${publicPath}/home.html`)
});

app.get('/practice', (req, res)=>{
    return res.render('practice', {
        title: "Contacts List"
    });
})

// app.get('/about', (req, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/index', (req, res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('*', (req, res)=>{
//     res.sendFile(`${publicPath}/nopage.html`)
// })
app.listen(5000);

