const { getAllEmploye, getOneEmployeeById, insertEmployee, deleteEmployee, updateOrAddEmployee, updateEmployee } = require('../service/crudService');

const getAllEmployees = (req, res) => {
  getAllEmploye(req, res)
}

const getEmployeeById = (req, res) => {
  getOneEmployeeById(req, res);
}

const insertEmployeeData = (req, res) => {
  insertEmployee(req, res);
}

const deleteEmployeeData = (req, res) => {
  deleteEmployee(req, res);
}

const updateEmployeeData = (req, res) => {
  updateEmployee(req, res);
}

const updateOrAddEmployeeData = (req, res) => {
  updateOrAddEmployee(req, res);
}

module.exports = { getAllEmployees, getEmployeeById, insertEmployeeData, deleteEmployeeData, updateEmployeeData, updateOrAddEmployeeData };