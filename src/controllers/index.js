const express = require('express');
const overview = require('./overview');
const generalSettings = require('./generalSettings');
const employees = require('./employees');
const addEmployee = require('./addEmployee');
const carts = require('./cart');
const convertToSnake = require('../middleware/convertCamelToSnake');
const editEmployee = require('./editEmployee');
const employeeDetalis = require('./employeeDetails');

const router = express.Router();

router.get('/', overview.get);
router.get('/generalSetting', generalSettings.get);
router.post('/generalSetting', convertToSnake, generalSettings.post);
router.get('/employees', employees.get);
router.get('/addEmployee', addEmployee.get);
router.post('/addEmployee', convertToSnake, addEmployee.post);
router.put('/employee', convertToSnake, editEmployee.put);
router.get('/carts', carts.get);
router.get('/employee/:id',employeeDetalis.get);

module.exports = router;
