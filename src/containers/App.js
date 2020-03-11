import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import { render } from '@testing-library/react';

class App extends Component {
state = {
  persons: [
    {name:'Slim',age:'26'},
    {name:'Med',age:'28'},
    {name:'Amine',age:'18'}
  ],
  showPresons: false
}

switchNameHandler = (NewName) => {
  //console.log ('Was clicked!');
  this.setState( {
    persons: [
      {name:NewName,age:'26'},
      {name:'Med',age:'28'},
      {name:'Amine',age:'19'}
    ]
  } ) 
}

nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {name:'Slim',age:'26'},
      {name:event.target.value,age:'28'},
      {name:'Amine',age:'19'}
    ]
  } )
}
 togglerPersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}



render(){

  let persons=null;
  if(this.state.showPersons) {
    persons = (
    <div>
       <Person name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this,'Maxi?')}/>
        <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}/>
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
   </div>)
  }

  return (
    <div className="App">
      <button onClick={this.togglerPersonsHandler}> Switch Name </button>
      <h1>Hi, I'm a React App</h1>
      {persons}
    </div>
  );
}
}

export default App;