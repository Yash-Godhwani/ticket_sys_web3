const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejsMate = require('ejs-mate')
const app = express()

app.engine('ejs',ejsMate)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// mongoose.connect('mongodb://127.0.0.1:27017/bank')
//     .then(() => {
//         console.log('mongoose connected');
//     })
//     .catch((e) => {
//         console.log(e);
//     });

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/booking', (req, res) => {
    res.render('booking')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.listen(3000, () => {
    console.log('connetion open')
})