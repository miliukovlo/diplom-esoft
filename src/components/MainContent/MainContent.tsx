import React from 'react';
import './MainContentStyle.css'
import { useSelector } from 'react-redux';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import { RootState } from '../../data/reducers/store';
import CompanyBlock from '../Common/CompanyBlock/CompanyBlock';

const MainContent: React.FC = () => {
    const companies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])

    return (
        <main className='main main-content'>
            <div className="companies-block">
                {
                    companies.map((company: CompanyInterface) => {
                        return (
                            <CompanyBlock
                                name={company.name}
                                id={company.id}
                                slogan={company.slogan}
                                logo={company.logo}
                                specialization={company.specialization}
                                rating={company.rating}
                            />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default MainContent;
