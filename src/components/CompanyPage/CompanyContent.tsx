import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';
import Textarea from '../UI/Textarea/Textarea';
import { useTextarea } from '../../Hooks/useTextarea';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addComment } from '../../data/reducers/commentsReducer';

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
    const handleAddComment = () => {

        dispatch(addComment({
            data: commentValue.value,
            user: 'Пользователь',
            companyId: id
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
            <Textarea
                placeholder='Напишите комментарий'
                size='m'
                value={commentValue.value}
                onChange={commentValue.onChange}
            />
            <Button
                text='Добавить комментарий'
                size='m'
                onClick={handleAddComment}
            />
        </div>
    );
}

export default CompanyContent;
