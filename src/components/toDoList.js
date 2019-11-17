import React from 'react'; 
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = (props) => {

   // Mapping over todos and assiging to a new array   
   const listOfTodo = props.todos.map((item) => 
   <ListItem>
       <ListItemAvatar>
            <Avatar>
                <EditIcon color='primary'/>
            </Avatar>
        </ListItemAvatar>
        {item.description}
        <ListItemIcon >
            <DeleteIcon edge="end" color='secondary' />
        </ListItemIcon >
      
 </ListItem >)
   
    return (
        <List> 
            {listOfTodo}
        </List>
    )
       
}


export default ToDoList;