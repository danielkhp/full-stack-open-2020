import React from 'react'

const Form = ({ name, number, onSubmit, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input
        value={name}
        onChange={onNameChange}
      />
    </div>
    <div>
      number: <input
        value={number}
        onChange={onNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default Form
