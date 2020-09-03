import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type='text' placeholder='Search movie' onChange={props.handleChange} ></input>
      </form>
    </div>
  )
}

export default SearchBar
