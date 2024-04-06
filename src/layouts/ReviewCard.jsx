import React from 'react'

const ReviewCard = ({ img,name}) => {
  return (
    <div className='bg-slate-50 border-2 border-black md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0,0.24)-0px_3px_8px]'>
      <div>
        <p className='text-gray-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            quibusdam reprehenderit nisi recusandae dolores pariatur!
            ipsam incidunt dolorem itaque porro dignissimos 
            mollitia asperiores totam nemo delectus!
        </p>
      </div>

      <div className='flex flex-row justify-center items-center mt-4 ga-4'>
        <img className=' rounded-full w-1/4' src={img} alt={img} />
        <h3 className='font-semibold'>{name}</h3>
      </div>
    </div>
  )
}

export default ReviewCard
