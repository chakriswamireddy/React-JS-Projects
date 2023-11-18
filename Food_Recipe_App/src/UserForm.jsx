<<<<<<< HEAD
import React , {useState} from 'react'
import RecipeList from './RecipeList';


function UserForm() {
    const [search,setSearch] = useState('');
    const [recipeData,setRecipeData] = useState([]);
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const APP_ID = '364bac26';
        const APP_KEY = '9ec36c5e8639bab12d9c878936f84cc2'
        console.log(search);
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=24&calories=591-722&health=alcohol-free`,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response)=> response.json())
        .then((messages) => {setRecipeData(messages.hits);
          console.log(messages.hits)

        });
        
        
    }
  return (
    <div className=''>
        <form action="" onSubmit={submitHandler} className='flex flex-col align-center w-1/5 my-0 mx-auto'>
            <input type="text" placeholder='Enter the Ingredient' value={search} onChange={(e)=> setSearch(e.target.value)} className='border-1 bg-slate-100 outline-none py-2 m-4 text-center' />
            <input type="submit" value="Search" className='cursor-pointer w-2/5 mx-auto my-0 bg-blue-400 p-2 rounded-md text-white' />
        </form>
        {recipeData.length>0 ?
        <RecipeList recipeData = {recipeData} /> :
         null }
    </div>
  )
}

=======
import React , {useState} from 'react'
import RecipeList from './RecipeList';


function UserForm() {
    const [search,setSearch] = useState('');
    const [recipeData,setRecipeData] = useState([]);
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const APP_ID = '364bac26';
        const APP_KEY = '9ec36c5e8639bab12d9c878936f84cc2'
        console.log(search);
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=24&calories=591-722&health=alcohol-free`,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response)=> response.json())
        .then((messages) => {setRecipeData(messages.hits);
          console.log(messages.hits)

        });
        
        
    }
  return (
    <div className=''>
        <form action="" onSubmit={submitHandler} className='flex flex-col align-center w-1/5 my-0 mx-auto'>
            <input type="text" placeholder='Enter the Ingredient' value={search} onChange={(e)=> setSearch(e.target.value)} className='border-1 bg-slate-100 outline-none py-2 m-4 text-center' />
            <input type="submit" value="Search" className='cursor-pointer w-2/5 mx-auto my-0 bg-blue-400 p-2 rounded-md text-white' />
        </form>
        {recipeData.length>0 ?
        <RecipeList recipeData = {recipeData} /> :
         null }
    </div>
  )
}

>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default UserForm