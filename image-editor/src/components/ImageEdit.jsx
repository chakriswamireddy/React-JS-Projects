import React, { useState } from 'react'
import heart from '../assets/user_image_frame_1.png'
import square from '../assets/user_image_frame_2.png'
import circle from '../assets/user_image_frame_3.png'
import rectangle from '../assets/user_image_frame_4.png'


function ImageEdit({handleCloseClick,imgSrc,imgClass,setImgClass}) {

   

    const editedImage=(value) => {
        setImgClass(value)
        console.log(value)
    }

    const handleClosePopup =()=> {
      handleCloseClick();
      setImgClass('')
    }

  return (
    <div id='popup-box'>
        <span className="material-symbols-outlined" onClick={handleClosePopup}  > cancel </span>
        <h3>Uploaded Image</h3>
        <div className='drop-shadow'>
          <img src={imgSrc} alt="" className={imgClass} />
        </div>
        
        <div id='editor-tools'>
            <p onClick={()=>editedImage('')} >original</p>
            <img src={heart} alt="" onClick={()=>editedImage('heart')}  />
            <img src={square} alt="" onClick={()=>editedImage('square')} />
            <img src={circle} alt=""  onClick={()=>editedImage('circle')}/>
            <img src={rectangle} alt=""  onClick={()=>editedImage('rectangle')}/>
            
        </div>
        <button className='green-btn' onClick={handleCloseClick} > Use this image </button>
    </div>
  )
}

export default ImageEdit