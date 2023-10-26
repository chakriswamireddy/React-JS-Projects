
import { useState } from 'react'
import Aspire_logo from '../images/Aspire_logo.png'
import Visa_Logo from '../images/Visa_Logo.png'

function DebitCard() {

   
    const [showCardNo,setShowCardNo] = useState(true)
    const realCardNo = [4567,1338,2886]
    const dotCardNo = Array(12).fill('fa fa-circle');
    const [cardNo,setCardNo] = useState(dotCardNo)

    const showHideNo =() => {
      setShowCardNo(!showCardNo)
      showCardNo ? setCardNo(realCardNo): setCardNo(dotCardNo)
        
    }

  return (
    <div className='lg:w-full flex flex-col ml-7 mt-3 lg:mt-5 justify-self-center  lg:ml-0' id='debitcard'>
        <button className='text-secondary flex gap-1 self-end font-bold text-sm '  onClick={showHideNo}><span className="material-symbols-outlined text-sm font-bold mt-0.5 "> visibility </span><span>Show Card Number</span></button>
        <div className="bg-secondary lg:w-96 w-80  h-60 rounded-xl text-white flex flex-col justify-evenly p-4 gap-4">
        
          <img src={Aspire_logo} alt="" className='white-logo w-1/4  p-1 self-end ' />
            
            <p className='font-bold tracking-wider text-lg'>Mark Henry</p>
            <div className='text-sm font-bold' >
              {cardNo.map((no,index)=> (
                isNaN(no) ? <i className={`${no} text-xs  text-white ${index%4===0 && index>0 ? 'ml-3':''}`} aria-hidden="true" ></i> : <span className={`${index!==11 ? 'mr-3':''}`}>{no} </span> 
                
              ))}
              <span className='ml-3'>2020</span>
            
            </div>
            <div className='text-xs flex justify-start gap-10 font-bold'>
              <span>Thru: 12/20 </span>
              <span> <span className='mr-3'>CVV:</span>
                {Array.from({length:3},(_,index) => (
                  <i key={index} className="fa fa-asterisk mx-1" aria-hidden="true"></i>
                ))}
                
              </span>
            </div>
            <div className='w-full'>
              <img src={Visa_Logo} alt="" className='white-logo w-12 float-right '  />
            </div>
            

        </div>
    </div>
  )
}

export default DebitCard