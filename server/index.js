const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// cors
app.use(cors());

// routes
const studentRoutes = require('./routes/students');

// for getting post req (data from body)
// app.use(express.json());
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

// setting up default student route
app.use('/api/students', studentRoutes);


const PORT = process.env.PORT || 5000;

// mongodb connection (locally) and port listener
mongoose.connect('mongodb://localhost/management')
    .then(() => app.listen(PORT, () => console.log(`Successfully connected to Database and running on Port ${PORT}...`)))
    .catch(err => console.log(err.message));


// app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));