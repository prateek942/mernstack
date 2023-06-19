import React from 'react';
import './projects.css';
import study from '../assests/study.jpg';
import img1 from '../assests/img2.jpg'

const Projects = () => {
  const data = [
    { id: 1, img: study, title: 'Curious_Cat', details: 'Curious Cat helps to share perspectives and ideas on a range of topics including lifestyle, travel, and personal growth' },
    { id: 2, img: img1, title: 'CareerCast', details: 'CareerCast is a designed and implemented platform to connect job seekers with potential employees.' },
  ]
  return (
    <div className='project_container' id='Projects'>
      <div className='project_head'>
        <h1>Projects</h1>
      </div>
      <div className='project_wrap' style={{position:'relative'}}>
        {data.map((value, i) => (
          <div className='project_cards'>
            <div>
              <img src={value.img} alt="study" />
            </div>
            <div>
              <span>{value.title}</span>
              <hr style={{ width: '50px', height: '3px', background: 'rgb(208, 187, 87)', border: 'none' }} />
              <span>{value.details}</span>
            </div>
            <a href={value.visit} target='_blank'>visit</a>
          </div>
        ))}
      </div>
      <hr style={{ width: '10%', height: '5px',background:'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)',borderRadius:'50px',border:'none',position:'absolute',bottom:'-32rem'}} />
    </div>
  )
}

export default Projects