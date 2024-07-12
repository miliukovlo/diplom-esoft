import React, { useEffect } from 'react';
import './MainContentStyle.css'
import { useSelector } from 'react-redux';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import { RootState } from '../../data/reducers/store';
import CompanyBlock from '../Common/CompanyBlock/CompanyBlock';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import { UserInterface } from '../../Interfaces/UserInterface';

const MainContent: React.FC = () => {
    const companies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)
    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])

    useEffect(() => {
    }, [])
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
                                logo={"https://www.terminaldesign.ru/upload/medialibrary/d57/d577d47ef993c04b22599ba9de8b75dc.jpg"}
                                specialization={company.specialization}
                                key={company.id}
                                theme={theme.theme}
                                username={getUser[0].username!}
                            />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default MainContent;
