const getAllEmployee = 'SELECT * FROM employee';
const getEmployeById = 'SELECT * FROM employee WHERE id=?';
const insertEmploye = 'INSERT INTO employee (name, emp_code, salary) VALUES(?)'
const deleteEmploye = 'DELETE FROM employee WHERE id=?'
const updateEmploye = 'UPDATE employee SET ? WHERE id=' 
const updateOrAddEmploye = 'UPDATE employee SET ? WHERE id='

module.exports = {getAllEmployee , getEmployeById, insertEmploye, deleteEmploye, updateEmploye, updateOrAddEmploye};