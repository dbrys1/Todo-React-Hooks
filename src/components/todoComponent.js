import React, {useState} from 'react'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToDoList from './toDoList'; 


const ToDoContainer = () => {
  
  //Create a state for input
  const [todoValue, setTodoValue] = useState('');
  //Create state for todo items
  const [todos, setTodo] = useState([])

const currentTodos = () => {
  setTodo([...todos, {id: todos.length + 1, description: todoValue }]);
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


{/* <div className={classes.demo}>
      <List dense={dense}>
        {generate(
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    </div> */}
  





    // State is an array of todo objects 


    // Need to create a new object and add it to state when item is submitted

    // Need to keep track of ID's --> can use filter method

    //array.filter

    // array.map((item) => item.id++)

    // item.id arry.length-1