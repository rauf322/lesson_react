import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Routes, Route} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import { classNames } from './helper/classNames/classNames';


const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
            <div className={classNames('app', {},[theme])}>
                <button onClick={toggleTheme}>Toggle</button>
                <Link to={'/'}>Главная </Link>
                <Link to={'/about'}>О странице</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
            </div>
    );
};

export default App;
