import React from 'react';
import Header from '../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout : React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default MainLayout;
