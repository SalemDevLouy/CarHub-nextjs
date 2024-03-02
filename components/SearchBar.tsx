"use client"
import React, { useState } from 'react'
import { SearchManuFacturer } from './'

const SearchBar = () => {
  const [manuFacturer, setmanuFacturer] = useState('')
  const handleSubmit=()=>{}
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManuFacturer manuFacturer={ manuFacturer} setmanuFacturer={setmanuFacturer} />
      </div>
    </form>
  )
}

export default SearchBar
