import React from 'react'
import DropDownMenu from './utilities/DropDownMenu'

function ZLPcomposition() {

    const tokens = [
        {'price':'$1,818.70','pool':'$19','Wdight':'50.49% / 25.00%','Utilization':'0.00%','type':'$ZOMI'},
        {'price':'$34,381.70','pool':'$0','Wdight':'0.00% / 25.00%','Utilization':'0.00%','type':'$ZLP'},
        {'price':'$1.37','pool':'0','Wdight':'0.00% / 25.00%','Utilization':'0.00%','type':'$ETH'},
        {'price':'$1.00','pool':'$14','Wdight':'49.50% / 25.00%','Utilization':'0.00%','type':'$WBTC'},
    ]

  return (
    <div>
        <span>$ZLP Index Composition</span>
        <div className='small-table '>

            {tokens.map((token,index) => (
                    <table key={index} className='border border-slate-500'>
                    <tr className='border'><th> {token.type} </th></tr>
                    <tr><td>Price </td> <td>{token.price}</td> </tr>
                    <tr><td>Pool </td> <td>{token.pool} </td></tr>
                    <tr><td>Weight </td> <td>{token.Wdight} </td> </tr>
                    <tr><td>Utilization</td> <td>{token.Utilization} </td> </tr>
                    </table>
            ) )}

        </div>
        <div>
            <table className='w-full border border-slate-500 h-60 big-table px-10'>
                <tr className='border border-slate-500'><th><span>ZLP Composition</span></th></tr>
                <tr className='text-left text-slate-400'>
                    <th className='text-left' >Token</th>
                    <th>PRICE</th>
                    
                     <th className='text-right'>POOL</th>
                     <th className='text-center'>WEIGHT</th>
                     <th className='text-right' >UTILIZATION</th>
                </tr>
                {tokens.map((token,index)=> (
                    <tr className=''>
                    <td> {token.type} <DropDownMenu /> </td>
                    <td>{token.price} </td>
                    <td className='dashed-underline text'>{token.pool} </td>
                    <td className='dashed-underline' >{token.Wdight} </td>
                    <td>{token.Utilization} </td>
                    </tr>
                
                ))}
            </table>
        </div>
    </div>
  )
}

export default ZLPcomposition