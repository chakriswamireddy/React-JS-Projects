<<<<<<< HEAD
import React from 'react'

function Card({children,reverse} ) {
  return (
    <div className={`card ${reverse && 'reverse'}`} > {children} </div>
    // this can be useful for dark mode
  )
}

=======
import React from 'react'

function Card({children,reverse} ) {
  return (
    <div className={`card ${reverse && 'reverse'}`} > {children} </div>
    // this can be useful for dark mode
  )
}

>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default Card; 