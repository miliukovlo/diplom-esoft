import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';

interface CurrentCompanyInterface extends CompanyInterface {
    
}

const CompanyContent: React.FC<CurrentCompanyInterface> = ({
    logo,
    name,
    slogan,
    rating,
    specialization,
    id
}: CurrentCompanyInterface) => {
    return (
        <div className="company-content">
            <CompanyHeader
                logo={logo}
                name={name}
                slogan={slogan}
                rating={rating}
                specialization={specialization}
            />
        </div>
    );
}

export default CompanyContent;
