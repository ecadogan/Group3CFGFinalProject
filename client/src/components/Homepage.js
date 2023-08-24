import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Login from './login/Login'
import ProcessBoxesComponent from './displayboxes/displayBoxes';
import './Homepage.css';
import PurpleDragonImage from './images/PurpleDragon.png';
import GreenDragonImage from './images/GreenDragon.png';
import FlipCard from './FlipCard/FlipCard';


function Homepage() {

  return (
    <div> 
      <div className='background1'>

        <div><h1>It's Not you, It's Me!</h1></div>
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
                <img src={PurpleDragonImage} alt="Dragon" className='dragonPic'/>
            </div>      
                
            <div className="col-md-4"> 
                {<Login></Login>} 
            </div>
                      
            <div className="col-md-4">
              <img src={GreenDragonImage} alt="Dragon" className='dragonPic'/>
            </div>  
           
          </div>
        </div>
      </div>

            <div className='introBox'>
                    <h2 className='subTitle'>ALL ABOUT US!</h2>
                    <p className='paragraph'>Welcome to It's not you, It's me! We are a band 
                    of excited developers who wanted to push find a new way for people to 
                    connect! 
                    Our web application serves as a virtual game night hub, enabling 
                    friends, families, and couples to enjoy each other's company regardless of 
                    physical distance.
                    By blending the excitement of a quiz game with the warmth of personal 
                    connections, we've crafted an innovative solution that combines technology 
                    with human emotion. Players can engage in friendly competitions, learn more 
                    about each other, and relive shared experiences, all through a user-friendly 
                    and engaging online interface.</p>

                    <FlipCard />
                    </div>

                
        <div className='howToPlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                <h2 className='subTitle'>How To Play</h2>
                  <div className='box'>
                 
                  <p className='paragraph2'>"It's Not You, It's Me" is an engaging online multiplayer game 
                that connects two players for a fun and interactive quiz. The game 
                poses questions about the players themselves, such as “Who is 
                more likely to be late for work?” and "Who is more likely to not eat
                their greens?" 
                Players must separately choose an answer, either themselves or their 
                partner, and earn a point for each matching response. After answering 
                10 questions, the final score is revealed. Our game allows friends to 
                find each other and play together.
                "It's Not You, It's Me" offers a unique way to stay connected and entertained by testing how 
                well you know your friends or family.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='boxbottom'>
              <ProcessBoxesComponent></ProcessBoxesComponent>
            </div>
            <div className='playButtonAlign'>
              <Nav.Link href="/SigninLoginPage.js" className='.navButton'><button className="playButton">LOGIN</button></Nav.Link>
            </div>
        </div>
    </div>
  );
}

export default Homepage;

