import React from 'react';
import Typography from '@material-ui/core/Typography';


const Todo = (props) => {

    const headerStyle = {
        textAlign: 'center'
    }

    return (
        <div>
            <Typography variant="h5" style={headerStyle}>
                Todo
        </Typography>
            <div>
                <input value={props.itemDesc} />
            </div>
        </div>
    )
}

export default Todo; 