<<<<<<< HEAD
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

=======
<<<<<<< HEAD
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

=======
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

>>>>>>> 60b54414feb6faf232c7d518adce18b5d35b312f
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default Homepage