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
        const activeColor = localStorage.getItem("main-color");
        if (activeColor === null) {
            localStorage.setItem("main-color", 5)
            document.body.addClass("color-5")
            setColor(5);
            return;
        }

        const storageItemLanguageID = localStorage.getItem("languageID")

        if (storageItemLanguageID === null) {
            localStorage.setItem("languageID", 1)
            location.reload();
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
        // $(".language-selector img.active-language").removeClass("active-language")
        // target.classList.add("active-language")

    }

    return (
 <>
           
        
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


