import React from 'react'; 
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ToDoList = (props) => {
   
   
   const listOfTodo = props.todos.map((item) => 
   <ListItem>
       <ListItemIcon>
        </ListItemIcon>
        {item.description}
 </ListItem>)
   
    return (
        <List> 
            {listOfTodo}
        </List>
    )
       
}


export default ToDoList;