const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
//import mongoose from 'mongoose'; 

const app = express()


app.use(cors());
app.use(bodyParser.json());
//Port for local testing 
const port = 4000; 

app.get('/', function(req, res) {
    res.send({'hello': 'world'})
  }); 

  app.post('/todo', function(req, res) {
    console.log(req.body.id)
    res.send("Data has been recieved");
  }); 


//app.post('/',())

app.listen(port, () => console.log(`App is listening on port ${port}`));

 

