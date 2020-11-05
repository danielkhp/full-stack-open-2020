import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
  )

const Stat = ({ text, value }) => (
  <p>{text} {value}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Stat text='good' value={good} />
      <Stat text='neutral' value={neutral} />
      <Stat text='bad' value={bad} />
      <Stat text='all' value={good + bad + neutral} />
      <Stat text='average' value={(good + bad + neutral) / 3} />
      <Stat text='positive' value={good / (good + bad + neutral) * 100 + '%'} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
