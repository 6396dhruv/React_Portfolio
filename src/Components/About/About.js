import React from 'react'
import './About.css'
import uiux from '../../Assets/uiux.png'
import web from '../../Assets/web.png'
import boot from '../../Assets/boot.png'

const About = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skilltitle'> Hello <span className='new'>Everyone.</span>  </span> <br />
        <span  className='skilldisc'> I am a skilled and passionate web designer in creating visually and user-friendly websites,
         I have a strong understanding of design. I am good in HTML, CSS, Javascript, React and bootstrap and also in designing the photoshop
         and illustrator. </span>
         <div className='skillbars'>
            <div className='skillbar'>
                <img src= {uiux} alt='UI desing' className='barimage'></img>
                <div className='bartext'>
                    <h2>UI/UX Design</h2>
                    <p> This is the demo part you can design your own. </p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={web} alt='web design' className='barimage'></img>
                <div className='bartext'>
                    <h2>Web Design</h2>
                    <p>This is the demo part you can design your own.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={boot} alt='bootstrap' className='barimage'></img>
                <div className='bartext'>
                    <h2>Bootstraping</h2>
                    <p>This is the demo part you can design your own.</p>
                </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default About
