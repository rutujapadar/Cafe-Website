import Header from './Header';
import icon3 from '.img/icon7.png'
import React, { useState } from 'react';
import icon1 from '.img/3.png';
import icon2 from '.img/aboutusimg.png';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Header />
      <div className="conimg">
        <img src={icon1}></img>
        <br />
        <br />
        <span className="hsty">Coffee & Craft</span>
        <p>Coffee is at our heart, inspiring our craft and driving innovation—in our<br /> drinks, our food, our stores and new ways we bring the Starbucks experience <br />  to you wherever you are.</p>
        <div className="line">
        </div>
        <br />
        <div className="style1">
          <span className="word">BEVERAGES & FOOD</span>
          <span className="word">CUSTOMER EXPERIENCE</span>
          <span className="word">INNOVATION</span>
        </div>
        <br />
      </div>
      <div className="About">
        <img src={icon2}></img>
        <h3>Our Story</h3>
        <h1>TEXAS PROUD</h1>
        <p>Founded by closely-knit family and friends in Texas Hill Country,<br />we’ve
          always had one goal in mind to create a distinctive, out-of-this-world,
          <br />experience that people drive across town for. An experience to be shared
          through<br /> coffee + atmospheres that inspire the warmth of cozy evenings
          <br />under a summer moon.</p>
      </div>
      <div className="read">
        <button>Read More</button>
      </div>
      <div className='img2'>
      </div>
      <div className="conimg1">
      <img src={icon2}></img>
      <h2>Our Coffee</h2>
      <h3>THE WOOD MAKES IT GOOD</h3>
      <p>There’s a natural affinity between a wood fire and coffee beans.<br/>Our wood-fired coffee roasting process results in a smooth, balanced coffee.<br/>Every batch of Summer Moon coffee is roasted in our handmade brick roasters<br/>over seasoned Texas oak. We drew up the plans, laid every brick by hand,<br/>and have dedicated the better part of two decades to proving that<br/>the wood makes it good. Our team of roasters use sight,<br/>sound, and smell to produce a distinctly bold, flavorful taste.</p>
      </div>
      <br/>
      <br/>
      <div className='img3'>
      </div>
    </div>
      <Footer/>
  )
}

export default About;
