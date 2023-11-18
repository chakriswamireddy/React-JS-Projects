<<<<<<< HEAD
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
      if (popupClicked) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [popupClicked]);


    const perPage = 100; // Set the number of images you want per page
    const numberOfPages = 5; // Set the number of pages you want to fetch
    const accessKey = 'sGurrcEix8sbOgIp5ZeUc3mje3X5wyhXoWfzLEH4Sms';

useEffect(() => {
  const fetchUnsplashData = async () => {
    try {
      let allResults = [];
      for (let page = 1; page <= numberOfPages; page++) {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${searchedValue}&page=${page}&per_page=${perPage}`;
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        allResults = allResults.concat(response.data.results);
      }

      setImgsList(allResults);

      const newSuggestions = allResults.map((result) => result.description);
      if (newSuggestions) {
        const filteredList = newSuggestions.filter((element) => element !== null);
        const uniqueList = Array.from(new Set(filteredList));
        const sortedSuggestions = uniqueList.sort((a, b) => a.length - b.length);
        const slicedSuggestions = sortedSuggestions.slice(0, 5);
        setSuggestions(slicedSuggestions);
      }

      console.log(suggestions);
      console.log(searchedValue, 'from useEffect');
    } catch (error) {
      console.error('Error searching for photos on Unsplash:', error);
    }
  };

  fetchUnsplashData();
}, [searchedValue, suggestions]);


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
    <div >
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

=======
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
      if (popupClicked) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [popupClicked]);


    const perPage = 100; // Set the number of images you want per page
    const numberOfPages = 5; // Set the number of pages you want to fetch
    const accessKey = 'sGurrcEix8sbOgIp5ZeUc3mje3X5wyhXoWfzLEH4Sms';

useEffect(() => {
  const fetchUnsplashData = async () => {
    try {
      let allResults = [];
      for (let page = 1; page <= numberOfPages; page++) {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${searchedValue}&page=${page}&per_page=${perPage}`;
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        allResults = allResults.concat(response.data.results);
      }

      setImgsList(allResults);

      const newSuggestions = allResults.map((result) => result.description);
      if (newSuggestions) {
        const filteredList = newSuggestions.filter((element) => element !== null);
        const uniqueList = Array.from(new Set(filteredList));
        const sortedSuggestions = uniqueList.sort((a, b) => a.length - b.length);
        const slicedSuggestions = sortedSuggestions.slice(0, 5);
        setSuggestions(slicedSuggestions);
      }

      console.log(suggestions);
      console.log(searchedValue, 'from useEffect');
    } catch (error) {
      console.error('Error searching for photos on Unsplash:', error);
    }
  };

  fetchUnsplashData();
}, [searchedValue, suggestions]);


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
    <div >
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

>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default Gallery