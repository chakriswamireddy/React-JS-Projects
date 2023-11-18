import { blue } from '@mui/material/colors';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react'




function Piechart({data,text}) {

  const tooltipFormatter = (params) => {
    // Customize the tooltip content here
    return `<div style="background-color: rgba(0, 255, 255, 0.8); color: white; padding: 8px;">${params.data.label}: ${params.data.value}</div>`;
  };

  return (
    <div className=' piechart flex place-content-right w-1/3 relative'  >

        <PieChart 
      series={[
        {
          data: data,
          cx: 500,
          cy: 200,
          innerRadius: 220,
          outerRadius: 250,
          color : blue,
          tooltip: {
            formatter: tooltipFormatter,
          }
        },
      ]}
      height={300} width={800}
      slotProps={{
        legend: { hidden: true },
      }}
    />
      <span className='piechart-text'>{text} </span>


    </div>
  
  )
}

export default Piechart

