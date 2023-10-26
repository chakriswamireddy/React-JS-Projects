import React, { useEffect, useState } from 'react'
import MenuBar from './MenuBar'
import MainBody from './MainBody'

function Homepage() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      
    };
    console.log(screenWidth)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return ( 
    <div className='flex sm:flex-row md:flex-row lg:flex-row flex-col lg:gap-8 md:gap-8 '>
      <div className='w-1/4'>
        <MenuBar screenWidth={screenWidth} />
      </div>
       <div className='w-2/3 lg:m-10 md:mt-10' >
          <MainBody screenWidth={screenWidth} />
       </div>
        
    </div>
  )
}

export default Homepage