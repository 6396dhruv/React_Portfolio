import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import contact from '../../Assets/contact.png'
import menu from '../../Assets/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>
        <div className='menu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menulistitem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menulistitem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="menulistitem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="menulistitem">Client</Link>

        </div>

      <button className='menubtn' onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
        <img src={contact} alt='contact' className='menuimg'></img>Contact Me
      </button>

      <img src={menu} alt='menu' className='mobilemenu' onClick={()=> setShow(!show)}></img>
        <div className='navmenu' style={{display: show? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuitem" onClick={()=> setShow(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menuitem" onClick={()=> setShow(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="menuitem" onClick={()=> setShow(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="menuitem" onClick={()=> setShow(false)}>Client</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="menuitem" onClick={()=> setShow(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
