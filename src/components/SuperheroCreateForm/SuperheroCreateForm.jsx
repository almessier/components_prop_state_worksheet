import React, { Component } from 'react';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroId: 0,
            name: '',
            primaryAbility: '',
            secondarAbility: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSuperhero(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input name='name' onChange={this.handleChange} value={this.state.name} />
                <br />
                <label>Primary Ability:</label>
                <input name='primaryAbility' onChange={this.handleChange} value={this.state.primaryAbility} />
                <br />
                <label>Secondary Ability:</label>
                <input name='secondarAbility' onChange={this.handleChange} value={this.state.secondarAbility} />
                <br />
                <button type='submit'>Create Superhero</button>
            </form>
        );
    }
}

export default SuperheroCreateForm;