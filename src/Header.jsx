import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import images from './assets/S.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <header className='flex justify-between  text-cyan-300 px-13 m-10 items-center '>
            <button onClick={() => SetOpen(!open)}><GiHamburgerMenu /></button>
            <div className='flex gap-2 items-center'>
                <img src={images} alt="redbull" className='rounded-full object-cover h-20 ' />
                <h2 className='text-4xl font-bold text-white text-shadow-emerald-300/10'>RedBull</h2>
            </div>
            <nav className='bg-cyan-300/60 text-white font-bold border-2 border-cyan-600  rounded-full backdrop-blur-4xl'>
                <ul className='flex items-center gap-10 '>

                    <li className='bg-white text-black py-5 px-20 rounded-full first:object-contain text-xl '>
                        Energy Drinks
                    </li>

                    <li className='cursor-pointer hover:text-black transition p-4 relative group '>Gallery ▼

                        <ul className='absolute bg-blue-500 text-white rounded p-4 top-10 hidden group-hover:block'>
                            <li>Collection</li>
                            <li>Feedback</li>
                            <li>Popular</li>
                            <li>Achievment</li>
                        </ul>
                    </li>
                    <li className='cursor-pointer hover:text-black transition p-4 relative group  px-10'>Our Story ▼
                        <ul className='absolute hidden group-hover:block p-4 top-10 bg-blue-500 text-white rounded'>
                            <li>Our Mission</li>
                            <li>Our Vision</li>
                            <li>Our Team</li>
                            <li>Journey</li>
                        </ul>
                    </li>
                    <li className='cursor-pointer hover:text-black transition p-4 relative group'>Contact ▼
                        <ul className='absolute group-hover:block p-4 top-10 bg-blue-500 text-white rounded hidden'>
                            <li>+9370944696</li>
                            <li>Itxsurajofficail@gmail.com</li>
                            <li>Helping 24/7</li>
                            <li>Management</li>
                        </ul>
                    </li>

                </ul>
            </nav>

            <div className='flex gap-2 text-black font-bold rounded-full  text-2xl'>
                <FaSearch className='bg-white rounded-full cursor-pointer w-10 h-10 p-2' />
                <FaRegHeart className='bg-white  rounded-full cursor-pointer w-10 h-10 p-2' />
                <IoBagOutline className='bg-white rounded-full cursor-pointer w-10 h-10 p-2' />
            </div>
        </header>
    )
}

export default Header
