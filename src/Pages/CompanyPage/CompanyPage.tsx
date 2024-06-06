import React from 'react';
import './CompanyPageStyle.css'
import { useGetCurrentCompany } from '../../Hooks/useGetCurrentCompany';
import { useParams } from 'react-router-dom';
import CompanyContent from '../../components/CompanyPage/CompanyContent';
import CompanyInterface from '../../Interfaces/CompanyInterface';

const CompanyPage: React.FC = () => {
    const companyId = useParams()
    const companyInformation: CompanyInterface = useGetCurrentCompany(companyId.id)!

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
