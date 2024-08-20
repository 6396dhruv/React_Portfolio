import React from 'react'
import './Contact.css'
import walmart from '../../Assets/walmart.png'
import adobe from '../../Assets/adobe.png'
import microsoft from '../../Assets/microsoft.png'
import facebook from '../../Assets/facebook.png'
import instagra from '../../Assets/instagra.png'
import faceicon from '../../Assets/faceicon.png'
import twiter from '../../Assets/twiter.png'
import linkedin from '../../Assets/linkedin.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();
  // eslint-disable-next-line
  const sendEmail = (e) => {
    e.preventDefault(form);
      emailjs.sendForm('service_9zm1g9b', 'template_dlocn3s', {publicKey: 'GnlFIU0_iyJ7pg_OHftut', })
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          })
  }        
  return (
    <div>
      <section id='contacts'>
        <div id ='clients'>
            <h1 className='title'>My <span className='new'>clients</span> </h1>
            <p className='discription'>I had a oppertunity to work with a deverse group of companies.
            some of the companies i have worked with includes...</p>
            <div className='clientimgs'>
                <img src={walmart} alt='walmart' className='clientimg'></img>
                <img src={adobe} alt='adobe' className='clientimg'></img>
                <img src={microsoft} alt='microsoft' className='clientimg'></img>
                <img src={facebook} alt='facebook' className='clientimg'></img>
            </div>
        </div>

        <div id ='contact'>
            <h1 className='title'>Contact <span className='new'>Me</span></h1>
            <p className='discription'>Please fill out the form below to discuss my work oppertunities.</p>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <input type='text' className='msg' placeholder='Your Name' name='your_name'></input>
                <input type='email' className='msg' placeholder='Your Email' name='your_email'></input>
                <textarea className='msg' name='message' rows='6' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='btn'>Submit</button>
                <div className='links'>
                    <img src={instagra} alt='instagram' className='link'></img>
                    <img src={faceicon} alt='facebook' className='link'></img>
                    <img src={twiter} alt='twiter' className='link'></img>
                    <img src={linkedin} alt='linkedin' className='link'></img>
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
