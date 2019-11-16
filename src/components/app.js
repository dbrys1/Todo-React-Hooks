import React from'react'; 
import ToDoContainer from './todoComponent';


const App = () => {
 
  const style = {
     display: 'flex', 
     margin: 'auto',
     justifyContent: 'center',
     borderStyle: 'solid', 
     borderWidth: '2px',
     width: '500px',
     backgroundColor: "#fff"
  }

    return(
        <div style={style}>
            <ToDoContainer />
        </div>
    )
}


export default App; 
