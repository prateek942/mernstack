import React from 'react';
import './home.css';
import dp from '../assests/Prateek.jpg'

const Home = () => {
  return (
    <div className='home_container' id='Home'>
      <div className='home_details'>
        <span>Hey Folks,<br />
          Welcome to my portfolio.</span>
        <span>I am Prateek Pandey and I am an Engineering student from India pursuing my B.Tech in Computer Science and Engineering. I am a Front-end developer and learning Backend Development and a web dev enthusiast.</span>
        <button onClick={() => window.location = "https://auth.geeksforgeeks.org/user/pprateek942/practice/"}>Coding Profile</button>
        <hr style={{ width: '98%', height: '5px',background:'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)',borderRadius:'50px',border:'none'}} />
      </div>
      <div className='home-right'>
        <div className='home_img'>
          <img src={dp} alt="dp" />
        </div>
      </div>
    </div>
  )
}

export default Home