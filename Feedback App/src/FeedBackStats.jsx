<<<<<<< HEAD
import React from 'react'

function FeedBackStats({feedback}) {
    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h5>Total Reviews: {feedback.length} </h5>
        <h5>Average: {average} </h5>
    </div>

  )
}

=======
<<<<<<< HEAD
import React from 'react'

function FeedBackStats({feedback}) {
    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h5>Total Reviews: {feedback.length} </h5>
        <h5>Average: {average} </h5>
    </div>

  )
}

=======
import React from 'react'

function FeedBackStats({feedback}) {
    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h5>Total Reviews: {feedback.length} </h5>
        <h5>Average: {average} </h5>
    </div>

  )
}

>>>>>>> 60b54414feb6faf232c7d518adce18b5d35b312f
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default FeedBackStats