const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://cluster0.ozlumjz.mongodb.net/weather';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
 .catch (error => console.error(error));