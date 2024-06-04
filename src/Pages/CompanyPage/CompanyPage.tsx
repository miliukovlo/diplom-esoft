import React, { useEffect } from 'react';
import './CompanyPageStyle.css'
import { useGetCurrentCompany } from '../../Hooks/useGetCurrentCompany';
import { useParams } from 'react-router-dom';

const CompanyPage: React.FC = () => {
    const companyId = useParams()
    const companyInformation = useGetCurrentCompany(companyId.id)

    useEffect(() => {
        console.log(companyInformation)
    }, [companyInformation])

    return (
        <main className='main'>
            
        </main>
    );
}

export default CompanyPage;
