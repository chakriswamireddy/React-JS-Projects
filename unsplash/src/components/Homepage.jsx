import React, { useState } from 'react'
import Gallery from './Gallery'

function Homepage() {
    const [searchedValue,setSearchedValue] = useState('')
    const valueChangeBySuggestions = (value) => {
      setSearchedValue(value)
      console.log(searchedValue)
    }

  return (
    <div className=''>
      <h1 className='text-3xl font-bold text-center border-b-2 border-t-2 border-indigo-500 mb-4 shadow-xl'>UNSPLASH</h1>
        <input type="text"  value={searchedValue} onChange={(e)=> setSearchedValue(e.target.value)} placeholder='Search images'
            className='border border-slate-400 rounded-lg w-1/6 min-w-40 outline-none pl-5 px-4 py-2 mx-auto block shadow-xl'
        />
        <Gallery searchedValue = {searchedValue} valueChangeBySuggestions={valueChangeBySuggestions} />
    </div>
  )
}

export default Homepage