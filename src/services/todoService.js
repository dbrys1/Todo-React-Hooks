import axios from 'axios';
// Url for express webserver
const url = `http://localhost:4000/`;

/** 
 * Inital Get request when component mounts
 * returns all todo items stored in mongoose database
*/
export const getTodo = async () => {
  try {
    const getTodos = await axios.get(url);
    return getTodos.data.data;
  }
  catch (e) {
    console.log(e);
  }

}

/**
 * postingTodoData method 
 * @param {*} desc Description passed from user input
 */
export const addTodo = async (desc) => {
  //Create post url that will be used 
  const todoData = {
    description: desc
  }
  try {
    return await axios.post(`${url}todo`, todoData)
    
  }
  catch (e) {
    console.log(e);
  }

}

/**
 * Delete selected todo 
 * @param {*} todo 
 */
export const removeTodo = async (todo) => {
  try {
    await axios.delete(`${url}removeTodo/${todo}`)
  }
  catch (e) {
    console.log(e)
  }

}
