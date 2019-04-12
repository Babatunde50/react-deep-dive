import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let persons = null
    let btnClass = null

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => (
          <ErrorBoundary key={person.id}>
            <Person
              click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangeHandler(event, person.id) }
              name={person.name}
              age={person.age} /> 
          </ErrorBoundary>
        ))}
      </div>
      )
      btnClass = classes.Red

    }

    const assignedClasses = []
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.App}> 
          <h1>Hi, I'm a React app</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
