const express = require('express');
const router = express.Router()

const Department = require('../models/department'); 
const Doctor = require('../models/doctors');
router.post('/addDepartment', async (req, res) => {

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


router.post('/addDoctors', async(req,res)=>{
    const doctor=new Doctor({
        name:req.body.name,
        dept_name:req.body.dept_name,
        ph_no:req.body.ph_no,
        speciality:req.body.speciality,
        reg_no:req.body.reg_no
    });
    try{
        const newDoctor=await doctor.save();
        res.status(201).json(newDoctor);
    }catch(err){
        res.status(400).json({message:err.message});
    }
})

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors', error: error.message });
    }
});

router.get('/departments', async (req, res) => {
    try {
        const departments = await Department.find(); 
        res.status(200).json(departments); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching departments', error: error.message });
    }
});

module.exports = router;