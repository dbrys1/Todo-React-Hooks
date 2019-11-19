const express = require('express'); 
const cors = require('cors'); 
//import mongoose from 'mongoose'; 

const app = express()


app.use(cors());
//Port for local testing 
const port = 4000; 

app.get('/', function(req, res) {
    res.send({'hello': 'world'})
  }); 

  app.get('/todo', function(req, res) {
    const todoID = req.param('id'); 
    const description = req.param('description'); 
  }); 


//app.post('/',())

app.listen(port, () => console.log(`App is listening on port ${port}`));

 

