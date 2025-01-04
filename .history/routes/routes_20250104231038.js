const express = require('express');
const router = express.Router()

const Department = require('../models/department'); 
const Doctor = require('../models/doctors');
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

module.exports = router;