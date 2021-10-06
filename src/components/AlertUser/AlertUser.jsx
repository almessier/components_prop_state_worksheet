import React from 'react';

const AlertUser = (props) => {
    return (
        <button onClick={props.alertUser} >Alert</button>
    );
}

export default AlertUser;