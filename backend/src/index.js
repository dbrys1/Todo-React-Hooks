import express from 'express'; 
//import mongoose from 'mongoose'; 

const app = express()

//Port for local testing 
const port = 3000; 

app.get('/', (req,res) => res.send('Hello, this will be the backend of the todo app')); 

app.listen(port, () => console.log(`App is listening on port ${port}`));

 

