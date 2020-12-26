import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Country = ({ country }) => {
  const [weather, setWeather] = useState()
  const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.alpha2Code}&appid=${api_key}`

  useEffect(() => {
    axios
      .get(api_url)
      .then(response => setWeather(response.data))
  }, [api_url])

  return (
    <div>
      <h1>{country.name}</h1>
      capital {country.capital}
      <br />
      population {country.population}

      <h2>languages</h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}</li>)}
      </ul>
      
      {weather
      ? <>
          <h2>weather in {country.capital}</h2>
          <p><strong>temperature: </strong>{(weather.main.temp * 9 / 5 -459.67).toFixed(2)} Fahrenheit</p>
          <p><strong>wind: </strong>{weather.wind.speed} mph</p>
        </>
      : null
      }

    </div>
  )
}

export default Country