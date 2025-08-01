import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './About.jsx'
import MenuSecion from '../Menu.jsx'
import Promotion from '../Promotion.jsx'
// import Brand from '../Brand.jsx'
import Shop from '../Shop.jsx'
import Blog from '../Blog.jsx'
import Contact from '../Contact.jsx'

// brand slider css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BrandSlider from '../Brandlist.jsx'


const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSecion />
      <Promotion />
      <Shop />
      <BrandSlider />
      <Blog />
      <Contact />
    </main>
  )
}

export default Home
