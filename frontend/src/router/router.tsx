import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/LoginPage';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../Pages/MainPage.tsx/MainPage';
import CompanyPage from '../Pages/CompanyPage/CompanyPage';
import FavoritePage from '../Pages/FavoritePage/FavoritePage';
import ProjectPage from '../Pages/ProjectPage/ProjectPage';
import ApartmentPage from '../Pages/ApartmentPage/ApartmentPage';
import UserPage from '../Pages/UserPage/UserPage';
import AdminPage from '../Pages/AdminPage/AdminPage';
import CreateProjectPage from '../Pages/CreateProjectPage/CreateProjectPage';
import CreateApartmentPage from '../Pages/CreateApartmentPage/CreateApartmentPage';
import { useSelector } from 'react-redux';
import { RootState } from '../data/reducers/store';
import { UserInterface } from '../Interfaces/UserInterface';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

const Router : React.FC = () => {

    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])
    const [isLogin, setIsLogin] = useState<boolean>(false)
    useEffect(() => {
        if (localStorage.getItem('isLogin')) {
            setIsLogin(true)
        }
    }, [setIsLogin])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/favorite' element={<FavoritePage/>}/>
                    <Route path='/company/:id' element={<CompanyPage/>}/>
                    <Route path='/company/:id/project/:projectId' element={<ProjectPage/>}/>
                    <Route path='/company/:id/project/:projectId/apartment/:apartmentId' element={<ApartmentPage/>}/>
                    {getUser[0].isAdmin ?
                        <>
                            <Route path='/admin' element={<AdminPage/>}/>
                            <Route path='/admin/:companyId' element={<CreateProjectPage/>}/>
                            <Route path='/admin/:companyId/:projectId' element={<CreateApartmentPage/>}/>
                        </>
                        :
                        <Route path='/user' element={<UserPage/>}/>
                    }
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;