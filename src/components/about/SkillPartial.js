import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import SkillArray from './SkillArray';

const SkillPartial = () => {
    const skillArray = SkillArray;

  return (
    <center>
        <ReactOwlCarousel loop={true} autoplay={true} items={6} autoplayHoverPause={true} autoplayTimeout={2000} >
            {skillArray.map((skillData, skillIndex) => 
                <div className="item">
                    {skillBg(skillData[0], skillData[1], skillData[2], skillData[0])}
                </div>
            )
            }
        </ReactOwlCarousel> 
    </center>  
  )
}

function skillBg(skillName, skillValue, pictureOfSkill, skillID) {
    // var elementSource = document.getElementById(skillID);
    // elementSource.style.strokeDashoffset = (440 - 440 * (skillValue/100))

    
    return (
   
            <div className="skill">
            
                <div className="circle-value">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>                       
                        <circle cx="70" cy="70" r="70"
                            style={{
                                strokeDashoffset: (440 - 440 * (skillValue/100))
                            }}
                        
                        />                  
                    </svg>
                </div>
                <div className="inner-content">
                    {pictureOfSkill}
                    <div className="hover-content">
                        <span>{skillName}</span>
                        <span>{skillValue}%</span>
                    </div>
                </div>
            
            </div>
    )
}

export default SkillPartial