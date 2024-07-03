import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/LoginPage';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../Pages/MainPage.tsx/MainPage';
import CompanyPage from '../Pages/CompanyPage/CompanyPage';
import FavoritePage from '../Pages/FavoritePage/FavoritePage';
import ProjectPage from '../Pages/ProjectPage/ProjectPage';

const Router : React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/favorite' element={<FavoritePage/>}/>
                    <Route path='/company/:id' element={<CompanyPage/>}/>
                    <Route path='/company/:id/project/:projectId' element={<ProjectPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;