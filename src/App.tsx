import React, {Suspense} from 'react';
import './index.scss';
import {Link, Routes, Route} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";


const App = () => {

    return (
        <>
            <div>
                <Link to={'/'}>Главная </Link>
                <Link to={'/about'}>О странице</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
            </div>
        </>
    );
};

export default App;
