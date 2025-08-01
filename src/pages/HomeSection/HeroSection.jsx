import React from 'react'
import homeBG from '../../assets/hero/hero-1.jpg'
import mainHomeBurger from '../../assets/hero/hero-2.png'
import priceBadge from '../../assets/hero/price-badge-yellow.png'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section
            className='w-full max-w-screen-xl mx-auto pt-24 bg-cover bg-center bg-no-repeat min-h-[100svh] flex items-center justify-center'
            style={{ backgroundImage: `url(${homeBG})` }}
        >
            <div className='max-w-screen-xl max-h-screen mx-auto flex md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-col px-4'>
                {/* Left side Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center md:text-left max-w-lg'
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-4xl md:text-[3.5rem] font-extrabold text-gray-800 leading-tight'
                    >
                        {/* Juicy Burgers, <span className="text-yellow-500">Hot & Fresh!</span> */}
                        <TypeAnimation
                            sequence={[
                                'Juicy Burgers🍔',
                                3000,
                                'Hot & Fresh 🔥',
                                3000,
                                'Delivered Fast',
                                3000,
                            ]}
                            wrapper="span"
                            speed={60}
                            className="text-yellow-500"
                            repeat={Infinity}
                        />
                    </motion.h1>
                    <p className='mt-4 text-gray-400-400 text-lg'>
                        Bite into happiness — fast delivery & 100% taste satisfaction.
                    </p>
                    <button className='mt-6 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition cursor-pointer'>
                        Order Now
                    </button>
                </motion.div>
                <div className="homeIMG">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='relative mt-10 md:mt-0 w-[340px] sm:w-[370px] md:w-[460px] mx-auto overflow-hidden'
                    >
                        <motion.img
                            src={mainHomeBurger}
                            alt=""
                            className='w-full max-w-full object-contain'
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        />
                        {/* Right side Image + Price Badge */}
                        <img
                            src={priceBadge} alt=""
                            className='absolute top-2 w-20 right-2 md:w-24'
                            initial={{ rotate: -20, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                        <div
                            className="priceOfBurger absolute top-5 right-6"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <p className='text-xl font-semibold text-center'>Only</p>
                            <h3 className='text-2xl font-bold'>$6.99</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection
