import React from 'react';
import './index.scss';
import {BrowserRouter,Link, Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {

    return (
        <>
            <div>
                <Link to ={'/'}>Главная </Link>
                <Link to ={'/about'}>О странице</Link>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
