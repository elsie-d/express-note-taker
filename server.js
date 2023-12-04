const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// GET Route for homepage
app.get('/index', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);


// GET Route for notes page
app.get('/notes', (req, res)=>
res.sendFile(path.join(__dirname, '/public/notes.html'))
)   



// Listen on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);