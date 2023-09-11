import { BrowserRouter, Switch, Route, Routes, Redirect, useLocation } from "react-router-dom";
import Main from "./Main"
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import { AnimatePresence, color } from "framer-motion";
import Resume from "./pages/Resume";
import Reference from "./pages/Reference";
import { useState } from "react";
import $ from "jquery"
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {SET_LANGUAGE_ID} from "./redux/features/languageSlice"
import {selectLanguageID} from "./redux/features/languageSlice";


function App() {
    const location = useLocation();
    const [isOpen, setOpen] = useState(false);
    const [activeColorState, setColor] = useState(5);
    const dispatch = useDispatch();
    const languageID = useSelector(selectLanguageID)

    useEffect(() => {
        const storageItemLanguageID = localStorage.getItem("languageID")

        if (storageItemLanguageID === null) {
            localStorage.setItem("languageID", 1)
            window.location.reload();
        }

        const activeColor = localStorage.getItem("main-color");
        if (activeColor === null) {
            localStorage.setItem("main-color", 5)
            document.body.classList.add("color-5")
            setColor(5);
            return;
        }

        document.body.classList.add("color-" + activeColor);
        setColor(parseInt(activeColor))


    }, [])

    const baseColors = ["#34b1eb", "#ab34eb", "#469950", "#998646", "#f58545", "#a83232"]

    const showSettings = () => {
        if (isOpen === false) {
            $(".settings-bg").addClass("open")
            setOpen(true)
        }
    }

    const changeColor = (colorIndex) => {
        document.body.classList.replace("color-" + activeColorState, "color-" + (colorIndex + 1));
        localStorage.setItem("main-color", colorIndex + 1)
        setColor(colorIndex + 1)
    }

    const changeLanguage = (languageID, target) => {
        dispatch(SET_LANGUAGE_ID(languageID));

    }
    return (
 <>

            <div className="settings-bg" onClick={(e) => showSettings()}>
                <svg id="idk" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                <div className="overlay"></div>
                {isOpen === true ?
                    <>

                    <button onClick={(e) => {setOpen(false)
                        $(".settings-bg").removeClass("open")
                    }} className="close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </button>
                    <p>Alapszín</p>
                    <div className="color-container">


                        {baseColors.map((colorData, colorIndex) => (
                            <div className="color-box" onClick={(e) => {changeColor(colorIndex)}} style={{
                                backgroundColor: colorData
                            }}>
                            {activeColorState === (colorIndex + 1) ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            </>:
                            <></>}
                            </div>
                        ))}
                    </div>
                    <div className="language-selector">
                        <div className="image-container">
                            <img onClick={(e) => changeLanguage(1, e.target)} src="https://flagsapi.com/HU/flat/32.png" alt="" />
                            {parseInt(languageID) === 1 ? <>
                                <div className="active-language">
                                <div className="circle-box-language">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    </div>
                                </div>
                            </>:<></>}
                        </div>
                        <div className="image-container">
                            <img onClick={(e) => changeLanguage(2, e.target)} src="https://flagsapi.com/GB/flat/32.png" alt="" />
                            {parseInt(languageID) === 2 ? <>
                                <div className="active-language">
                                    <div className="circle-box-language">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    </div>
                                </div>
                            </>:<></>}
                        </div>

                    </div>
                    </>
                :

                <>

                </>} 
       </div>
        <div className="main-container">

            <AnimatePresence mode="wait">
                <Routes location={location} key = {location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/references" element={<Reference />} />
                </Routes>
            </AnimatePresence>
            <Menu />           
        </div> 
        </>
    );
}

export default App;


