require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const setupSwagger = require('./swagger');



mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})  

const app = express();

app.use(express.json());
setupSwagger(app);

app.use('/api', routes);
app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
})