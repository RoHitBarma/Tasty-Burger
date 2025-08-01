import React from 'react'
import contactBanner from '../assets/footer/banner-1.jpg'

const Contact = () => {
  return (
    <section className='w-full h-[90vh]'>
      <div 
        style={{backgroundImage: `url(${contactBanner})`}}
        className='w-full flex justify-center items-center h-full bg-cover bg-center bg-no-repeat object-contain'
      >
        <div className='w-[90%] md:w-[50%]  h-full flex flex-col text-center items-center justify-center gap-6 p-3 md:p-8'>
          <h3 className='text-2xl md:text-3xl font-semibold uppercase'>We Guarantee</h3>
          <h1 className='text-4xl font-bold uppercase'>30 minutes delivery</h1>
          <p className=' text-gray-700 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe commodi deserunt, excepturi rem ratione voluptas numquam ut quos voluptatum doloribus dolor itaque assumenda quod illum tempora quo, iusto repellendus!</p>
          <button className='bg-red-600 hover:bg-red-700 transition-all px-6 py-2 rounded text-white text-lg font-semibold'>Call: 999-888-7777</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
