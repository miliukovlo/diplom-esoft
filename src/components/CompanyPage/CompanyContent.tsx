import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';
import { useTextarea } from '../../Hooks/useTextarea';
import { useDispatch } from 'react-redux';
import { addComment } from '../../data/reducers/commentsReducer';
import CompanyComments from './CompanyComments/CompanyComments';
import ProjectsList from './ProjectsBlock/ProjectsList';
import { GetId } from '../../Hooks/GetId';

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

    const dispatch = useDispatch()

    const commentValue = useTextarea('')
    const commentId = GetId('comment')
    const handleAddComment = () => {
            dispatch(addComment({
                data: commentValue.value,
                user: 'Пользователь',
                companyId: id,
                id: commentId
            }))
            commentValue.setValue('')
    }

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
            <CompanyComments
                value={commentValue.value}
                onChange={commentValue.onChange}
                handleAddComment={handleAddComment}
                id={id}
            />
        </div>
    );
}

export default CompanyContent;
