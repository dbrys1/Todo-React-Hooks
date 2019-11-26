import React, {useState} from 'react'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToDoList from './toDoList'; 
import axios from 'axios'; 

const ToDoContainer = () => {
  
  //Create a state for input
  const [todoValue, setTodoValue] = useState('');
  //Create state for todo items
  const [todos, setTodo] = useState([])
  
  const url = `http://localhost:4000/`; 
const currentTodos = () => {
  let todoVal = todoValue && todoValue.trim(); 
  if(!todoVal){
    return
  }
  setTodo([...todos, {id: todos.length + 1, description: todoVal }]);
  // Make a post request for adding new item
  makeRestCall()
  postingTodoData(todos.length +1, todoVal); 
}

// Get value from input and setState
const handleChange = (e) => {
  setTodoValue(e.target.value);

}

const handleSubmit = (e) => {
  e.preventDefault();
  setTodoValue(''); 
}

const handleDelete = (item) => {
  const updatedArray = todos.filter((items) => items.id != item); 
  console.log(updatedArray)
  setTodo([...updatedArray])
  // Make a delete request
}


const makeRestCall = async() => {
  const res =  await axios.get(url); 
  console.log(res); 
  
}


const postingTodoData = async(id,desc) => {
  //Create post url that will be used 
  const todoData = {
    id: id, 
    description: desc
  }
  try{ 
    const res = await axios.post(`${url}todo`,todoData)
    console.log(res); 
 
  }
  catch(e){
    console.log(e); 
  }
  
}

//When item is submitted add to array with new id and description value 
  const headerStyle = {
    textAlign: 'center'
  }

return (
    <div>
    <Typography variant="h5"  style={headerStyle}>
      Todos
    </Typography>
    <form onSubmit= {handleSubmit}> 
        <TextField name="description" value={todoValue} onChange={handleChange}>
        </TextField>
        <Button type="submit" variant="contained" color="primary" onClick={currentTodos} >Submit</Button>

    </form>
    <ToDoList todos={todos} handleDelete={handleDelete} />
   </div>
    
)

} 

export default ToDoContainer; 
