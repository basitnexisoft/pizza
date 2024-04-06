import React from 'react'
import img2 from '../assets/img/pic2.webp'
import img4 from '../assets/img/pic4.webp'
import img3 from '../assets/img/pic3.webp'

import ReviewCard  from '../layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
       <h1 className=' text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>
        Customer's Review
        </h1>

       <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ReviewCard img={img2} name="sophia Azura"/>
            <ReviewCard img={img4} name ="joha Deo"/>
            <ReviewCard img={img3} name ="Victoria Zoe"/>
       </div>
    </div>
  )
}

export default Review
