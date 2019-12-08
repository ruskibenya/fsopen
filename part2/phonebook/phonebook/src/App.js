import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true)

  const personsToShow = (event) => {
    if (showAll){
      return persons
    }
    console.log(showAll)
    return persons.filter(person => person.name.includes(event.target.value))
  }

  const rows = () => personsToShow().map(person => 
    <Person
      key={person.name}
      person={person}
      />
    )

  const alertDuplicateName = ({name}) => {
    return (
      alert(`${newName} is already added to phonebook`)
    )
  }

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const addOrAlertNewName = (event) => {
    event.preventDefault()
    persons.find(element => element.name === newName) ? alertDuplicateName(newName) : addPerson()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input
        onChange={ (event)=> event.target.value === '' ? setShowAll(true) : setShowAll(false)  }
      />
      <form onSubmit={addOrAlertNewName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
           />
           <br></br>
           number:
           <input
            value ={newNumber}
            onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {rows()}
    </div>
  )
}

export default App
