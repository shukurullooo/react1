import React from 'react'
import "./Hero.css"
import acc from '../../assets/IMAGE (11).svg'

const Hero = () => {
  return (

    <>
    <div className="hero__wrapper">
        <div className="hero__title__wrapper">
            <p className="hero__title">Featured Posts</p>
            <hr  />
        </div>
    </div>
    <div className="hero__wraapper_pro container">
    <div className="hero__card__wrapper ">
    <div className="hero_card_bg">

    </div>
    <div className="hero_card">
            <p className="hero__card__title">The Road Ahead</p>
            <p className="hero__smoll__title">The road ahead might be paved - it might not be.</p>
            <div className="hero__acc">
               <img src={acc} alt=" " />
               <p className="hero title">Mat Vogels</p>
            </div>
    </div>
    </div>

    <div className="hero__card__wrapper ">
    <div className="hero_card_bg">

    </div>
    <div className="hero_card">
            <p className="hero__card__title">The Road Ahead</p>
            <p className="hero__smoll__title">The road ahead might be paved - it might not be.</p>
            <div className="hero__acc">
               <img src={acc} alt=" " />
               <p className="hero title">Mat Vogels</p>
            </div>
    </div>
    </div>
    </div>
    
    </>
    
  )
}

export default Hero