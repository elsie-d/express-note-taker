//const express = require('express');
const notesRoute = require('express').Router();
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
//const PORT = 3001;
/* const app = express();


 app.use(express.static('public'));
 app.use(express.urlencoded({ extended: true }))
 app.use(express.json()) */

 
//Read File
notesRoute.get('/', (req, res) => {
    console.log('hello')
    fs.readFile('./db/db.json', "utf-8" ,(err, results) => {
      if (err) {
        console.log("error detected")
        throw err
      }
      
      let notes = JSON.parse(results)
      res.json(notes)
    })
  });
  
notesRoute.post('/', (req, res) =>{
    console.log(req.body)
    const id = uuidv4()
    console.log(id)
    req.body.noteID = {title: req.body.title, text: req.body.text, id}
    let newNote = req.body.noteID
    console.log("this is a new note", newNote)
  
  //Read File before updating
  
  fs.readFile('./db/db.json', "utf-8" ,(err, results) => {
    if (err) {
      console.log("POST error detected")
      throw err
    }
  
    let existingNotes;
    try {
      existingNotes = JSON.parse(results);
    } catch (err){
      console.log(err)
      console.log('parse error detected')
    }
  
    existingNotes.push(newNote);
    console.log('new note passed')
  
  // Wrtie updated file
  fs.writeFile('./db/db.json', JSON.stringify(existingNotes), (err)=>{
    if (err) {
      console.log(err)
    }
  // Refresh page w/ new note on left   
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    console.log('note added successfully');
  });
  });
  });


 // module.exports = notesRoute;
  
