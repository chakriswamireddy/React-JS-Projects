import React, { useEffect, useState } from 'react'

function Results({yourScore}) {
  const [message,setMessage] = useState("")

  useEffect(()=> {
    if(yourScore>8) {
      setMessage("Hurrah! You performed well ")
    } 
    else if(yourScore>4) {
      setMessage("You tried Well But you can do better than this ")
    }
    else {
      setMessage("Aww! sorry to tell,You need practice ")
    }
  },[])
  

  return (
    <div className='results' >
      <h2>Results</h2>
      <h3> Your score: {yourScore} </h3>
      <p>{message} </p>
    </div>
  )
}

export default Results