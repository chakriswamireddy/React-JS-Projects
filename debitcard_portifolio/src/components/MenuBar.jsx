import React from 'react'
import Aspire_logo from '../images/Aspire_logo.png'
import Aspire_logo_only from '../images/Aspire_logo_only.png'


function MenuBar({screenWidth}) { 



   


  
  
  return (
    <div className='bg-primary h-screen text-white lg:p-10 md:p-10 flex md:flex-col lg:flex-col lg:gap-20' id='menuBar-area'>
        <div>
            <img src={ `${screenWidth> 600 ? Aspire_logo : Aspire_logo_only}`} alt="" className='lg:scale-50   lg:float-right lg:mr-16' id='aspireLogo' />
            <p className={` ${screenWidth<750 ? 'hidden':''} text-slate-500 text-semibold `}>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p> 

        </div>
        {screenWidth> 500 ?

            <ul className='flex flex-col gap-8  h-2/3 justify-evenly font-semibold z-50' id='menuBar'>
                <li className='flex items-center'><i className="fa fa-chevron-circle-up mr-4 text-xl" aria-hidden="true"></i><span>Home</span></li>
                <li className='text-secondary flex items-center  '><i className="fa fa-credit-card-alt  mr-4 text-xl" aria-hidden="true"></i><span>Cards</span></li>
                <li className='flex items-center'><span className="material-symbols-outlined  mr-4 text-xl">currency_exchange</span><span>Payments</span></li>
                <li className='flex items-center'><i className="fa fa-arrow-circle-up  mr-4 text-xl" aria-hidden="true"></i><span>Credit</span></li>
                <li className='flex items-center'><i className="fa fa-user  mr-4 text-xl" aria-hidden="true"></i><span>Settings</span></li>
            </ul>
            :<></>
            }

    </div>
  )
}

export default MenuBar