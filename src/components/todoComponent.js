import React, {useState} from 'react'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const ToDoContainer = () => {
 
const [todo, setTodo] = useState([{
    id: 0, 
    description: ""
}])





return (
    <Grid item xs={12} md={6}>
    <Typography variant="h6" >
      Todos
    </Typography>
    <form > 
        <input value={todo.description}>
        </input>
        <button type="submit"  >Submit</button>
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
  



