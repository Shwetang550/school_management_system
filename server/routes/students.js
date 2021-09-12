const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// student schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    regNo: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        default: 'D',
    },
});

// creating a model of studentSchema
const Student = mongoose.model('Student', studentSchema);

router.get('/', async (req, res) => {
    try {
        const allStudentList = await Student.find();

        // if allStudentList != 0
        res.status(200).json(allStudentList);
    } catch (error) {
        // if allStudentList == 0 or some other errors
        res.status(404).json({ message: error.message });
    }
});

// creating new student
router.post('/', async (req, res) => {
    // const student = req.body;
    const newStudent = new Student({
        name: req.body.name,
        regNo: req.body.regNo,
        grade: req.body.grade,
        section: req.body.section
    });

    try {
        // if newStudent != null
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        // if some error occurs
        res.status(409).json({ message: error.message });
    }
})

// exporting the student routes
module.exports = router;