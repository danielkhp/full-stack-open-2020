import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Notification from './components/Notification'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'

const url = 'http://localhost:3001/persons/'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState()

  useEffect(() => {
    axios
      .get(url)
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const found = persons.find(person => person.name === newName)
    if (found === undefined) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      axios
        .post(url, newPerson)
        .then(response => {
          setPersons(persons.concat({ ...response.data }))
          setNotification(`Added ${response.data.name}`)
          setTimeout(() => setNotification(null), 3000)
        })
      setNewName('')
      setNewNumber('')
    } else {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        const newPerson = {
          name: newName,
          number: newNumber
        }
        axios
          .put(`${url}${found.id}/`, newPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== found.id ? person : response.data))
            setNotification(`Updated ${response.data.name}`)
            setTimeout(() => setNotification(null), 3000)
          })
          .catch(() => {
            setNotification(
              `${found.name} was already removed from the server`
            )
          })
      }
    }
  }

  const deletePerson = id => {
    if (window.confirm(`Are you sure you want to delete this number?`)) {
      axios
        .delete(`${url}${id}/`)
        .then(response => {
          if (response.status === 200) {
            setPersons(persons.filter(person => person.id !== id))
          }
        })
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

      <Notification message={notification} />

      <Form name={newName} number={newNumber} onSubmit={addPerson}
        onNameChange={updateNameValue} onNumberChange={updateNumberValue}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />

    </div>
  )
}

export default App