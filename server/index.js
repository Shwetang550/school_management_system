const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

// mongodb connection (locally) and port listener
mongoose.connect('mongodb://localhost/management')
    .then(() => app.listen(PORT, () => console.log(`Successfully connected to Database and running on Port ${PORT}...`)))
    .catch(err => console.log(err.message));

// for getting post req (data from body)
app.use(express.json());

// app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));