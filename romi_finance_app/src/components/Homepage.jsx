import React from 'react'
import Navbar from './Navbar'
import Statsbar from './Statsbar'
import Romi from '../images/Romi.png'
import discord from'../images/discord.png'
import drop from '../images/drop.png'
import down from '../images/down.png'
import flag from '../images/flag.png'
import farrows from '../images/farrows.png'
import irish from '../images/irish.jpg'

function Homepage() {
  return (
    <div className='homepage '>
      
      <div className='whole-body'>


        <div className="headline flex flex-col gap-3">
          <h1 className='text-5xl font-bold' >Decentralized Perpetual Exchange</h1>
          <p className='text-slate-400 text-xl mt-3'> Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
          <button className='green-btn mt-3 w-max'>Launch Exchange</button>
        </div>
        <Statsbar />
        <hr />

        <div className='rowflex'>
          <div>
            <span className='flex items-center gap-5'> <img src={drop} alt="" className='w-10 h-10' /> <span className='text-xl'>Reduce Liquidation Risks</span></span>
            <p className='text-lg  mt-3'> An aggregate of high-quality price
              feeds determine when liquidations
              occur. This keeps positions safe
              from temporary wicks.</p>
          </div>
          <div >
            <span className='flex items-center gap-5'> <img src={flag} alt="" className='w-10 h-10' /> <span className='text-xl'>Save on Costs</span></span>
            <p className='text-lg mt-3'>Enter and exit positions with
              minimal spread and zero price
              impact. Get the optimal price
              without incurring additional costs.</p>
          </div>
          <div>
            <span className='flex items-center '> <img src={down} alt="" className='w-10 h-10' /> <span className='text-xl'>Simple Swaps</span></span>
            <p className='text-lg  mt-3'>Open positions through a simple
              swap interface. Conveniently swap
              from any supported asset into the
              position of your choice.</p>
          </div>
        </div>

        <h2 className='text-3xl font-bold '>Two tokens create our ecosystem</h2>
        <div className=' two-tokens'>
          <div className='border  rounded-xl p-5 flex flex-col gap-4' >
            <span className='flex items-center gap-3'> <img src={irish} alt="" className='icon' /> <span className='text-2xl'>$ROMI</span></span>
            <p className='text-lg' >$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.</p>
            <p className='text-slate-400'>Ethereum APR: ...%</p>
            <div>
              <button className='green-btn mr-4'>Buy</button>
              <button className='p-1 px-5 border rounded'>Read more</button>
            </div>
          </div>
          <div className='border  rounded-xl p-5 flex flex-col gap-4'>
            <span className='flex items-center gap-3' > <img src={farrows} alt="" className='icon' />  <span className='text-2xl'>$ZLP </span></span>
            <p className='text-lg' >$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.</p>
            <p className='text-slate-400' > Ethereum APR: ...%</p>
            <div>
              <button className='green-btn mr-4' >Buy</button>
              <button className='p-1 px-5 border rounded' >Read more</button> 
            </div>
          </div>
        </div>
       

        {/* contact- */}



      </div>

    </div>
  )
}

export default Homepage