import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => (
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  ), [])

  const updateFilter = event => setFilter(event.target.value)

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="App">
      <Filter filter={filter} onChange={updateFilter} />

      {filteredCountries.length > 0 && filteredCountries.length < 10
        ? <Countries countries={filteredCountries} />
        : <p>Too many matches, refine filter</p>
      }
    </div>
  )
}

export default App