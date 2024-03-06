const { getAllEmployee, getEmployeById, insertEmploye, updateEmploye, deleteEmploye, updateOrAddEmploye } = require('../repository/query')
const db = require('../db');

const getAllEmploye = (req, res) => {
    db.query(getAllEmployee, (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result)
    })
}

const getOneEmployeeById = (req, res) => {
    db.query(getEmployeById, [req.params.id], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result)
    })
}

const insertEmployee = (req, res) => {
    const emp = [req.body.name, req.body.emp_code, req.body.salary];
    db.query(insertEmploye, [emp], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result)
    })
}

const deleteEmployee = (req, res) => {
    db.query(deleteEmploye, [req.params.id], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result)
    })
}

const updateEmployee = (req, res) => {
    const emp = req.body;
    db.query(updateEmploye + emp.id, [emp], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result)
    })
}

const updateOrAddEmployee = (req, res) => {
    const emp = req.body;
    db.query(updateOrAddEmploye + emp.id, [emp], (err, result) => {
        if (err)
            console.log(err);
        else
            if (result.affectedRows == 0) {
                const emp = [req.body.name, req.body.emp_code, req.body.salary];
                db.query('INSERT INTO employee (name, emp_code, salary) VALUES(?)', [emp], (err, result) => {
                    if (err)
                        console.log(err);
                    else
                        res.send(result)

                })
            }
            else {
                console.log(result);
            }
    })

}

module.exports = { getAllEmploye, getOneEmployeeById, insertEmployee, deleteEmployee, updateEmployee, updateOrAddEmployee };