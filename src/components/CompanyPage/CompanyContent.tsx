import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'
import CompanyHeader from './CompanyHeader/CompanyHeader';
import Textarea from '../UI/Textarea/Textarea';
import { useTextarea } from '../../Hooks/useTextarea';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addComment } from '../../data/reducers/commentsReducer';
import CommentsBlock from './CommentBlock/CommentsBlock';
import { GetIdForComment } from '../../Hooks/GetIdForComment';

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
    const commentId = GetIdForComment()
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
            <CommentsBlock
                CompanyId={id}
            />
        </div>
    );
}

export default CompanyContent;
