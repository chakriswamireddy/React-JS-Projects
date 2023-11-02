import React, { useEffect, useState } from 'react'


function ResultsPage({displayValue}) {
  const api = "https://nodejs5server.onrender.com/"
  const [apiData,setApiData] = useState([])

  useEffect(() => {
    fetch(api,{
      // mode: 'no-cors',
      headers: {
           "Content-Type": "application/json"
      },})
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    
      .then((data)=> {
        setApiData(data);
        console.log(apiData)
      } )
      .catch((error)=> console.log(error))
  

  }, [])
  
  return (
    <div>

          {displayValue && apiData.filter(item => item.name.toLowerCase().includes(displayValue.toLowerCase())).map(filtered => (


          <div key={filtered.id} id="main-box" className='flex lg:flex-row xl:flex-row lg:w-full h-full  place-content-center gap-7 flex-col'>
              <div className='lg:w-1/4 h-full sm:w-full px-4' >
                <div  className='font-bold text-3xl py-2'>{filtered.name}</div>
                <p>I am here to provide my {filtered.intro.replace('.','')}, all to assist you effectively</p>
                <div className='flex items-center py-3'>
                <i class="fa fa-star" aria-hidden="true" style={{color:'#3082bf'}}></i>
                <span className='text-blue-500 font-bold mx-1'>{filtered.rating}</span>
                <span>   ({filtered.reviewCount})</span>
                </div>

                <div className='shadow-lg px-2 py-6 rounded-xl border-2 border-gray-100 '>
                  <div className='flex justify-between py-2 px-3'>
                    <p>{filtered.taskComplexity} </p>
                    <p className='font-bold'>{filtered.price} </p>
                  </div>
                  <div className='py-4 px-3' >
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <span> &nbsp;{filtered.deliveryTime} </span>
                  </div>

                  <div className='flex justify-around  '>
                    <button className='bg-blue-500 px-3 py-1 rounded-lg text-white font-bold'>Request Proposal</button>
                    <button className=' border-2 border-blue-500 px-3 py-1 rounded-lg font-bold text-blue-500'>Chat with me</button>
                  </div>
                </div>
                <div className='shadow-lg p-2 rounded-xl border-2 border-gray-100 my-4 px-3 pb-10' >
                  <p className='font-bold text-2xl py-4'>What people say?</p>
                  <p>I cannot express enough gratitude for the support provided,{filtered.testimonial.text.replace('.',' ')} has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
                </div>
                
              </div>

              <div className=' lg:w-2/5 sm:w-full mx-2'>
                <img className='h-2/4 w-full rounded-2xl' src={filtered.image} alt="" />
                <p className='font-bold text-3xl py-3'>About {filtered.name} </p>
                <div className='flex justify-between'>
                  <div className='py-2'>
                    <p className='graytext'>FROM</p>
                    <p >{filtered.about.from} </p>
                  </div>
                  <div className='py-2'>
                    <p className='graytext'>Partner Since</p>
                    <p>{filtered.about.partnerSince} </p>
                  </div>
                  <div className='py-2'>
                    <p className='graytext'>AVERAGE RESPONSE TIME</p>
                    <p>{filtered.about.averageResponseTime} </p>
                  </div>
                </div>
                <div className='py-2'>
                  <p className='graytext'>ABOUT</p>
                  <p>I am {filtered.about.description}</p>
                </div>
                <div className='flex flex-wrap flex-col  lg:flex-row '>
                  <div className='w-1/2 my-3 lg:my-1' >
                    <p className='graytext'>SERVICES I OFFER</p>
                    <ul className='list-disc'>
                      {filtered.about.services.map((serv,index)=> (
                        <li key={index} className='ml-8' > {serv} </li>

                      ))}
                    </ul>
                  </div>
                  <div className='w-1/2 my-3 lg:my-1'>
                    <p className='graytext '>WHY ME?</p>
                    <ul className='list-disc'>
                      {filtered.about.benefits.map((benv,index)=> (
                        <li key={index} className='ml-8'> {benv} </li>

                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              

            </div>

            ))}
    </div>
  )
}

export default ResultsPage