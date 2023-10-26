import React from 'react'
import Google_logo from '../images/Google_logo.png'

function CardActions() {

  const actions = [
    {'icon':'ac_unit','text':'Freeze Card',},
    {'icon':'speed','text':'set speed limit',},
    {'icon':'','text':'Add to Gpay',},
    {'icon':'restart_alt','text':'Replace Card',},
    {'icon':'delete ','text':'Cancel Card',},
  ]

  return (
    <div className='h-32 lg:w-96 md:w-96 sm:w-96 md:w-full w-screen md:ml-5 bg-blue-100 flex md:rounded-xl lg:rounded-xl rounded-tl-3xl rounded-tr-3xl py-5 justify-evenly popup' >

      {actions.map((item,index) => (
       
          <div className='flex flex-col items-center gap-2  '>
            {index===2?  <img src={Google_logo} alt="" className='w-10 h-10 py-1 bg-white rounded-full' /> :
            <div className='bg-primary rounded-full '>
            <span className="material-symbols-outlined p-2 bg-primary   gradient-text">{item.icon}</span></div>
      }
            <span className='text-center text-primary text-sm'>{item.text} </span>

        </div>
      ))}
     
    </div>
  )
}

export default CardActions