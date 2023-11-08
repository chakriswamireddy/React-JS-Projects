import React, { useEffect } from 'react'

function DomainsList({setSearchedDomain}) {



    
    
    
        
    
    
    
            
    
    
    
    
    
        
        
    
  return (
    <div>
      <select name="" id="" onChange={(e)=> setSearchedDomain(e.target.value) }>
      <option value="">Choose Domain</option>
        
        <option value="Sales">Sales</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="IT">IT</option>
        <option value="UI Designing">UI Designing</option>
        <option value="Management">Management</option>
        <option value="Business Development">Business Development</option>
        {}

      </select>
    </div>
  )
}

export default DomainsList






