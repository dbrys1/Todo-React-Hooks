import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToDoList from './toDoList';
import axios from 'axios';
import { allTodos, postingTodoData, removeTodo } from '../services/todoService'

const ToDoContainer = () => {

  //Create a state for input
  const [todoValue, setTodoValue] = useState('');
  //Create state for todo items
  const [todos, setTodo] = useState([])

  const currentTodos = () => {
    let todoVal = todoValue && todoValue.trim();
    if (!todoVal) {
      return
    }
    setTodo([...todos, { description: todoVal }]);

    //Posting Todo 
    postingTodoData(todoVal);
  }

  useEffect(() => {
    // make request to get all data for 
    const items = allTodos()
    items.then(res => {
      try {
        setTodo([...res])
      }
      catch (err) {
        console.log(err);

      }

    })
    //setTodo([...items]);
  }, [])

  // Get value from input and setState
  const handleChange = (e) => {
    setTodoValue(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoValue('');
  }

  const handleDelete = (item) => {
    removeTodo(item);

  }


  const makeRestCall = async () => {
    const res = await axios.get(url);
    console.log(res);

  }


  //When item is submitted add to array with new id and description value 
  const headerStyle = {
    textAlign: 'center'
  }

  return (
    <div>
      <Typography variant="h5" style={headerStyle}>
        Todos
    </Typography>
      <form onSubmit={handleSubmit}>
        <TextField name="description" value={todoValue} onChange={handleChange}>
        </TextField>
        <Button type="submit" variant="contained" color="primary" onClick={currentTodos} >Submit</Button>

      </form>
      <ToDoList todos={todos} handleDelete={handleDelete} />
    </div>

  )

}

export default ToDoContainer; 
