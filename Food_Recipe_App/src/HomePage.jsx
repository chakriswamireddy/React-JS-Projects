import React from 'react'
import diet from './Images/diet.png'

function HomePage() {
  return (
        <div className='relative'>
        <img src={diet} alt="" className='w-12 h-13 absolute left-1 top-3' />
        <h2 className='text-center font-medium text-slate-800 text-3xl bg-slate-400 py-4 shadow-lg shadow-slate-200'>Food Recipe App</h2>
        </div>

  )
}

export default HomePage