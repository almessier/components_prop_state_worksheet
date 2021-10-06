import React from 'react';

const NamesList = (props) => {
    
    return (
        <ul>
        {props.names.map((name) => {
            return <li>{name}</li>
        })}
        </ul>
    );
}

export default NamesList;