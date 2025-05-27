import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id='contact'>
      <section className='contactPage'>
        
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out this form to discuss any work opportunities</span>
            <form className='contactForm'>
              <input type="text" className='name' placeholder='Your Name' />
              <input type="email" className="email" placeholder='Your Email' />
              <textarea name="message" rows="5" placeholder='Your Message' className="msg"></textarea>
              <button className="submitBtn" type='submit' value='send'>Submit</button>
              {/* <div className="links">
                <img src={} alt="" className="link" />  
                <img src={} alt="" className="link" />  
                <img src={} alt="" className="link" />  
                <img src={} alt="" className="link" />  

              </div>   */}
            </form>           
        </div>
      </section>
    </div>
  )
}

export default Contact
