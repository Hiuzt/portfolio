import {Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import { AnimatePresence } from "framer-motion";
import Resume from "./pages/Resume";
import Reference from "./pages/Reference";
import Settings from "./components/Settings";



function App() {
    const location = useLocation();

    return (
 <>

        <Settings />
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


