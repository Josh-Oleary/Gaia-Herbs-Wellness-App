const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/users')
const activityRoutes = require('./routes/activities')
const port = process.env.PORT || 3000;
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo:27017/wellness')

const app = express();
const db = mongoose.connection;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

db.on('error', console.error.bind(console, "db connection error"))
db.once('open', () => {
    console.log('db connected')
})

app.use('/', userRoutes)
app.use('/admin', adminRoutes)
app.use('/activities', activityRoutes)

module.exports = app;