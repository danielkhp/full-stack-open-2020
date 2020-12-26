import React from 'react'

const Filter = ({ filter, onChange }) => (
  <>
    filter by name:
    <input
      value={filter}
      onChange={onChange}
    />
  </>
)

export default Filter