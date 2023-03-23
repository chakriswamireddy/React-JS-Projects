import React from 'react'

function Card({children,reverse} ) {
  return (
    <div className={`card ${reverse && 'reverse'}`} > {children} </div>
    // this can be useful for dark mode
  )
}

export default Card; 