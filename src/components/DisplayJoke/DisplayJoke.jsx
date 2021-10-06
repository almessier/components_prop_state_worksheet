import React from 'react';
import axios from 'axios';

class DisplayJoke extends React.Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        axios.get(`https://v2.jokeapi.dev/joke/Programming?amount=5`)
        .then((response) => {
            const jokes = response.data;
            this.setState(jokes);
        })
    }

    render() {
        return (
            <ul>
                {this.state.jokes.map((joke) => {
                    if (joke.type === 'single' && joke.safe === true) {
                        return <h1 key={joke.id}>{joke.joke}</h1>
                    } else if (joke.type === 'twopart' && joke.safe === true) {
                        return <h1 key={joke.id}>{joke.setup} {joke.delivery}</h1>
                    } else {
                        return <h1 key={joke.id}>The received joke is a little too spicy.</h1>
                    }
                })}
            </ul>
        )
    }
}

export default DisplayJoke;