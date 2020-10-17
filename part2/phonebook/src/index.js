// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ numbers, setNumbers ] = useState([ { number: '12345' } ])
  const [ newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNameNum = (person, number) => {
    person.preventDefault()
    // number.preventDefault()
    const nameObject = {
      name: newName
    }
    const numberObject = {
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNumbers(numbers.concat(numberObject))
    setNewNumber('')
  }

  // const addName = (person) => {
  //   person.preventDefault()
  //   const nameObject = {
  //     name: newName
  //   }
  //
  //   setPersons(persons.concat(nameObject))
  //   setNewName('')
  // }
  //
  // const addNumber = (number) => {
  //   number.preventDefault()
  //   const numberObject = {
  //     number: newNumber
  //   }
  //
  //   setNumbers(numbers.concat(numberObject))
  //   setNewNumber('')
  // }

  const handleNameChange = (name) => {
    console.log(name.target.value)
    setNewName(name.target.value)
  }
  const handleNumberChange = (number) => {
    console.log(number.target.value)
    setNewNumber(number.target.value)
  }

  const namesToShow = showAll
    ? persons
    : persons.filter (p => p.important)

  const numbersToShow = showAll
    ? numbers
    : numbers.filter (p => p.important)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameNum}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}/>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {namesToShow.map(n => <p>{n.name}</p>)}
        {numbersToShow.map(n => <p>{n.number}</p>)}
      </ul>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
