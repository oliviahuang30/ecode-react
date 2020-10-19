// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react'

const App = () => {
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas' }
  // ])
  // const [ newName, setNewName ] = useState('')
  // const [ numbers, setNumbers ] = useState([ { number: '12345' } ])
  // const [ newNumber, setNewNumber] = useState('')
  const [ namenum, setNameNum ] = useState([
    { name: 'Arto Hellas' },
    { number: '12345' }
  ])
  const [ newnamenum, setnewnamenum ] = useState([
    { name: '' },
    { number: '' }
  ])
  const [showAll, setShowAll] = useState(true)

  const addNameNum = (person, number) => {
    person.preventDefault()
    // number.preventDefault()
    const namenumObject = {
      name: newnamenum.name,
      number: newnamenum.number
    }

    setNameNum(namenum.concat(namenumObject))
    setnewnamenum('')
  }

  // const handleNameChange = (name) => {
  //   console.log(name.target.value)
  //   setNewName(name.target.value)
  // }
  // const handleNumberChange = (number) => {
  //   console.log(number.target.value)
  //   setNewNumber(number.target.value)
  // }

  const handlenamenumchange = (event) => {
    console.log(event.target.value)
    setnewnamenum(event.target.value)
  }

  const namenumsToShow = showAll
    ? namenum
    : namenum.filter (p => p.important)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameNum}>
        <div>
          name:
          <input
          value={newnamenum.name}
          onChange={handlenamenumchange}
          />
          number:
          <input
          value={newnamenum.number}
          onChange={handlenamenumchange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {namenumsToShow.map(n => <p>{n.name} {n.number}</p>)}
      </ul>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
