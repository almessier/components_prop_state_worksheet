import React from 'react';

const SuperheroTable = (props) => {
    return (
        <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Primary Ability</th>
            <th>Secondary Ability</th>
        </tr>
        {props.superheroes.map((hero) => {
            return (
                <tr>
                    <td>{hero.superheroId}</td>
                    <td>{hero.name}</td>
                    <td>{hero.primaryAbility}</td>
                    <td>{hero.secondarAbility}</td>
                </tr>
            )
        })}
        </table>
    );
}

export default SuperheroTable;