import React from 'react'
import promotionImg from '../assets/promotion/pro.png'
import parallax from '../assets/parallax/bg.jpg'
import '../styles/parallax.css'

const Promotion = () => {
  return (
    <>
      <section className='w-full px-8 py-6'>
        <div className='max-w-7xl mx-auto '>
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-10'>
            <div className="image w-full md:w-[40%]">
              <img src={promotionImg} alt="" className='w-full sm:max-h-[400px] md:max-h-[500px] object-cover rounded-lg' />
            </div>
            <div className='w-full md:w-[47%] space-y-4 text-center md:text-left'>
              <h1 className='text-3xl sm:text-3xl font-bold text-gray-800 leading-snug'>
                NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER
              </h1>
              <p className='text-base sm:text-lg text-gray-700'>
                Sempur lacus cursus porta primis ligula risus tempus and saggitis lipsum manuris lectus laoreet purus impsum tempor enim  ipsum porta justo integer ultrice aligula lectus aenean magna and pulviner purus at pretium gravida.
              </p>
              <ul className='p-1 list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base'>
                <li>
                  Fringilla risus luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien
                </li>
                <li>Quaerat sodales sapien euismod purus blandit.</li>
                <li>
                  Nemo ipsam egestas vulute turpis dolors ut aliquam Quaerat sodales sapien undo pretium a purus mauris.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='parallax-scroll ' style={{backgroundImage: `url(${parallax})`}}></section>
    </>
  )
}

export default Promotion
