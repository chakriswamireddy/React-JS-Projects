<<<<<<< HEAD
import React, { useState } from 'react'

function RecipeList({recipeData}) {
    // const [id,setId] = useState(0)

    // const increaseId = () => {
    //     setId(id+1);
    // }

  return (

    <div>
        <div className='grid grid-cols-3 hover:grid-cols-3 gap-x-16 gap-y-4 m-8  '>
            {recipeData.map((item,index) => 
            
            <div key={index}>
                <div className='rounded-lg bg-slate-400 flex flex-col shadow-lg shadow-slate-500/50 overflow-hidden hover:scale-105' >
                   <div className='bg-red-100 basis-1/2'>
                   <img src={item.recipe.image} alt="" className=' z-0 object-cover  w-full h-40 rounded-t-lg hover:scale-x-105  hover:object-cover hover:z-0' />
                   </div>
                    
                    <center>
                    <div className='text-slate-900 pb-4 z-10 overflow-hidden '>
                       
                            <h5 className='font-semibold my-2'>{item.recipe.label}</h5>
                            <p className='mb-4 font-normal'>Total Calories: {~~item.recipe.calories} </p>
                            <a href="#" className='rounded-full bg-blue-400 px-4 py-1 mt-4 hover:bg-blue-500 
                            hover:px-5 hover:py-2 hover:text-slate-100 shadow-slate-500/50 hover:shadow-slate-500/40'>Buy Now</a>
                        
                    </div>
                    </center>
                </div>
            </div>

            )}
        </div>
        
    </div>
  )
}

=======
import React, { useState } from 'react'

function RecipeList({recipeData}) {
    // const [id,setId] = useState(0)

    // const increaseId = () => {
    //     setId(id+1);
    // }

  return (

    <div>
        <div className='grid grid-cols-3 hover:grid-cols-3 gap-x-16 gap-y-4 m-8  '>
            {recipeData.map((item,index) => 
            
            <div key={index}>
                <div className='rounded-lg bg-slate-400 flex flex-col shadow-lg shadow-slate-500/50 overflow-hidden hover:scale-105' >
                   <div className='bg-red-100 basis-1/2'>
                   <img src={item.recipe.image} alt="" className=' z-0 object-cover  w-full h-40 rounded-t-lg hover:scale-x-105  hover:object-cover hover:z-0' />
                   </div>
                    
                    <center>
                    <div className='text-slate-900 pb-4 z-10 overflow-hidden '>
                       
                            <h5 className='font-semibold my-2'>{item.recipe.label}</h5>
                            <p className='mb-4 font-normal'>Total Calories: {~~item.recipe.calories} </p>
                            <a href="#" className='rounded-full bg-blue-400 px-4 py-1 mt-4 hover:bg-blue-500 
                            hover:px-5 hover:py-2 hover:text-slate-100 shadow-slate-500/50 hover:shadow-slate-500/40'>Buy Now</a>
                        
                    </div>
                    </center>
                </div>
            </div>

            )}
        </div>
        
    </div>
  )
}

>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default RecipeList