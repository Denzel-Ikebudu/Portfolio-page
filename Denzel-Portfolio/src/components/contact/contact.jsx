import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dr8tezb', 'template_w9wnoth', form.current, 'lw0bZyQP3JkaeoIfw')
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Error:', error.text);
          alert('❌ Failed to send message. Try again later.');
        }
      );  
  };

  return (
    <div id='contact'>
      <section className='contactPage'>
        
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out this form to discuss any work opportunities</span>
            <form ref={form} onSubmit={sendEmail} className='contactForm'>
              <input type="text" name="from_name" className='name' placeholder='Your Name' required/>
              <input type="email" name="from_email" className="email" placeholder='Your Email' required/>
              <textarea name="message" rows="5" placeholder='Your Message' className="msg" required></textarea>
              <button className="submitBtn" type='submit' value='send'>Submit</button>

            </form>           
        </div>
      </section>
    </div>
  )
}

export default Contact
