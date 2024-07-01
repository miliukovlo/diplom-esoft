import React from 'react';
import './CompanyPageStyle.css'
import { Params, useParams } from 'react-router-dom';
import CompanyContent from '../../components/CompanyPage/CompanyContent';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import { useGetForCompany } from '../../Hooks/useGetForCompany';

const CompanyPage: React.FC = () => {
    const companyId: Readonly<Params<string>> = useParams()
    const companyInformation: CompanyInterface = useGetForCompany<CompanyInterface>('company', companyId.id)!

    return (
        <main className='main'>
            <CompanyContent
                logo={companyInformation.logo}
                name={companyInformation.name}
                slogan={companyInformation.slogan}
                specialization={companyInformation.specialization}
                rating={companyInformation.rating}
                id={companyInformation.id}
            />
        </main>
    );
}

export default CompanyPage;
