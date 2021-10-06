import React from 'react';

const SuperheroTable = (props) => {
    return (
        <table>
        <tbody>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Primary Ability</th>
            <th>Secondary Ability</th>
        </tr>
        {props.superheroes.map((hero, index) => {
            return (
                <tr key={index}>
                    <td>{hero.superheroId}</td>
                    <td>{hero.name}</td>
                    <td>{hero.primaryAbility}</td>
                    <td>{hero.secondarAbility}</td>
                </tr>
            )
        })}
        </tbody>
        </table>
    );
}

export default SuperheroTable;