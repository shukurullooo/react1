import React from 'react'
import imgLog from '../../assets/Escape..svg'
import "./Header.css"

const Header = () => {
  return (
    <>
    
    <div className="headerBg"></div>
    
    <nav className=' navbar container'>
        <div className="navbar__logo  container  ">
            <img src={imgLog} alt="" />
        </div>

        <ul className='item container'>
            <li><a href=""><span>home</span></a></li>
            <li><a href=""><span>categorius</span></a></li>
            <li><a href=""><span>abaut</span></a></li>
            <li><a href=""><span>contact</span></a></li>
        </ul>
    </nav>


    <div className="header__title">
        <p className="h3title">Let's do it together.</p>
        <p className="smolltitle">We travel the world in search of stories. Come along for the ride.</p>
        <button className='btn__header'>View Latest Posts</button>
    </div>
    


    </>


  )
}

export default Header