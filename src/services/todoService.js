import axios from 'axios';
// Url for express webserver
const url = `http://localhost:4000/`;


/** 
 * Inital Get request when component mounts
 * returns all todo items stored in mongoose database
*/
export const allTodos = async () => {
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
export const postingTodoData = async (desc) => {
  //Create post url that will be used 
  const todoData = {
    description: desc
  }
  try {
    const res = await axios.post(`${url}todo`, todoData)
    console.log(res);

  }
  catch (e) {
    console.log(e);
  }

}

/**
 * Delete selected todo when trash icon pressed
 * @param {*} todo 
 */
export const removeTodo = async (todo) => {
  try {
    const resp = await axios.delete(`${url}removeTodo/${todo}`)
    console.log(resp);
  }
  catch (e) {
    console.log(e)
  }


}