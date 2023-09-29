import React, {useEffect, useMemo, useState} from 'react';
import Menu from '../components/Menu';
import CommentCard from '../components/about/CommentCard';
import ServicePartial from '../components/about/ServicePartial';
import { Tooltip } from 'react-tooltip'
import SkillPartial from '../components/about/SkillPartial';
import PersonalPartial from '../components/about/PersonalPartial';
import CompanyPartial from '../components/about/CompanyPartial';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from "jquery";
import 'owl.carousel';
import Transition from '../components/Transition';

import { useDispatch, useSelector } from "react-redux";
import {selectLanguageID} from "../redux/features/languageSlice";
import Languages from "../components/Languages";
import Reveal from '../components/Reveal';




const About = () => {
    const languageID = useSelector(selectLanguageID)
    const commentArray = [
        ["Horváth István", "Rövid szöveg Rövid szöveg Rövid szöveg Rövid szöveg v Rövid szöveg Rövid szöveg Rövid szöveg Rövid szöveg Rövid szöveg ", "avatar2.png", "2023.09.07 12:46"],
        ["Németh Andor", "Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szövegSzöveg szöveg Szöveg szöveg Szöveg szövegSzöveg szövegSzöveg szöveg Szöveg szöveg Szöveg   .", "avatar3.png", "2022.04.03. 15:18"],
        ["Zöld Árpád" ,"Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szöveg Szöveg szövegSzöveg szöveg Szöveg szöveg Szöveg szövegSg  Szöveg szöveg  .", "avatar4.png", "2023.01.03. 19:43"],
    ]


    const skillPartial = useMemo(() => <SkillPartial />, [])



  return (
    <>
    
        <div className="about-container" id="about-container">
        <Tooltip id="my-tooltip" />
            <div className="header-content">
                <div className="header-text">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    {Languages(languageID, 1)}
                </div>
            </div>
            <div className="about-content">   
                <Reveal>  
                    <div className="personal-container">
                        <div className="personal-information">
                            <PersonalPartial />
                        </div>  
                    </div>                         
                </Reveal>
                
                <Reveal>
                    <div className="sub-title">{Languages(languageID, 13)}</div>
                </Reveal>
                <div className="skill-container">
                    <Reveal>                           
                        {skillPartial}                          
                    </Reveal> 
                </div>
              
                <Reveal>
                    <div className="sub-title">{Languages(languageID, 14)}</div>
                </Reveal>
                    <div className="service-container">
                        <ServicePartial />
                    </div>
                
                <Reveal>
                    <div className="sub-title">{Languages(languageID, 23)}<svg data-tooltip-id="my-tooltip-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50"><path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path></svg>           </div>
                </Reveal>   
                    <div className="client-container">
                        <Reveal>
                            <CompanyPartial /> 
                        </Reveal>  
                    </div>
                
                <Reveal>
                    <div className="sub-title">{Languages(languageID, 24)}<svg data-tooltip-id="my-tooltip-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50"><path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path></svg></div>
                </Reveal>
                
                   <div className="comment-container">
                    <Reveal>
                        <center>
                        <ReactOwlCarousel id="comment-carousel"  loop={true} autoplay={true} autoplayHoverPause={true} autoplayTimeout={6000}
                        responsive= {
                            {
                                '0': {
                                    items: 1
                                },
                                '800':{
                                    items: 2
                                },
                                '1400':{
                                    items: 3
                                },
                            }
                            
                        }
                        
                        >
                            {commentArray.map((commentData, commentIndex) => (            
                                <div className="item">
                                    <CommentCard clientName = {commentData[0]} commentText = {commentData[1]} imageSource = {commentData[2]} dateTime = {commentData[3]} />
                                </div>
                            ))}
                        </ReactOwlCarousel>
                        </center>   
                        
                    </Reveal>   
                </div>
                
            </div>
            <Tooltip
                id="my-tooltip-1"
                place="bottom"
                content={Languages(languageID, 25)}
        />
        </div>
    </>
  )
}



export default Transition(About)