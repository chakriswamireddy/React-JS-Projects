import React from 'react'
import CreatorSection from './CreatorSection'

function PopupCard({popupClicked,popupImg,handleCloseClick}) {
  return (
    <div className='relative smooth-transition transition' onLoad={()=> document.body.style.overflow='visible'}>

        
        {popupClicked && popupImg && 
          <div className=' flex flex-col fixed h-screen w-screen fixed bg-gradient-to-b from-slate-900  to-slate-900 scale-200 top-0  z-5 bg-fixed  rounded-2xl'>
             <div className='flex-1 relative w-max h-40 scale-110 mx-auto my-28 relative '>
            <img src={popupImg.urls.small} alt="" className='relative h-80 w-120 object-cover  rounded-tr-2xl rounded-tl-2xl ' />
            <i aria-hidden="true" onClick={() =>handleCloseClick()} style={{color:'white'}} className='fa fa-times absolute top-0 right-0 scale-150 shadow-lg shadow-blue-800 rounded-2xl z-6' ></i>
            
            <div>
                <button className='text-white text-xs absolute left-4 bottom-1/2 border-2 border-slate-100 rounded-md px-1'> <i className="fa fa-share-alt" aria-hidden="true"></i> Share</button>
                <button className='text-white text-xs absolute left-24 bottom-1/2 border-2  border-slate-100  rounded-md px-1'> <i className="fa fa-info" aria-hidden="true"></i> Info </button>

            </div>
            <button className='text-black text-xs absolute bottom-1/2 right-4 bg-green-400 rounded-md px-2 py-1'> <a href={popupImg.links.download}> Download Image</a></button>


            <CreatorSection popupImg={popupImg} />
            

            </div>

            

          </div>
          }

</div>
  )
}

export default PopupCard