const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bookRouter = require('./routes/book.route');
// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      dbName: process.env.DB_NAME,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

// express middleware
app.use(express.json());

//add router here
app.use('/api', bookRouter);

//assign the port
app.listen(process.env.PORT, 'localhost', () => {
  console.log(`Server is running on port ${process.env.PORT}!`);
});

module.exports = app;
//module.exports = connectDB;
