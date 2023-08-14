import React from 'react';
import './displayBoxes.css';
import dragonImage from '../images/Dragons.png';
import loginImage from '../images/Loginimg.png';
import greenDragon from '../images/BabyGreenDragon.jpg';
import dragonLogo from '../images/Dragonlogo.png'


function ProcessBoxesComponent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className='howto'>
            <img src={loginImage} alt="Login" className='dragonPic'/>
              <h6>1. Login</h6>
              <p>Login to your personal account.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className='howto'>
            <img src={greenDragon} alt="greenDragon" className='dragonPic'/>
              <h6>2. Find a friend</h6>
              <p>Link accounts to play against your friends.</p>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className='howto'>
            <img src={dragonLogo} alt="Logodrag" className='dragonPic'/>
              <h6>3. Quiz</h6>
              <p>Play and find out how well you know eachother.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProcessBoxesComponent;
 