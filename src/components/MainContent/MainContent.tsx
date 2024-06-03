import React, { useEffect } from 'react';
import './MainContentStyle.css'
import { useSelector } from 'react-redux';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import { RootState } from '../../data/reducers/store';

const MainContent = () => {
    const companies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])

    useEffect(() => {
        console.log(companies)
    }, [companies])

    return (
        <main className='main'>
            
        </main>
    );
}

export default MainContent;
