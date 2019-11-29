const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
//import mongoose from 'mongoose'; 
const mongoose = require('mongoose'); 



const todoSchema = new mongoose.Schema({
  description: String
})


let Todo = mongoose.model("Todo", todoSchema)
const app = express()


app.use(cors());
app.use(bodyParser.json());
//Port for local testing 
const port = 4000; 

mongoose.Promise=global.Promise;mongoose.connect("mongodb://localhost:27017/tododb")

app.get('/', function(req, res) {
    Todo.find({}, (err, data) => {
      try{
        res.json({ data }); 
      }
      catch {
        res.send(err);
      }
      
    });
  }); 

  app.post('/todo', function(req, res) {
    console.log(req.body.description)
    let todoData = new Todo({description: req.body.description})
    todoData.save()
    .then(item => {
      res.send("Item has been recieved");
      res.send(todoData._id)
    })
    .catch(err => {
      res.status(400).send("unable to save to database"); 
    })
    
  }); 


//app.post('/',())

app.listen(port, () => console.log(`App is listening on port ${port}`));

 

