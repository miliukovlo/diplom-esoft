import React from 'react';
import Header from '../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';

const MainLayout : React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;
