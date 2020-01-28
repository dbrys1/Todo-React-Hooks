import React from 'react';
import ToDoContainer from './todoComponent';
import Todo from './Todo';
import { Switch, Route } from 'react-router-dom';


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

    return (
        <div style={style}>
            <Switch>
                <Route exact path="/todos/:id" render={() => <Todo />} />
                <Route path="/" render={() => <ToDoContainer />} />
            </Switch>
        </div>
    )
}


export default App; 
