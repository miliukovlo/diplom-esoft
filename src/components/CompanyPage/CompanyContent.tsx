import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';
import { useTextarea } from '../../Hooks/useTextarea';
import ProjectsList from './ProjectsBlock/ProjectsList';
import CommentList from '../Common/CommentList/CommentList';

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
            <ProjectsList
                companyId={id}
            />
            <CommentList
                value={commentValue.value}
                onChange={commentValue.onChange}
                setValue={commentValue.setValue}
                CompanyId={id}
                type='company'
            />
        </div>
    );
}

export default CompanyContent;
