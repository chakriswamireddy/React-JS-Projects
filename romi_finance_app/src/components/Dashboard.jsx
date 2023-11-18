import React from 'react'
import '../Dashboard.css'
import TokensArea from './TokensArea'
import ethereum_small from '../images/ethereum_small.png'
import dollar from '../images/dollar.png'


function Dashboard() {
  return (
    <div className=' dashboard  flex gap-5 flex-col  '>
        <div className='flex flex-col gap-1'>
            <h1 className='flex text-3xl gap-2 font-bold ' > <span>
               Stats  </span>  <img src={ethereum_small} alt="" className='icon-xs self-center translate-y-1' /></h1>
            <p className='gray-text font-semibold'> Ethereum Total Stats start from 06 Jan 2022.</p>
            <p className='gray-text font-semibold' >For detailed stats:</p>
        </div>
        <div className='flex justify-evenly gap-4 flex-col lg:flex-row '>
            <table className='border border-slate-500 shadow-xl w-1/2 h-48 stats-tables'>
                <tr className='border border-slate-500 '>
                    <th className='text-left'>Overview</th>
                </tr>
                <tr>
                    <td>Aum</td>
                    <td>$34</td>
                </tr>
                <tr>
                    <td>$ZLP Pool</td>
                    <td>$34</td>
                </tr>
                <tr>
                    <td>24h Volume</td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>Long Positions</td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>Short Positions</td>
                    <td>$0</td>
                </tr>
               
            </table>

            <table className='border border-slate-500 w-1/2 h-48 stats-tables'>
                <tr className='border border-slate-500'>
                    <th className='text-left ' >Total Stats</th>
                </tr>
                <tr>
                    <td>Total Fees</td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td> Total Volume </td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>Floor Price Fund </td>
                    <td>$629,745</td>
                </tr>
            </table>
        </div>
        <TokensArea />
    </div>
  )
}

export default Dashboard