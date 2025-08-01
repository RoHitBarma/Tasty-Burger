import React from 'react'
import { useState } from 'react'
import bgPizza from '../assets/blog/reviews.jpg'
import reviews from '../data/reviewData'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviews.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }
  const review = reviews[currentIndex];
  return (
    <>
      <section className='w-full'>
        <div
          className='bg-cover bg-center bg-fixed py-20 relative max-h-[500px] flex items-center justify-center'
          style={{ backgroundImage: `url(${bgPizza})` }}
        >
          {/* Review content */}
          <div className="reviews max-w-6xl mx-auto px-4">
            <h2 className="text-yellow-600 text-3xl font-bold text-center mb-6">What Our Customers Say</h2>

            <div className='flex flex-col items-center gap-6'>
              <div>
                <img src={review.userImg} alt="" className='w-24 h-24 rounded-full shadow-md' />
              </div>
              <h3 className="text-xl text-white font-semibold">{review.userName}</h3>
              <div className="userText text-white">{review.userDesc}</div>
              <div className="userRatings flex justify-center text-yellow-500 text-xl">
                {[...Array(5)].map((_, i) =>
                  i < review.ratings ? (
                    <FaStar key={i} />
                  ) : (
                    <FaStarHalf key={i} />
                  )
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button onClick={handlePrev} className="px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition">◀ Prev</button>
                <button onClick={handleNext} className="px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition">Next ▶</button>
              </div>
            </div>

            {/* {reviews.map((review, index) => (
                      <div >
                          <div className="userImg">
                            <img src={review.userImg} alt="" />
                          </div>
                          <h3>{review.userName}</h3>
                          <div className="userText">{review.userDesc}</div>
                          <div className="userRatings">{review.ratings}</div>
                      </div>
                  ))} */}
          </div>
        </div>

      </section>
    </>
  )
}

export default Blog
