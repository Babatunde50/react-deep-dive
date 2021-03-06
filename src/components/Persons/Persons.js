import React, { PureComponent } from 'react'

import Person from './Person/Person'

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     return nextProps.persons !== this.props.persons
    // }

    // componentWillUpdate() {

    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnMount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: "Snapshot"}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id) }
                name={person.name}
                key={person.id}
                age={person.age} 
                /> 
        )

    })
}}

export default Persons
