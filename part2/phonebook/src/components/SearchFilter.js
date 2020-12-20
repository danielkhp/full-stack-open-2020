import React from 'react'

const SearchFilter = ({ filter, onChange }) => (
  <>
    filter by name: 
    <input
      value={filter}
      onChange={onChange}
    />
  </>
)

export default SearchFilter
