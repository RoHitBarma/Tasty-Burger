import React, { useState } from 'react'
import burgers from '../data/menuData'
// import { CiHeart } from "react-icons/ci";
import adsOne from '../assets/menu/ads-1.jpg';
import adsTwo from '../assets/menu/ads-2.jpg';
import { FaHeart } from "react-icons/fa6";
import { IoBagAddOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Menu = () => {
  const [visibleCount, setVisibleCount] = useState(8)
  const [likedItem, setLikedItem] = useState([])

  const toggleLike = (index) => {
    setLikedItem((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className='w-full px-4 py-12'>
      <div className='text-center mt-4 mb-10'>
        <h1 className='text-4xl font-bold text-red-600 mb-3'>Our Crazy Burgers</h1>
        <p className='text-gray-600'>Aliquram a augue suscipit, luctus neque ipsum neque undo dolor primis <br /> libero tempus, blandit a cursus varius magna.</p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
        {burgers.slice(0, visibleCount).map((burger, index) => (
          <div key={index} className="card w-full sm:w-[17rem] h-[23rem] flex flex-col group shadow-md rounded-md overflow-hidden">
            <img src={burger.img} className="w-full h-50 object-cover" alt="..." />

            <div className="card-body flex flex-col flex-grow space-y-2 p-2">
              <div className="ratings flex justify-between items-center">
                <p className='flex'>
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return(
                      <span key={i}>
                        {burger.rating >= ratingValue ? (
                          <FaStar className='text-yellow-400 text-sm'/>
                        ) : burger.rating >= ratingValue - 0.5 ? (
                          <FaStarHalf className='text-yellow-400 text-sm'/>
                        ) : (
                          <FaStar className='text-gray-400 text-sm'/>
                        )}
                      </span>
                    )
                  })}
                </p>
                <p>
                  <FaHeart
                    className={`text-lg cursor-pointer transition-colors duration-300 ${
                      likedItem.includes(index) ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => toggleLike(index)}
                  />
                </p>
              </div>
              <h5 className="card-title text-xl font-semibold">{burger.title}</h5>
              <p className="card-text text-sm">{burger.paragraph}</p>
              <div className='flex justify-between text-sm mt-auto'>
                <h5 className="bg-amber-900 text-amber-500 py-0.5 px-1 font-semibold rounded cursor-pointer">{burger.price}</h5>
                <button className='flex items-center gap-1 text-sm text-gray-500 
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-300 cursor-pointer'
                >
                  <IoBagAddOutline />
                  <Link to="/"> <span>Order Now</span></Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full flex flex-col justify-center md:flex-row gap-4 pt-10 px-4'>
        <div className=' w-full md:w-[42%] h-50 bg-cover bg-center rounded-lg relative' style={{backgroundImage: `url(${adsOne})`}}>
          <div className="absolute inset-0 flex items-center justify-end pr-7 rounded-lg">
            <div className='text-right space-y-1'>
              <h1 className='text-lg font-semibold'>Get Your Free</h1>
              <h1 className='text-3xl font-bold'>CHEESE FRIES</h1>
              <button className='font-semibold mt-2 px-3 py-1 bg-amber-400 rounded hover:bg-amber-500 cursor-pointer transition-all duration-300'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[55%] h-50 bg-cover bg-center rounded-lg relative' style={{backgroundImage: `url(${adsTwo})`}}>
          <div className="absolute inset-0 flex items-center justify-end pr-7 rounded-lg">
            <div className='text-right space-y-1'>
              <h1 className='text-lg font-semibold'>Get Your Free</h1>
              <h1 className='text-3xl font-bold'>Tasty Burgers</h1>
              <button className='font-semibold mt-2 px-3 py-1 bg-amber-400 rounded hover:bg-amber-500 cursor-pointer transition-all duration-300'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Menu
