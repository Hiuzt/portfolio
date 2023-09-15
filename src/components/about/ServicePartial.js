import React, {useEffect} from 'react'
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import responsiveImg from "../../files/responsive.png";
import webdevelopmentImg from "../../files/webdevelopment.png";
import databaseImg from "../../files/database.png";
import apiImg from "../../files/api.png";

import { useDispatch, useSelector } from "react-redux";
import {selectLanguageID} from "../../redux/features/languageSlice";
import Languages from "../Languages";
import Reveal from '../Reveal';

const ServicePartial = () => {

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
        target.style.setProperty("--shadow-x", (centerX - x)/50 + "px");
        target.style.setProperty("--shadow-y", (centerY - y)/50 + "px");
    
        
    }

    useEffect(() => {
        for (const card of document.querySelectorAll(".card")) {
            card.onmousemove = e => handleMouseOnMove(e, card);
        }
    }, [])
        

    const serviceArray = [
        [<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>, <img src={responsiveImg} alt=''/>, Languages(languageID, 15), Languages(languageID, 16)],
        [<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
        <path d="M 5 2 C 3.347656 2 2 3.347656 2 5 L 2 35 C 2 36.652344 3.347656 38 5 38 L 45 38 C 46.652344 38 48 36.652344 48 35 L 48 5 C 48 3.347656 46.652344 2 45 2 Z M 7 7 L 43 7 L 43 33 L 7 33 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 20 39 L 20 43 L 30 43 L 30 39 Z M 10 40 C 9.703125 40 9.410156 40.117188 9.21875 40.34375 L 4.21875 46.34375 C 3.96875 46.644531 3.929688 47.085938 4.09375 47.4375 C 4.257813 47.789063 4.613281 48 5 48 L 45 48 C 45.386719 48 45.742188 47.789063 45.90625 47.4375 C 46.070313 47.085938 46.027344 46.644531 45.78125 46.34375 L 40.78125 40.34375 C 40.589844 40.117188 40.296875 40 40 40 L 32 40 L 32 45 L 18 45 L 18 40 Z"></path>
        </svg>, <img src={webdevelopmentImg} alt='' />, Languages(languageID, 17), Languages(languageID, 18)],
        [<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>, <img src={databaseImg} alt='' />, Languages(languageID, 19), Languages(languageID, 20)],
        [<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>, <img src={apiImg} alt='' />, Languages(languageID, 21), Languages(languageID, 22)],

        // [],
    ]

  return (
    <>
    {serviceArray.map((serviceData, serviceIndex) => (
        <Reveal>
            <div className="card">
                {serviceData[1]}
                <div className="title">
                    {serviceData[0]}
                    {serviceData[2]}
                </div>
                <div className="details">
                    {serviceData[3]}
                </div>
            </div>
        </Reveal>
   
    ))}
    </>
  )
}

export default ServicePartial