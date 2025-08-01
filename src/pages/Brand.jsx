import React from 'react'
import appstore from '../assets/shop/appstore.png'
import playstore from '../assets/shop/googleplay.png'
import eshop from '../assets/shop/e-shop.png'

const Brand = () => {
  return (
    <div>
      <section className='w-full bg-yellow-500 px-4 pt-8'>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="text-field w-full md:w-[45%] flex flex-col justify-center space-y-2">
                <h2 className='text-3xl text-amber-900 font-semibold tracking-[1px]'>DOWNLOAD MOBILE APP AND</h2>
                <h1 className='text-4xl md:text-6xl text-amber-950 font-bold tracking-wide'>SAVE UPTO 20%</h1>
                <p className=''>
                    Aliquem a augue suscipit luctus neque purus ipsum and neque dolor primis liberto tempus vlandit varius.
                </p>
                <div className="appstoreIMG flex gap-2 mt-4">
                    <img src={appstore} alt="appstore"  className='w-40 md:w-44'/>
                    <img src={playstore} alt="playstore" className='w-40 md:w-44'/>
                </div>
            </div>
            <div>
                <img src={eshop} alt="" className='max-h-[500px]'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Brand
