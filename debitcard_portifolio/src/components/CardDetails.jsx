import React from 'react'
import details from '../images/details.png'

function CardDetails() {
  return (
    <div className='blue-box rounded-xl '>
      <img src={details} alt="" className='w-6 h-6  border border-primary rounded '/>
      <span className='text-primary font-semibold'>Card Details</span>
      <i className="fa fa-chevron-circle-up ml-auto " aria-hidden="true"></i>
    </div>
  )
}

export default CardDetails