import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./redux/store"
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        asd
   
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={            
                    <Provider store={store}>
                        <App />
                    </Provider>
                } />
            </Routes>
        </BrowserRouter>
        </>
   
        
);
