import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../assets/logo/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='shadow-md fixed w-full bg-white z-50 top-0 left-0'>
      <div className="container max-w-6xl mx-auto">
        <nav className='flex justify-between items-center relative z-50'>
          {/* Logo Image */}
          <div>
            <Link to="/">
              <img src={logo} alt="My Logo Image" className='w-[10rem]' />
            </Link>
          </div>

          {/* Nav Links and Hamburger */}
          <div className='flex items-center'>
            {/* Navlink */}
            <div className="hidden lg:flex gap-6 items-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">Home</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">Our Menu</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">About</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">Shop</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">Blog</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">Contact</Link>
              <Link to="/addtocart" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors duration-200">
                <HiOutlineShoppingBag className='text-2xl' />
                <span className='absolute top-5 -right-1 bg-red-600 px-1 rounded-full text-xs'>2</span>
              </Link>
            </div>

            {/* Hamburger button for mobile */}
              <div className="lg:hidden text-2xl ml-auto pr-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </div>
          </div>
        </nav>
      </div>

      {/* Mobile navlinks overlay */}
      <div className={`fixed top-0 left-0 w-full h-[70%] bg-white z-40 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} lg:hidden flex flex-col justify-center items-center gap-6 text-xl pt-20`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Our Menu</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/addtocart" onClick={() => setIsMenuOpen(false)}>
                <HiOutlineShoppingBag className='text-2xl' />
              </Link>
      </div>
    </header>
  )
}

export default Header
