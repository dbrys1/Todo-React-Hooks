import React from 'react'; 
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const ToDoList = () => {
  
   const todolist = ['Clean', 'Cook', 'Laundry']  
   
   const listOfTodo = todolist.map((item) => <ListItem>{item}</ListItem>)
    
    return (
        <List> 
            {listOfTodo}
        </List>
    )
       
}


export default ToDoList;