import React, { useState } from 'react'

function SearchBar({searchedValue,onSearchChange,onSearchBtnClick}) {

  return (
    <div className='relative w-max place-content-center mx-auto my-10'>
        <input type="text" name="" id="" value={searchedValue} onChange={(e)=> onSearchChange(e.target.value)} 
          className='px-4 py-3 w-80 bg-gray-100 outline-none border-2 border-gray-300 rounded-lg text-xs font-medium  ' placeholder='Search By Name'
         />
        <button className='h-10 w-24 bg-blue-500 rounded-lg text-white text-xs font-bold absolute bottom-0.5 right-0' onClick={()=> onSearchBtnClick(searchedValue)}>Search</button>
    </div> 
  )
}

export default SearchBar