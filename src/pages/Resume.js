import React, {useEffect} from 'react'
import $ from "jquery"
import SkillArray from '../components/about/SkillArray';
import transition from '../transition';
import { useDispatch, useSelector } from "react-redux";
import {selectLanguageID} from "../redux/features/languageSlice";
import Languages from "../components/Languages";

const Resume = () => {
    const skillArray = SkillArray;
    const languageID = useSelector(selectLanguageID)

    const handleMouseOnMove = (e, targetSource) => {
        const {currentTarget: target} = e;

        const targetBox = target.getBoundingClientRect(),
            x = e.clientX - targetBox.left,
            y = e.clientY - targetBox.top;
            
        const centerX = (targetBox.right - targetBox.left)/2
        const centerY = (targetBox.bottom - targetBox.top)/2
        
        
        target.style.setProperty("--hover-x", x + "px");
        target.style.setProperty("--hover-y", y + "px");
        target.style.setProperty("--shadow-x", (centerX - x)/100 + "px");
        target.style.setProperty("--shadow-y", (centerY - y)/100 + "px");
    
    }



    useEffect(() => {
        for (const card of document.querySelectorAll(".resume-box")) {
            card.onmousemove = e => handleMouseOnMove(e, card);
        }
      
        const handleResize = () => {
            $(".resume-box:nth-child(2) ul li").css("height", $(".resume-box:first-child ul").height());  
        }
        handleResize();
        window.addEventListener("resize", handleResize, false);

        
    }, [])

  return (
    <div className="resume-container">
        <div className="header-content">
            <div className="header-text">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
                {Languages(languageID, 3)}               
            </div>
        </div>
        <div className="history-content">
            <div className="resume-box">
                <div className="title">
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg> 
                    </div>
                    {Languages(languageID, 26)}
                </div>
                <ul>
                    <li>
                        <p className="date">2019-2023</p>
                        <p className="school-name">{Languages(languageID, 28)}</p>
                        <p className="name">{Languages(languageID, 30)}</p>
                        <p className="name">{Languages(languageID, 29)}</p>
                    </li>
                    <li>
                        <p className="date">2015-2019</p>
                        <p className="school-name">{Languages(languageID, 31)}</p>
                        <p className="name">Pécs</p>
                        <p className="name">{Languages(languageID, 32)}</p>
                    </li>

                    <li>
                        <p className="date">2007-2015</p>
                        <p className="school-name">{Languages(languageID, 33)}</p>
                        <p className="name">Pécs</p>
                        <p className="name">{Languages(languageID, 34)}</p>
                    
                    </li>
                </ul>
            </div>
            <div className="resume-box">
                <div className="title">
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                    </div>
                    {Languages(languageID, 27)}
                </div>
                <ul>
                    <li>
                        <p className="date">2019-{Languages(languageID, 35)}</p>
                        <p className="school-name">Trainee</p>
                        <p className="name">Business Support</p>
                        <p className="name">Deutsche Telekom</p>
                    </li>

                </ul>
           </div>

        </div>
        <div className="resume-box big">
            <div className="title">
                <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>                   </div>
                    {Languages(languageID, 13)}
                </div>
            <div className="status-box">
                <ul>
                    {skillArray.map((skillData, skillIndex) => (
                        <li>
                            {skillData[0]}
                            
                            <div className="status-bar">
                                <div className="status-bar-value" style={{
                                    width: skillData[1] + "%",
                                    
                                }}>
                                    <div className="value-text" >
                                        {skillData[1]} %
                                    </div>
                                </div>
                        </div>

                    </li>
                    ))}     
                    <li className="language-container">
                        <div className="circle-content">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>                       
                                <circle cx="70" cy="70" r="70"
                                    style={{
                                        strokeDashoffset: (440 - 440 * (100/100))
                                    }}
                                
                                />                  
                            </svg>
                            <img src={require("../files/hungary.png")} alt='' />
                            <div className="hover-circle">
                                {Languages(languageID, 36)}
                                <span>100%</span>
                                <span>{Languages(languageID, 37)}</span>
                            </div>
                        </div>
                        <div className="circle-content">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>                       
                                <circle cx="70" cy="70" r="70"
                                    style={{
                                        strokeDashoffset: (440 - 440 * (70/100))
                                    }}
                                
                                />                  
                            </svg>
                            <img src={require("../files/english.png")} alt='' />
                            <div className="hover-circle">
                                {Languages(languageID, 38)} 
                                <span>70% </span>
                                <span>B2</span>
                                <span>{Languages(languageID, 39)}</span>
                                {/* <span>70%</span> */}
                            </div>
                        </div>                     
                    </li>                           
                </ul>

           </div>   
        </div>  
    </div>
  )
}

export default transition(Resume);