import React, {useState} from 'react'; 



const ToDoContainer = () => {
 
const [todo, setTodo] = useState({
    id: null, 
    description: null
})


return (
    <div className="todoContainer">
        <p>{`The id is curently ${todo.id}`}</p>
    </div>
)

} 

export default ToDoContainer; 