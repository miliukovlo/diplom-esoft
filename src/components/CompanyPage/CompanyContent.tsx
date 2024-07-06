import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';
import { useTextarea } from '../../Hooks/useTextarea';
import ProjectsList from './ProjectsBlock/ProjectsList';
import CommentList from '../Common/CommentList/CommentList';

interface CurrentCompanyInterface extends CompanyInterface {
    theme: string
}

const CompanyContent: React.FC<CurrentCompanyInterface> = ({
    logo,
    name,
    slogan,
    rating,
    specialization,
    id,
    theme
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
                theme={theme}
            />
            <ProjectsList
                companyId={id}
                theme={theme}
            />
            <CommentList
                value={commentValue.value}
                onChange={commentValue.onChange}
                setValue={commentValue.setValue}
                CompanyId={id}
                type='company'
                theme={theme}
            />
        </div>
    );
}

export default CompanyContent;
