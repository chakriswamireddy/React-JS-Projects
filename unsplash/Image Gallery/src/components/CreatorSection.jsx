import React from 'react'

function CreatorSection({popupImg}) {
  return (
    <div className='bg-slate-100 w-120  rounded-br-2xl rounded-bl-2xl' onLoad={()=> document.body.style.overflow='hidden'}>
        
        <div className='bg-slate-100 w-120 h-16 flex text-xs gap-4 py-2 justify-items-center px-4   '>
                <img src={popupImg.user.profile_image.large} alt="" className='rounded-3xl ' />
                <div className='flex flex-col '>
                <p className='font-bold pt-3 pr-2'> {popupImg.user.first_name} {popupImg.user.last_name} </p>
                <p className='text-slate-400' > @{popupImg.user.username} </p>
                </div>
                <span className='text-slate-400 flex gap-1 items-center pt-2'> <i className="fa fa-instagram" aria-hidden="true"></i> <p>{popupImg.user.social.instagram_username} </p> </span>
                <span className='text-slate-400 flex gap-1 items-center pt-2'> <i className="fa fa-twitter" aria-hidden="true"></i> <p>{popupImg.user.social.twitter_username} </p> </span>
                <span className='text-slate-600 flex gap-1  items-center ml-auto pt-2'> <i className="fa fa-thumbs-o-up" aria-hidden="true"></i><p>{popupImg.user.total_likes}</p></span>

                
                
        </div>
        <div className='px-4 mt-3' >
            <p className='font-bold text-xs text-slate-600 mb-2'>Related Tags</p>
            <div className='grid grid-cols-7'>
                {popupImg.tags.map((tag,index) => (
                    <span key={index} className=' p-1 text-xs w-max mb-4 rounded text-slate-700 text-xs text-center bg-slate-200'> {tag.title} </span>
                ))}
            </div>
        </div>


    </div>
  )
}

export default CreatorSection