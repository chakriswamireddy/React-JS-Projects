import React, { useState } from 'react'
import ImageEdit from './ImageEdit';

function Homepage() {

    const [imgSrc, setImgSrc] = useState(null)

    const [openPopup,setOpenPopup] = useState(false)
    
    const [imgClass,setImgClass] = useState('')

    const handleCloseClick=()=>{
        setOpenPopup(false)
    } 
    

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgSrc(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const downloadImg = () => {
    const imageUrl = imgSrc ;
    
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'downloaded_image.jpg'; // Specify the filename for the downloaded image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

    return (
        <div className='homepage'>
            <h2>Add Image/Icon </h2>
            <div>
                <h4>Upload Image</h4>
                <div id='input-area'>
                    <input type="file" accept='images/*'  className='green-btn' id="" onChange={handleImageChange} onClick={()=>setOpenPopup(!openPopup)}  />
                    <button className='green-btn'  >Choose From Device</button>
                </div>

                { openPopup && imgSrc && <ImageEdit handleCloseClick={handleCloseClick} imgSrc={imgSrc} imgClass={imgClass} setImgClass={setImgClass} />
                
                }



                {imgSrc &&  !openPopup && (
                    <div className='drop-shadow'>
                        <img src={imgSrc} alt="" className={imgClass} id='main-img' />
                    </div>
                    
                    
                )}

            </div>
        </div>
    )
}

export default Homepage