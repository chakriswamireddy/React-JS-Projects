import React from 'react'


function PagesSection({ users }) {
  return (
    <div className='page-section'>
      { users && users.length > 0 && users.map((item) => (



        <div className='user-item' key={item.id}>
          <div>
            <img src={item.avatar} alt="" />
            <i className={` fa fa-${item.gender === "Male" ? 'mars' : 'venus'} `} aria-hidden="true"></i>
          </div>

          <div>
            <span> {item.first_name} </span>
            <span> {item.last_name} </span>

          </div>
          <div>

            <span> {item.domain} </span>
          </div>



          {item.available ? (
            <div id='green-light'>
              <span ></span>
              <span> Available </span>

            </div>

          ) : (
            <div id='red-light'>
              <span ></span>
              <span> Not Available </span>

            </div>
          )}

          <div>  <button id='email-btn' > {item.email} </button> </div>

        </div>


      ))}
    </div>
  )
}

export default PagesSection