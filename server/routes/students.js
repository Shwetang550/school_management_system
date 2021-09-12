const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// student schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    registration_number: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    isStudent: {
        type: Boolean,
        required: function () {
            if (parseInt(this.grade) >= 1 && parseInt(this.grade) <= 12)
                return true;
            else
                return false;
        }
    },
    section: {
        type: String,
        default: 'A',
    },
    subjects: [String]
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

// exporting the student routes
module.exports = router;