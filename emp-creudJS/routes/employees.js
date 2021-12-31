const express = require('express')
const router = express.Router()
const Employee = require('../model/employee')
// const employee = require('../model/employee')

//create requests async request
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.send(employees) 
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        profession: req.body.profession,
        phone: req.body.phone,
        salary: req.body.salary,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const e1 = await employee.save()
        res.send(e1)
    } catch (err) {
        res.send("Error" + err)
    }
})
//for edit
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.send(employee)
    } catch (err) {
        res.send('Error' + err)
    }
})

//put (update) for update
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        employee.name = req.body.name
        employee.profession = req.body.profession
        employee.phone = req.body.phone
        employee.salary = req.body.salary
        employee.email = req.body.email
        employee.password = req.body.password
        employee.confirmpassword = req.body.confirmpassword

        const e1 = await employee.save()
        res.send(e1)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
    const e1 = await employee.remove()
    res.json(e1)
    } catch (err) {
        res.send('Error' + err)
    }
})

module.exports = router