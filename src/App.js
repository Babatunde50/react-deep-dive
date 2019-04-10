import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: "89jksj", name: "Oba", age: 21},
      {id: "jsd88", name: "Sece", age: 19},
      {id: "jjkdsk98", name: "Alapo4", age: 19}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person


    this.setState({persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => (
          <Person
            click={() => this.deletePersonHandler(index)}
            change={(event) => this.nameChangeHandler(event, person.id) }
            key={person.id}
            name={person.name}
            age={person.age} /> 
        ))}
      </div>
      )
    }

    return (
      <div className="App"> 
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}
export default App;
