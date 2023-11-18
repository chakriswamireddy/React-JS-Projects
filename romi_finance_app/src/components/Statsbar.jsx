import React from 'react'
import exchange from '../images/exchange.png'
import community from '../images/community.png'
import arrowup from '../images/arrowup.png'

function Statsbar() {
    const stats =[
        {'image':exchange, 'text':'Total Trading Volume', 'value':'$0'},
        {'image':arrowup, 'text':'open Interest', 'value':'$0'},
        {'image':community, 'text':'Total Users', 'value':'0'},
    ]
  return (
    <div className='stats-box'>
        {stats.map((item,index) => (
            <div className='stat-block'>
            <img src={item.image} alt="" className='w-10 h-10' />
            <div>
                <span>{item.text} </span>
                <span>{item.value} </span>
            </div>
            </div>
        ) )}

    </div>
  )
}

export default Statsbar