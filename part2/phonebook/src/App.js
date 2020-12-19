import React, { useState } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.find(person => person.name === newName)
    if (found === undefined){
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already in the phonebook`)
    }
  }

  const updateNameValue = (event) => {
    setNewName(event.target.value)
  }
  const updateNumberValue = (event) => {
    setNewNumber(event.target.value)
  }
  const updateFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchFilter filter={filter} onChange={updateFilter} />

      <h3>add a new</h3>

      <Form name={newName} number={newNumber} onSubmit={addPerson}
            onNameChange={updateNameValue} onNumberChange={updateNumberValue}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} />

    </div>
  )
}

export default App
