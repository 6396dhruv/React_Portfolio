import React from 'react'
import './Intro.css'
import bg from '../../Assets/image.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section className='' id='intro'>
      <div className='introcontent'>
        <span className='hello'>Hello! </span>
        <span className='introtext'>I`m <span className='introname'>Dhruv Pathak</span> <br /> Web Developer </span>
        <p className='intropara'> I am a skilled web developer with experience in creating user friendly websites.</p>
        <Link> <button className='btn'> <img src='' alt=''></img> Hire Me </button> </Link>
      </div>
      <img src={bg} alt='profile' className='bg'></img>
    </section>
  )
}

export default Intro
