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
   
    return (
 <>
           
        asd a fasz kivan
        {/* <div className="main-container">

            <AnimatePresence mode="wait">
                <Routes location={location} key = {location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/references" element={<Reference />} />
                </Routes>  */}
            {/* </AnimatePresence> */}
            {/* <Menu />            */}
        {/* </div> */}
        </>
    );
}

export default App;


