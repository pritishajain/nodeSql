const express = require('express');
const { getAllEmployees, getEmployeeById, insertEmployeeData, deleteEmployeeData, updateEmployeeData, updateOrAddEmployeeData } = require('../controller/crudController');
const  crudRoutes = express.Router();

crudRoutes.get('/employees', getAllEmployees)
crudRoutes.get('/employees/:id', getEmployeeById)
crudRoutes.post('/employees', insertEmployeeData)
crudRoutes.delete('/employees/:id', deleteEmployeeData)
crudRoutes.patch('/employees', updateEmployeeData)
crudRoutes.put('/employees', updateOrAddEmployeeData)


// app.post('/employees', (req, res) => {
//     
// })

// app.delete('/employees/:id', (req, res) => {
//    
// })

// app.patch('/employees', (req, res) => {
//    
// })

// app.put('/employees', (req, res) => {
//    
// })

module.exports = crudRoutes;