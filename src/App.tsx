import React from 'react';
import './index.scss';
import {BrowserRouter,Link, Routes, Route} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";


const App = () => {

    return (
        <>
            <div>
                <Link to ={'/'}>Главная </Link>
                <Link to ={'/about'}>О странице</Link>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
