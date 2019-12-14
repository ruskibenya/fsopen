import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

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
  const [ newFilter, setFilter] = useState('')

  const personsToShow = name => {
    if(showAll){
      return persons
    }
   else {
    return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
   }
  }

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

  const handleFilterChange = (event) => {
    event.target.value === '' ? setShowAll(true) : setShowAll(false)
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <PersonForm addOrAlertNewName={addOrAlertNewName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
        <Persons persons={personsToShow()} />
    </div>
  )
}

export default App
