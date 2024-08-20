import React from 'react'
import './Portfolio.css'
import port1 from '../../Assets/port1.png'
import port2 from '../../Assets/port2.png'
import port3 from '../../Assets/port3.png'
import port4 from '../../Assets/port4.png'
import port5 from '../../Assets/port5.png'
import port6 from '../../Assets/port6.png'
const Portfolio = () => {
  return (
    <div>
      <section id='works'>
        <h2 className='title'>My <span className='new'>Portfolio</span> </h2>
        <span className='discription'>I take pride in taking attention to the smallest details and making sure that my work is perfect.
        I am excited to bring my skills and experience to help business to achive their goals and create
        strong online presence. </span>
        <div className='images'>
          <img src={port1} alt='1' className='image'></img>
          <img src={port2} alt='2' className='image'></img>
          <img src={port3} alt='3' className='image'></img>
          <img src={port4} alt='4' className='image'></img>
          <img src={port5} alt='5' className='image'></img>
          <img src={port6} alt='6' className='image'></img>
            
        </div>
        <button className='btn'>See More</button>
      </section>
    </div>
  )
}

export default Portfolio
