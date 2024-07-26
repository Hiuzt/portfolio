import React from 'react'
import Menu from '../components/Menu'
import videoBg from "../files/background.mp4";
import Transition from '../components/Transition';

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
                            React<br/>
                            Vue<br/>
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

export default Transition(Home)