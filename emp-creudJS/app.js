const express = require('express')
const { json } = require('express/lib/response')
const mongoose = require('mongoose');
const router = require('./routes/employees');
const url = 'mongodb://localhost/employeeDB'; 


const app = express() //start express

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log(' server connected..')
})

app.use(express.urlencoded({extended:false}))

app.use(express.json()) //middleware

const employeeesRouter = require('./routes/employees')
app.use('/employees', employeeesRouter);

app.listen(4002, () => { //server listen
    console.log('we are live on port 4002')
})