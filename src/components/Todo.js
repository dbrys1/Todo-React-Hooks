import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const Todo = (props) => {
    const { match } = props;


    const headerStyle = {
        textAlign: 'center'
    }

    console.log(match);

    return (
        <div>
            <Typography variant="h5" style={headerStyle}>
                Todo: {match.params.description}
            </Typography>
            <div>
                <input value={props.itemDesc} />
            </div>
        </div>
    )
}

export default withRouter(Todo);
