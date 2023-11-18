import React from 'react'
import Piechart from './utilities/Piechart';
import ZLPcomposition from './ZLPcomposition';
import DropDownMenu from './utilities/DropDownMenu';
import ethereum_small from '../images/ethereum_small.png'
import farrows from '../images/farrows.png'
import irish from '../images/irish.jpg'

const piechart1data =[
    { label: '94% in liquidity', value: 94 },
    { label: '6% not staked', value: 6 },

  ];

const piechart2data =[
    { label: '', value: 50.5 },
    { label: 'h', value: 49.5 },

  ];

function TokensArea() {
  return (
    <div>
        {/* <Piechart data={piechart2data} /> */}

        <h1 className='flex items-center text-3xl gap-2 font-bold'>Tokens<span><img src={ethereum_small} alt="" className='icon-xs translate-y-1' /></span> </h1>
        <p className='gray-text'>Platform and $ZLP index tokens.</p>
        <div className='flex gap-4 lg:flex-row flex-col  overflow-hidden  '>
            <div className='flex border border-slate-500 lg:w-1/2 token-tables'>
            <table className='w-2/3 '>
                <tr className='border-b border-slate-500 h-16'>
                    <th className='flex gap-3 items-center ' >
                        <span><img src={irish} alt="" className='icon' /></span>
                        <div>
                        <span>$ROMI  <DropDownMenu /> </span>
                        <p className='text-xs'>$ROMI</p>

                        </div>
                        

                    </th>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>$0.00</td>

                </tr>
                <tr>
                    <td>Supply</td>

                    <td>10,000 $ROMI</td>
                </tr>
                <tr>
                    <td>Total Staked</td>

                    <td>$0</td>
                </tr>
                <tr>
                    <td>Market Cap</td>

                    <td>$110</td>
                </tr>
            </table>
            <Piechart data={piechart1data} text={"Distribution"} />
            </div>
            <div className='flex token-tables lg:w-1/2 border border-slate-500 '>
            <table className='w-2/3'>
                <tr className='border-b h-16 border-slate-500 '>
                <th className='flex gap-3 items-center' >
                        <span className='relative' ><img src={farrows} alt="" className='icon ' /> <img src={ethereum_small} alt="" className='icon-xxs' /></span>
                        <div>
                        <span>$ZLP  <DropDownMenu /> </span>
                        <p className='text-xs'>$ZLP</p>

                        </div>
                        

                    </th>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>$0.00</td>

                </tr>
                <tr>
                    <td>Supply</td>

                    <td>10,000 $ROMI</td>
                </tr>
                <tr>
                    <td>Total Staked</td>

                    <td>$0</td>
                </tr>
                <tr>
                    <td>Market Cap</td>

                    <td>$110</td>
                </tr>
            </table>
            <Piechart data={piechart2data} text={"$ZLP Pool"} />
            </div>

        </div>
        <ZLPcomposition />
    </div>
  )
}

export default TokensArea