import React, { useState } from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
  const lookup = {}
  for (const country of countries) {
    lookup[country.name] = false
  }
  const [shownCountries, setShownCountries] = useState(lookup)

  const toggleShowCountry = (event) => {
    const newObject = { ...shownCountries }
    const key = event.target.parentNode.getAttribute('id')
    newObject[key] = !newObject[key]
    setShownCountries(newObject)
  }

  return (
    countries.length > 1
      ? <ul>
        {countries.map(country =>
          <li key={country.name} id={country.name}>
            {shownCountries[country.name]
              ? <Country country={country} />
              : country.name
            }

            <button type='button' onClick={toggleShowCountry}>
              {shownCountries[country.name] ? 'hide' : 'show'}
            </button>
          </li>
        )}
      </ul>

      : <Country country={countries[0]} />
  )
}

export default Countries