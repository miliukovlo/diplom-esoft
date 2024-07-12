import React from 'react';
import './CompanyPageStyle.css'
import { Params, useParams } from 'react-router-dom';
import CompanyContent from '../../components/CompanyPage/CompanyContent';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import { useGetForCompany } from '../../Hooks/useGetForCompany';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

const CompanyPage: React.FC = () => {
    const companyId: Readonly<Params<string>> = useParams()
    const companyInformation: CompanyInterface | undefined = useGetForCompany<CompanyInterface>('company', companyId.id)
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    if (!companyInformation) {
        return <div>Loading...</div>;
    }

    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            <CompanyContent
                logo={companyInformation.logo}
                name={companyInformation.name}
                slogan={companyInformation.slogan}
                specialization={companyInformation.specialization}
                id={companyInformation.id}
                theme={theme.theme}
            />
        </main>
    );
}

export default CompanyPage;
