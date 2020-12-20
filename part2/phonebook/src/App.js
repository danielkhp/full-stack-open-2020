import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Form from './components/Form'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => (
        setPersons(response.data)
      ))
  }, [])

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
