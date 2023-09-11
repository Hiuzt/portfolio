import "../files/design.css"
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react"
import { BrowserRouter, Switch, Route, Routes, Redirect, useLocation } from "react-router-dom";
import Languages from "./Languages";

import profile from "../files/profile.jpg"
import { useDispatch, useSelector } from "react-redux";
import {selectLanguageID} from "../redux/features/languageSlice";
import $ from "jquery"


const Menu = () => {
    const [showMenu, setShow] = useState(true);

    const languageID = useSelector(selectLanguageID)


    const location = useLocation();
    const menuNames = 
    [
        [
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>,
            Languages(languageID, 1),
            "",
            "/"   
        ],
        [
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>,
            Languages(languageID, 2),
            "",
            "/about"
        ],
        [
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>,
            Languages(languageID, 3),
            "",
            "/resume",
        ],
        [
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>,
            Languages(languageID, 4),
            "",
            "/references",
        ]
    ]



    return (
        <>
            <div className="sticky-menu">
                <div className="name-box">
                    Kerner Dániel
                </div>
                <div className="button-box" onClick={
                        (e) => {
                            $(".menu-button").toggleClass("show-menu")
                            $(".menu").toggleClass("show-menu")
                            $(".menu-overlay").toggleClass("show-menu")
                            $(".settings-bg").toggleClass("show-menu")
                            setShow(!showMenu);
                        }                    
                    }>
                    <div className="menu-button">
                        
                    </div>
                </div>
                    
            </div>
            <div className="menu-overlay" onClick={(e) => {
                $(".menu-button").toggleClass("show-menu")
                $(".menu").toggleClass("show-menu")
                $(".menu-overlay").toggleClass("show-menu")
                $(".settings-bg").toggleClass("show-menu")
                setShow(!showMenu);
            }}></div>
            <div className="menu">
                <div className="profile-picture-container">
                    <img className="profile-picture" src={profile} alt=""></img>
                    <div className="profile-picture-name">
                        KERNER DÁNIEL
                    </div>
                </div>
                <div>

                    <ul className="menu-nav">
                        {menuNames.map((menuValue, menuIndex) =>
                            <>
                                {location.pathname === menuValue[3] ? 
                                    <li key={menuIndex} className={"menu-nav-item active-page"}>
                                    <Link  to={menuValue[3]} className="menu-nav-link">                                                         
                                            <span>
                                                <div className="icon-image">
                                                    {menuValue[0]}
                                                </div>
                                                <div className="menu-nav-item-text">{menuValue[1]}</div> 
                                            </span>                                                                
                                    </Link>
                                </li>
                                :
                                <li key={menuIndex} className={"menu-nav-item " + menuValue[2]}>
                                    <Link to={menuValue[3]} onClick={(e) => {
                                        $(".menu-button").toggleClass("show-menu")
                                        $(".menu").toggleClass("show-menu")
                                        $(".menu-overlay").toggleClass("show-menu")
                                        $(".settings-bg").toggleClass("show-menu")
                                        setShow(!showMenu);
                                    }} className="menu-nav-link">                                                         
                                            <span>
                                                <div className="icon-image">
                                                    {menuValue[0]}
                                                </div>
                                                <div className="menu-nav-item-text">{menuValue[1]}</div> 
                                            </span>                                                                
                                    </Link>
                                </li>
                                }
                            
                                
                            </>
                        )}
                    </ul>
                </div>
                <div className="menu-footer">
                    <div className="menu-icons">
                        <Link to="https://www.facebook.com/profile.php?id=100009438356468" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                        </Link>
                        <Link to="https://www.instagram.com/dniker66/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </Link>
                        <Link to="https://github.com/Hiuzt?tab=repositories" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </Link>
                        <Link to="https://www.linkedin.com/in/d%C3%A1niel-kerner-020a6a279/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                    </Link>   
                    </div>     
                    <span>
                        {Languages(languageID, 48)} @ 2023
                    </span>
                    <span>
                        Kerner Dániel
                    </span>
                    
            </div>
            </div>
        </>
    )
}

export default Menu