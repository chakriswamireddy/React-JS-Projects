import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css';
import PopupCard from './PopupCard';
function Gallery({searchedValue,valueChangeBySuggestions}) {

    const [imgsList , setImgsList] = useState([])

    const [popupClicked,setPopupClicked] = useState(false)
    const [popupImg,setPopupImg] = useState([])
    

    const [suggestions, setSuggestions] = useState([]);
    




    useEffect(() => {
      const accessKey = 'sGurrcEix8sbOgIp5ZeUc3mje3X5wyhXoWfzLEH4Sms'
      const apiUrl = `https://api.unsplash.com/search/photos?query=${searchedValue}&page=1&per_page=50`

      axios.get(apiUrl, {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((response) => {
        setImgsList(response.data.results);
        setSuggestions(response.data.results.map((result)=> result.description))
        const newSuggestions = response.data.results.map((result)=> result.description)

        if(newSuggestions != null) {

          var filteredList = newSuggestions.filter(element => element !== null);
          filteredList = Array.from(new Set(filteredList));
          const sortedSuggestions = filteredList.slice().sort((a, b) => a.length - b.length);
          const slicedSuggestions = sortedSuggestions.slice(0, 5);
          setSuggestions(slicedSuggestions);
        }
        console.log(suggestions)

        console.log(searchedValue ,"from use effecct")

        
        

      })
      .catch((error) => {
        console.error('Error searching for photos on Unsplash:', error);
      });

      
    
    }, [searchedValue,suggestions])

  const handleClick=(item)=> {
    setPopupClicked(true);
    setPopupImg(item)
  }
  const handleCloseClick=() => {
    setPopupClicked(false)
    setPopupClicked(null)
  }

  const breakpointColumnsObj = {
    default: 5, 
    1100: 4,   
    700: 2,    
  };

    
  return (
    <div>
        <ul className='bg-indigo-50 w-1/6 min-w-40 mx-auto block pl-5 shadow-xl'>
            { suggestions.length > 0 && suggestions.map((result,index)=> (
                <li key={index} onClick={() => valueChangeBySuggestions(result) } className='cursor-pointer py-1' >{ result } </li>

                
            ) )}
        </ul>

        <PopupCard popupClicked={popupClicked} popupImg={popupImg} handleCloseClick={handleCloseClick} />

        <Masonry
        breakpointCols={breakpointColumnsObj} 
        className="flex gap-2" 
        columnClassName=""
      >
        {imgsList.length > 0 &&
          imgsList.map((item,index) => (
            <div key={item.id} onClick={()=> handleClick(item)} className='border-2 lg:m-2 xl:m-2 sm:m-1 border-slate-500 rounded-3xl m-1 ' >

              <img src={item.urls.small} alt="" className=' rounded-tl-3xl rounded-tr-3xl' />
              <div className='flex m-3'>
                <img src={item.user.profile_image.large} alt="" className='rounded-full lg:w-12 lg:h-12 w-8 h-8' />
                <div className=' lg:mx-4 xl:mx-4 sm:text-xs mx-2 lg:text-sm'>
                  <p> {item.user.first_name} {item.user.last_name} </p>
                  <p> @{item.user.username} </p>

                </div>
                
                <span className='ml-auto mt-2 sm:text-xs '> <i className="fa fa-thumbs-o-up mr-1" aria-hidden="true"></i>
                  {item.user.total_likes} </span>

              </div>
              
            </div>
          ))}


        
      </Masonry>

      

    </div>
  )
}

export default Gallery