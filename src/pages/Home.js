import React from 'react'
import Menu from '../components/Menu'
import videoBg from "../files/background.mp4";
import transition from '../transition';

const Home = () => {
  return (
    
    <>
    {/* <Menu /> */}
        <div className="home-container" id="home-container">
            <video className="video" src={videoBg} autoPlay loop muted>
                
            </video>  
                <div className="name-text">
                    <span>KERNER </span> 
                    <span>DÁNIEL</span> 
                    <div class="animated-scroller">
                        <span>
                            CSS<br/>
                            HTML<br/>
                            Javascript<br/>
                            C#<br/>
                            SQL
                        </span>
                    </div>
                </div>
        </div>
    </>
  )
}

export default transition(Home)