<<<<<<< HEAD
import React from 'react'

function CreatorSection({popupImg}) {
  return (
    <div className='bg-slate-100  rounded-br-2xl rounded-bl-2xl w-full sm:w-120 md:w-120 lg:w-120' >
        
        <div className='bg-slate-100 lg:w-max h-16 flex text-xs gap-1 lg:gap-4 py-2 justify-items-center px-4   '>
                <img src={popupImg.user.profile_image.large} alt="" className='rounded-3xl ' />
                <div className='flex flex-col '>
                <p className='font-bold pt-3 pr-2'> {popupImg.user.first_name} {popupImg.user.last_name} </p>
                <p className='text-slate-400' > @{popupImg.user.username} </p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row lg:gap-5 lg:text-sm'>
                <span className='text-slate-400 flex gap-1 items-center lg:pt-2'> <i className="fa fa-instagram" aria-hidden="true"></i> <p>{popupImg.user.social.instagram_username} </p> </span>
                <span className='text-slate-400 flex gap-1 items-center lg:pt-2'> <i className="fa fa-twitter" aria-hidden="true"></i> <p>{popupImg.user.social.twitter_username} </p> </span>
                <span className='text-slate-600 flex gap-1  items-center ml-auto pt-2'> <i className="fa fa-thumbs-o-up" aria-hidden="true"></i><p>{popupImg.user.total_likes}</p></span>


                </div>
                
                
                
        </div>
        <div className='px-4 mt-3' >
            <p className='font-bold text-xs text-slate-600 mb-2'>Related Tags</p>
            <div className='grid grid-cols-4 lg:grid-cols-7'>
                {popupImg.tags.map((tag,index) => (
                    <span key={index} className=' p-1 text-xs w-max mb-4 rounded text-slate-700 text-xs text-center bg-slate-200'> {tag.title} </span>
                ))}
            </div>
        </div>


    </div>
  )
}

=======
import React from 'react'

function CreatorSection({popupImg}) {
  return (
    <div className='bg-slate-100  rounded-br-2xl rounded-bl-2xl w-full sm:w-120 md:w-120 lg:w-120' >
        
        <div className='bg-slate-100 lg:w-max h-16 flex text-xs gap-1 lg:gap-4 py-2 justify-items-center px-4   '>
                <img src={popupImg.user.profile_image.large} alt="" className='rounded-3xl ' />
                <div className='flex flex-col '>
                <p className='font-bold pt-3 pr-2'> {popupImg.user.first_name} {popupImg.user.last_name} </p>
                <p className='text-slate-400' > @{popupImg.user.username} </p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row lg:gap-5 lg:text-sm'>
                <span className='text-slate-400 flex gap-1 items-center lg:pt-2'> <i className="fa fa-instagram" aria-hidden="true"></i> <p>{popupImg.user.social.instagram_username} </p> </span>
                <span className='text-slate-400 flex gap-1 items-center lg:pt-2'> <i className="fa fa-twitter" aria-hidden="true"></i> <p>{popupImg.user.social.twitter_username} </p> </span>
                <span className='text-slate-600 flex gap-1  items-center ml-auto pt-2'> <i className="fa fa-thumbs-o-up" aria-hidden="true"></i><p>{popupImg.user.total_likes}</p></span>


                </div>
                
                
                
        </div>
        <div className='px-4 mt-3' >
            <p className='font-bold text-xs text-slate-600 mb-2'>Related Tags</p>
            <div className='grid grid-cols-4 lg:grid-cols-7'>
                {popupImg.tags.map((tag,index) => (
                    <span key={index} className=' p-1 text-xs w-max mb-4 rounded text-slate-700 text-xs text-center bg-slate-200'> {tag.title} </span>
                ))}
            </div>
        </div>


    </div>
  )
}

>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default CreatorSection