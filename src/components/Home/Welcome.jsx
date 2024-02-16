import React from 'react';
import card1 from '../../assets/home/Card-1.png';
import card2 from '../../assets/home/Card-2.png';

const Welcome = () => {
    return (
       <div>
        <div className="flex justify-center items-center">
          <div className="welcome-box-left">
            <img src={card1} alt="" />
          </div>
          <div className="lorem-box-right">
            <img src={card2} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Welcome;

