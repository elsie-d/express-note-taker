const express = require('express');

notesRouter = require('./notes')
const app = express()
app.use('./notes', notesRouter)

//module.exports = app 