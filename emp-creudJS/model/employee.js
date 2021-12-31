const mongoose = require('mongoose')

//create a schema

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    profession: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee
// module.exports = mongoose.model('Employee', employeeSchema)//employee (collection name must be in camelcase and singular)
