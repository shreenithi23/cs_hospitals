// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    dept_name: {
        type: String,
        required: true
    },
    dept_code: {
        type: String,
        required: true
    }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;