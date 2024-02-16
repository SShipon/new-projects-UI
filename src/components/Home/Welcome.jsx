import React from 'react';
import card1 from '../../assets/home/Card-1.png.png';
import card2 from '../../assets/home/Card-2.png.png';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-box-left">
          <div>
            <h1>Welcome to X</h1>
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

export default Welcome;
