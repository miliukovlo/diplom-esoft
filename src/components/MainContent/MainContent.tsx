import React from 'react';
import './MainContentStyle.css'
import { useSelector } from 'react-redux';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import { RootState } from '../../data/reducers/store';
import CompanyBlock from '../Common/CompanyBlock/CompanyBlock';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

const MainContent: React.FC = () => {
    const companies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main main-content dark-back' : 'main main-content light-back'}>
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
                                key={company.id}
                                theme={theme.theme}
                            />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default MainContent;
