import React from 'react'
import DebitCard from './DebitCard';
import CardDetails from './CardDetails';
import Transactions from './Transactions';
import CardActions from './CardActions';

function MainBody({screenWidth}) {
    const balance = '3,000';
  return (
    <div id='mainBody'>
        <div className='mb-4 ml-10 lg:ml-0' id='balanceArea'>
            <p className='mb-2 '>Available balance</p>
            <div className='flex  w-full justify-between '>
                <span className='flex items-center gap-3'><span className='bg-secondary px-3 text-white rounded font-bold text-sm py-1'>S$</span> <span className=' font-bold text-3xl'>{balance}</span></span>
                <button className='p-2 text-sm bg-primary rounded text-blue-200 lg:text-white font-semiboldd' ><i className="fa fa-plus-circle mr-1 " aria-hidden="true" ></i><span  >New Card</span></button>
            </div>
        </div>
          <div className='flex gap-10 ml-10 lg:ml-0'>
            <p className='border-b-2 border-cyan-400 font-bold text-white md:text-slate-900 lg:text-slate-900'>My debit cards</p>
            <p className='text-slate-400'>All company cards</p>
          </div>
          <div className='lg:border shadow-xl rounded-2xl lg:my-3 flex lg:gap-7 sm:flex-col md:flex-row lg:flex-row flex-col bg-white white-gap '>
            <div className='flex flex-col gap-10 lg:ml-4  sm:ml-4 '>
              
              <DebitCard  />
              <CardActions />
            </div>
            <div className='flex flex-col gap-5 lg:w-2/3  sm:w-full w-screen lg:m-6 p-3 bg-white white-gap popup'>
              <CardDetails />
              <Transactions screenWidth={screenWidth} />
            </div>
          </div>

    </div>
  )
}

export default MainBody