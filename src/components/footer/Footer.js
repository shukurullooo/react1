import React from 'react'
import "./Footer.css"
import imgLog from '../../assets/Escape..svg'



const Footer = () => {
  return (
    <>
    <div className="footer__Bg">
        

    <div className="title_fuute_inpuut">
        <p className="title__fuuter">
        Stay in Touch
        </p>
        <div className="input__btn">
        <input className='inp_fuuter' type="text" placeholder='Enter your email address' />
        <button className='btn__fuuter'>salom
            
        </button>
        </div>
    </div>

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
    
    </div>
    
    </>
  )
}

export default Footer