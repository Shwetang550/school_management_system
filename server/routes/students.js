const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello get-student...');
});

// exporting the student routes
module.exports = router;