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
    specialization,
    id,
    theme
}: CurrentCompanyInterface) => {


    const commentValue = useTextarea('')

    return (
        <div className="company-content">
            <CompanyHeader
                logo={"https://www.terminaldesign.ru/upload/medialibrary/d57/d577d47ef993c04b22599ba9de8b75dc.jpg"!}
                name={name}
                slogan={slogan}
                specialization={specialization}
                theme={theme}
            />
            <ProjectsList
                companyId={id}
                theme={theme}
                forWho='user'
            />
            <CommentList
                forWho='company'
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
