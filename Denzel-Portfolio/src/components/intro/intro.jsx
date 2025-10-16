import React from 'react'
import './intro.css'
import profilePic from '../../assets/20250809_104957.png';

const Intro = () => {
  return (
    <div className='intro'>
      <section id='intro'>

        <div className="introContent">

          <span className="hello">Hello,</span>

          <span className="introText">
            I'm <span className='introName'>Denzel</span><br />
          </span>
          <span className='introRole'>Web Developer</span>

          <p className="introPara">I am a skilled web developer with experience in creating <br /> visually appealing and user-friendly  websites</p>
          
          <a href="#works-section">
            <button className="btn">  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="w-3 h-3 block m-0.5">
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>My Works
            </button>
          </a>
          
        </div>

        <div className='image'>
          <img src={profilePic} alt="profile picture" />
        </div>
      </section>
    </div>
    
  )
}

export default Intro
