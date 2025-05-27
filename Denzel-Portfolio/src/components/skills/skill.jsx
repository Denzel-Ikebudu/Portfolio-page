import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'>What I do</span> 
        <span className="skillDescription">I am a skilled and passionate web developer with experience in creating visually appealing user-friendly websites. I have a strong understanding of design and a keen eye for detail, I am proficient in HTML, CSS, JavaScript, React, Git, Python, and also have knowledge on Matlab and some other applications </span>
        <div className="skillBars">
            <div className="skillBar">
                {/* <img src="" alt="" className="skillBarImg" /> */}
                <div className="skillBarText">
                    <h2>Python</h2>
                    <p> Machine learning, deep learning, computer vision</p>
                </div>
            </div>

            <div className="skillBar">
                {/* <img src="" alt="" className="skillBarImg" /> */}
                <div className="skillBarText">
                    <h2>HtML&CSS</h2>
                    <p>This is a demo text, you can write your content here</p>
                </div>
            </div>

            <div className="skillBar">
                {/* <img src="" alt="" className="skillBarImg" /> */}
                <div className="skillBarText">
                    <h2>JavaScript</h2>
                    <p></p>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Skills
