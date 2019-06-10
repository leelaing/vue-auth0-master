const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()
const app = express()

app.use(bodyParser.json())

// Import Routes
const todoRoute = require('./routes/todos')

app.use('/api/todos', todoRoute)


// Connecto to Mongodb DATABASE
mongoose.connect(`${process.env.CONNECT_URL}${process.env.DB_NAME}`,
  { useNewUrlParser: true },
  () => {
    console.log('Connected to Mongodb...')
  })

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server now running on port ${process.env.PORT}`)
})
