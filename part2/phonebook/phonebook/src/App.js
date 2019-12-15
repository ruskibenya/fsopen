import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const defaultPersons = [
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }
]

const App = () => {
  const [ persons, setPersons] = useState(defaultPersons) 
  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [ newFilter, setFilter] = useState('')

  const personsToShow = () => 
    showAll
      ? persons
      : persons.filter(person => 
        person.name.toLowerCase().includes(newFilter.toLowerCase()),
        );

  const alertDuplicateName = () => {
    return (
      alert(`${name} is already added to phonebook`)
    )
  }

  const addPerson = () => {
    setPersons(
      persons.concat({
        name: name,
        number: number,
      }),
      setName(''),
      setNumber('')
    )
  }

  const handleAddPerson = event => {
    event.preventDefault()
    persons.find(element => element.name === name) 
    ? alertDuplicateName() 
    : addPerson()
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const {value} =  event.target;
    value === '' ? setShowAll(true) : setShowAll(false)
    setFilter(value)
  }

  const personProps = {
    handleAddPerson,
    handleNameChange,
    handleNumberChange,
    name,
    number
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h3>Add a new contact</h3>      
      <PersonForm {...personProps} />
      <h2>Numbers</h2>
        <Persons persons={personsToShow()} />
    </div>
  )
}

export default App
