import React from 'react';
import '../../Styles/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <div className="intro-container">
        <div className="intro-overlay">
          <video className="intro-video" autoPlay={true} muted={true} loop>
            <source src={require('../../videos/Final ASH 4k 50fps-1.MOV')} />
            <h1>ASH Events</h1>
          </video>
        </div>
        <div className="intro-text">
          <div>
            {' '}
            <div className="intro-textWelcome">WELCOME TO</div>
            <div className="intro-textAsh">ASH EVENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
