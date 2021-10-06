import React , { Component } from 'react';
import DisplayName from './components/DisplayName/DisplayName';
import NamesList from './components/NamesList/NamesList';
import AlertUser from './components/AlertUser/AlertUser';
import SuperheroTable from './components/SuperheroTable/SuperheroTable';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: 'Reggie',
      lastName: 'White',
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
      superheroes : [
        {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondarAbility: 'Rich'
        },
        {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondarAbility: 'Fly'
        },
        {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondarAbility: 'Shoots web'
        }
      ]
    };
  };

  alertUser() {
    alert('devCodeCamp');
  }

  render(){
    return (
      <div className='container'>
          <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
          <NamesList names={this.state.names}/>
          <AlertUser alertUser={this.alertUser} />
          <SuperheroTable superheroes={this.state.superheroes} />
      </div>
    )
  };
};

export default App;
