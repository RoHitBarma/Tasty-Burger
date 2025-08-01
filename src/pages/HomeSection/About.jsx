import React from 'react'
import aboutIMG from "../../assets/about/about-1.jpg"
import pizza from "../../assets/about/pizza.png"
import salad from "../../assets/about/salad.png"
import deliveryBike from "../../assets/about/delivery-bike.png"

const About = () => {
  return (
    <div>

      <section
        className='w-full h-[90vh] min-h-[90svh] flex items-center justify-center'
      >

        <div
          className='w-full max-w-7xl h-full 
            bg-no-repeat bg-center bg-cover sm:bg-cover md:bg-contain
            flex items-center justify-center
            px-4 sm:px-6 md:px-8'
          style={{ backgroundImage: `url(${aboutIMG})` }}
        >
          <div className='text-center -translate-y-18 sm:-translate-y-20'>
            <h1 className='text-2xl md:text-4xl font-bold mb-6 leading-snug'>THE BURGER TASTES BETTER WHEN <br /> YOU EAT IT WITH YOUR FAMILY</h1>
            <p className='text-sm md:text-base mb-6 leading-relaxed'>
              Porta samper lacus curcus, feuglat primis ultrice a ligula risus auctor an tempus feuglat dolor <br /> lacinia cubila curae integer orci congue and metus integer primis in integer metus.
            </p>
            <button className='bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600 transition-all'>EXPLORE FULL MENU</button>
          </div>
        </div>
      </section> 

      <section className='bg-amber-500 w-full py-12 px-16'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap gap-8 justify-around items-start'>
          <div className='flex flex-col items-center max-w-[20rem] gap-4 text-center'>
            <img src={pizza} alt="" className='w-20 object-contain' />
            <div className="text">
              <h2 className='text-xl font-semibold'>Original</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat quisquam quidem enim numquam consequatur debitis quas magnam illum voluptatum.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center max-w-[20rem] gap-4 text-center'>
            <img src={salad} alt="" className='w-20 object-contain' />
            <div className="text">
              <h2 className='text-xl font-semibold'>Quality Food</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat quisquam quidem enim numquam consequatur debitis quas magnam illum voluptatum.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center max-w-[20rem] gap-4 text-center'>
            <img src={deliveryBike} alt="" className='w-20 object-contain' />
            <div className="text">
              <h2 className='text-xl font-semibold'>Fast Delivery</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat quisquam quidem enim numquam consequatur debitis quas magnam illum voluptatum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About