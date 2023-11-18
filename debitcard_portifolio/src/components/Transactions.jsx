import { useState } from 'react'
import exchange from '../images/exchange.png'

function Transactions({ screenWidth }) {

  const [expandShow,setExpandShow] = useState(true)


  const expandClick =() => {
    setExpandShow(!expandShow)
  }




  const transactions = [
    { 'icon': 'fa fa-archive', 'name': 'Hamleys', 'date': '20 May 2020', 'card-icon': 'fa fa-credit-card-alt', 'bottom-text': 'Refund on debit Card', 'money': '+S$ 150', 'iconColor': 'text-blue-400', 'iconBg': 'bg-blue-100' },
    { 'icon': 'fa fa-plane', 'name': 'Hamleys', 'date': '20 May 2020', 'card-icon': 'fa fa-credit-card-alt', 'bottom-text': 'Charged to debit Card', 'money': '-S$ 150', 'iconColor': 'text-green-400', 'iconBg': 'bg-green-100' },

    { 'icon': 'fa fa-bullhorn', 'name': 'Hamleys', 'date': '20 May 2020', 'card-icon': 'fa fa-credit-card-alt', 'bottom-text': 'Charged to debit Card', 'money': '-S$ 150', 'iconColor': 'text-red-400', 'iconBg': 'bg-red-100' },
    { 'icon': 'fa fa-archive', 'name': 'Hamleys', 'date': '20 May 2020', 'card-icon': 'fa fa-credit-card-alt', 'bottom-text': 'Charged to debit Card', 'money': '-S$ 150', 'iconColor': 'text-blue-400', 'iconBg': 'bg-blue-100' },

  ]
  // console.log('-s$ 150'.startsWith('+'))
  return (
    <div id='transxBox' className='popup bg-white '>
      <div>
        <div className='blue-box shadow-sm rounded-tl-xl rounded-tr-xl popup '>
          <img src={exchange} alt="" className='w-6 h-6  border border-primary rounded ' />
          <span className='text-primary font-semibold' >Recent Transactions</span>

          <i className="fa fa-chevron-circle-left ml-auto " aria-hidden="true" onClick={expandClick} id={`${expandShow ? 'norotateIcon':'rotateIcon'}`} ></i>
        </div>


      </div>

      <div className=' rounded-br-xl rounded-bl-xl border lg:text-sm text-xs relative bg-white z-20'  >
        { transactions.map((item, index) => (
          <div key={index} className={`flex gap-2 justify-evenly py-3 px-4 ${index!==3? 'border':''}   ${expandShow?'viewTxs':'hideTxs' }`}  >
            <i className={`${item.icon} ${item.iconBg} ${item.iconColor} self-start p-4 rounded-full`} aria-hidden="true"></i>
            <div className='flex flex-col gap-1.5'>
              <p className='font-bold'>{item.name} </p>
              <p className='text-slate-400'>{item.date} </p>
              <span className='flex gap-4 items-center'><i className={`${item['card-icon']} bg-primary text-sm text-white py-0.5 px-2 rounded-xl`} aria-hidden="true"></i><span className='text-blue-700 font-semibold'>{item['bottom-text']}</span></span>
            </div>

            <div className='flex items-start'>
              <span className={`${item.money.startsWith('+') ? 'bg-green' : ''} font-bold text-sm pt-0.5`}>{item.money} </span>
              <span className="material-symbols-outlined font-thin text-slate-300"> chevron_right </span>
            </div>

            

          </div>


        ))}


      

      </div>

      <div className={`text-green-500 bg-green-100 text-center pb-3 pt-7 rounded-br-lg rounded-bl-lg relative bottom-4 z-0   ${expandShow?'viewTxs':'hideTxs' }`}>
        <button  >View all Transactions</button>
      </div>


      {screenWidth < 500 ?

        <ul className='flex flex-col gap-8  h-2/3 justify-evenly font-semibold z-20 w-full shadow-2xl' id='menuBar'>
          <li className='flex items-center'><i className="fa fa-chevron-circle-up mr-4 text-xl" aria-hidden="true"></i><span>Home</span></li>
          <li className='text-secondary '><i className="fa fa-credit-card-alt  mr-4 text-xl" aria-hidden="true"></i><span>Cards</span></li>
          <li className='flex items-center'><span className="material-symbols-outlined  mr-4 text-xl">currency_exchange</span><span>Payments</span></li>
          <li className='flex items-center'><i className="fa fa-arrow-circle-up  mr-4 text-xl" aria-hidden="true"></i><span>Credit</span></li>
          <li className='flex items-center'><i className="fa fa-user  mr-4 text-xl" aria-hidden="true"></i><span>Settings</span></li>
        </ul>
        : <></>
      }



    </div>
  )
}

export default Transactions