import React from 'react'
import Romi from '../images/Romi.png'
import discord from'../images/discord.png'

function Footer() {



  return (
    <div className='self-center flex flex-col gap-5 footer pt-5'>

        <div className='self-center flex items-center  '>
        <img src={Romi} alt="" height="40px"  width="40px"/>
            <span className='text-2xl'>Romi Finance</span>
        </div>

       

    <div className=' flex items-center text-4xl text-slate-300'>
      <a href="www.twitter.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      <a href="www.medium.com"><i class="fa fa-medium" aria-hidden="true"></i></a>
      <a href="www.github.com"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a href="www.telegram.com"><i class="fa fa-telegram" aria-hidden="true"></i></a>
      <a href="www.discord.com"><img src={discord} alt="" className='h-10 w-10' /></a>

    </div>

    <div className='self-center  flex gap-16 pb-5'>
      <span> Terms and conditions</span>
      <span>Referral Items</span>
      <span>Media kit</span>

    </div>
    </div>
  )
}

export default Footer