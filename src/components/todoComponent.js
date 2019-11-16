import React, {useState} from 'react'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const ToDoContainer = () => {

const [todo, setTodo] = useState([{
  id:null,
  description: ''
}])

const updateDescription = () => {
  setTodo
}

const currentTodos = (e) => {
  console.log(todo)
  setTodo({...todo, 
    id: todo.length,
    description: e.target.value
  })

}

//When item is submitted add to array with new id and description value 

return (
    <Grid item xs={12} md={6}>
    <Typography variant="h6" >
      Todos
    </Typography>
    <form > 
        <TextField value={todo.description}>
        </TextField>
        <Button type="submit" variant="contained" color="primary" onSubmit={currentTodos} >Submit</Button>
    </form>
    </Grid>
    
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