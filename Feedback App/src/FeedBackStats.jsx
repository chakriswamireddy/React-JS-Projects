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

export default FeedBackStats