import React from 'react'

function HeroSection() {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>Your feet deserves the best </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut omnis optio modi accusamus cupiditate corporis, minus
                exercitationem ratione perspiciatis eligendi!
            </p>
            <div className='hero-btns'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <h5>Also available on</h5>
            <div className='buy-options'>
               
                <img src="/images/amazon.png" alt=""  height='40px' width='40px'/>
                <img src="/images/flipkart.png" alt=""  height='40px' width='40px' />
            </div>
        </div>
        <div className='hero-img'>
            <img src="/images/shoe.png" alt=""  height='700px' width='700px'/>
        </div>
    </div>
  )
}

export default HeroSection