import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/HomeSection/Home'
import About from '../pages/HomeSection/About'
import Menu from '../pages/Menu'
import Blog from '../pages/Blog'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
