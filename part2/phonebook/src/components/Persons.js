import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter }) => (
  <ul>
    {persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()))
      .map(person =>
        <Person key={person.name} person={person} />
      )}
  </ul>
)

export default Persons
