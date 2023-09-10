import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

// import $ from "jquery"
import store from "./redux/store"
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
            <Routes>
                <Route path="/*" element={            
                    <Provider store={store}>
                        <App />
                    </Provider>
                } />
            </Routes>
        </BrowserRouter>
        // <App />
   
        
);
