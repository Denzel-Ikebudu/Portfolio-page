import React from 'react';
import './skills.css';
import html_icon from '../../assets/html_img.png';
import css_icon from '../../assets/css_img.png';
import react_icon from '../../assets/react_img.png';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'; 

const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'>What I do</span> 
        <span className="skillDescription">I am a skilled and passionate web developer with experience in creating visually appealing user-friendly websites. I have a strong understanding of design and a keen eye for detail, I am proficient in HTML, CSS, JavaScript, React, Git and GitHub. <br />
          I have designed a couple of websites specializing in creating portfolio websites for individuals and businesses/brands.
        </span>
        <div className="skillBars">
          <ScrollAnimationWrapper animationClass="fade-in-up">
            <div className="skillBar">
              <img src={html_icon} alt="HTML icon" className="skillBarImg" />
              <div className="skillBarText">
                <h2>HTML</h2>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClass="fade-in-up">
            <div className="skillBar">
              <img src={css_icon} alt="CSS icon" className="skillBarImg" />
              <div className="skillBarText">
                <h2>CSS</h2>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClass="fade-in-up">
            <div className="skillBar">
              <img src={react_icon} alt="React icon" className="skillBarImg react-icon-rotate" />
              <div className="skillBarText">
                <h2>React Js</h2>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Skills;