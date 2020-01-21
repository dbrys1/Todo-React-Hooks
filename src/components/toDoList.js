import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Todo from './Todo'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const ToDoList = (props) => {
    // Mapping over todos and assiging to a new array   
    const listOfTodo = props.todos.map((item) =>
        <Router>
            <ListItem >
                <Link to={item.description}>
                    <ListItemAvatar>
                        <Avatar>
                            <EditIcon color='primary' fontSize='small' onClick={() => props.handleComponentRender(item.description)}/>
                        </Avatar>
                    </ListItemAvatar>
                </Link>
                {item.description}
                <ListItemIcon >
                    <DeleteIcon color='secondary' onClick={() => props.handleDelete(item._id)} />
                </ListItemIcon >
            </ListItem >

            <Switch>
                <Route path={`/${item.description}`}>
                    <Todo />
                </Route>
            </Switch>

        </Router>
    )

    return (
        <List>
            {listOfTodo}
        </List>
    )

}


export default ToDoList;