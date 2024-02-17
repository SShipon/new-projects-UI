import React from 'react';
import './Welcome.css';
import card1 from '../../../assets/Home/Card-1.png.png';
import card2 from '../../../assets/Home/Card-2.png.png';

export default function WebMonitors() {
  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-box-left">
          <div>
            <h1>Welcome to X</h1>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div>
            <img src={card1} alt="" />
          </div>
        </div>
        <div className="lorem-box-right">
          <img src={card2} alt="" />
        </div>
      </div>
    </div>
  );
};


