import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/LoginPage';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../Pages/MainPage.tsx/MainPage';

const Router : React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
