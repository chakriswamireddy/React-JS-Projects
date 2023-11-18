import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ResultsPage from './ResultsPage';



function Homepage() {
    const [searchedValue,setSearchedValue] = useState('');
    const [displayValue,setDisplayValue] = useState('');

    const onSearchChange = (value) => {
        setSearchedValue(value);
    }

    const onSearchBtnClick = (value) => {
      setDisplayValue(value)
    }

  return (
    <div>
        
        
        <SearchBar searchedValue={searchedValue} onSearchChange={onSearchChange} onSearchBtnClick={onSearchBtnClick} />

        <ResultsPage displayValue={displayValue} />

    </div>
  )
}

export default Homepage