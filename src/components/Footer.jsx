import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <section className='w-full md:py-16 py-10'>
            <div className='flex md:flex-row flex-col md:justify-around justify-center items-center gap-4 text-center'>
                <div className="col1">
                    <div>
                        <h4 className='text-2xl font-semibold py-1'>Location</h4>
                        <div className='text-gray-600 text-sm'>
                            <p>5505 waterford District</p>
                            <p>Dr, Miami, FL 33126</p>
                            <p>United States</p>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <h4 className='text-2xl font-semibold py-1'>Working Hours</h4>
                        <div className='text-gray-600 text-sm'>
                            <p>Mon-Fri 09:00Am - 10:00Pm</p>
                            <p>Satuerday 10:00Am - 08:30Pm</p>
                            <p>Sunday 12:00pm - 05:00Pm</p>
                        </div>
                    </div>
                </div>
                <div className="col3">
                    <div>
                        <h4 className='text-2xl font-semibold py-1'>Order Now</h4>
                        <p className='text-gray-600 text-sm'>Querant neque purus ipsum</p>
                        <p className='text-2xl text-yellow-500 font-semibold'><Link to={9998887777}> 999-888-7777</Link></p>
                    </div>
                </div>
                <div className="col4">
                    <div>
                        <h4 className='text-2xl font-semibold py-1'>Follow Us</h4>
                        <p className='pb-1 text-gray-600 text-sm'>Our official social media handles.</p>
                        <ul className='flex gap-2 justify-center'>
                            <li>
                                <a  href="https://github.com/RoHitBarma" target="_blank" rel="noopener noreferrer" className='github text-xl' style={{ color: '#171515' }}>
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/rohit-barma-9079b6256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='linkedIn text-xl' style={{ color: '#0A66C2' }}>
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_mairohit?igsh=YnphMWtzdzkwNWY0" target="_blank" rel="noopener noreferrer" className='insta text-xl' style={{ color: '#C13584' }}>
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@fact-ozone?si=bxK7NDe8AMcMCbS-" target="_blank" rel="noopener noreferrer" className='youtube text-xl' style={{ color: '#FF0000' }}>
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
