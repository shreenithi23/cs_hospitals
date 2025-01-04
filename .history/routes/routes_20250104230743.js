const express = require('express');
const router = express.Router()

const Department = require('../models/department'); 

router.post('/department', async (req, res) => {

    const department = new Department({
        dept_name: req.body.dept_name,
        dept_code: req.body.dept_code
    });

    try {
        const newDepartment = await department.save();
        res.status(201).json(newDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.post('/doctors', async(req,res)=>{
    const doctor=new Doctor({
        name
    })
})

module.exports = router;