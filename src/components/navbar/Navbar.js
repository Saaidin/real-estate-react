import React, {useState} from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {
    
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
  return (
    <div className="navbar">
        <div className="container">
            <h1>
                <span className="flex items-center justify-center gap-x-1">
                    <BsFillHouseFill/>
                    Estate
                </span>
            </h1>
            <button className="btn">Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Search</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon'/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar
