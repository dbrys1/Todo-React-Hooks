import axios from 'axios'; 


const url = `http://localhost:4000/`; 


//Inital Get request when component mounts
export const allTodos = async() => {
    try{
        const getTodos = await axios.get(url); 
        return getTodos.data.data; 
    }
    catch(e){
        console.log(e); 
    }
    
    
}

// Post request used for adding todo item to database 
export const postingTodoData = async(desc) => {
    //Create post url that will be used 
    const todoData = {
      description: desc
    }
    try{ 
      const res = await axios.post(`${url}todo`,todoData)
      console.log(res); 
   
    }
    catch(e){
      console.log(e); 
    }
    
  }
