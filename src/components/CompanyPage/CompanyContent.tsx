import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';
import Textarea from '../UI/Textarea/Textarea';
import { useTextarea } from '../../Hooks/useTextarea';

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

    const commentValue = useTextarea('')

    return (
        <div className="company-content">
            <CompanyHeader
                logo={logo}
                name={name}
                slogan={slogan}
                rating={rating}
                specialization={specialization}
            />
            <Textarea
                placeholder='Напишите комментарий'
                size='m'
                value={commentValue.value}
                onChange={commentValue.onChange}
            />
        </div>
    );
}

export default CompanyContent;
