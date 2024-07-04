import React from 'react';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';
import CommentsBlock from '../../CompanyPage/CommentBlock/CommentsBlock';
import { useDispatch } from 'react-redux';
import { addComment } from '../../../data/reducers/commentsReducer';
import { GetId } from '../../../Hooks/GetId';

interface CommentListProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    CompanyId?: string,
    type: string,
    projectId?: number
}

const CommentList: React.FC<CommentListProps> = React.memo(({
    value,
    onChange,
    CompanyId,
    setValue,
    type,
    projectId
}: CommentListProps) => {

    const dispatch = useDispatch()
    const commentId = GetId('comment')

    const handleAddComment = () => {
        dispatch(addComment({
            data: value,
            user: 'Пользователь',
            companyId: CompanyId,
            id: commentId,
            projectId: projectId
        }))
        setValue('')
}

    return (
        <>
            <Textarea
                placeholder='Напишите комментарий'
                size='m'
                value={value}
                onChange={onChange}
            />
            <Button
                text='Добавить комментарий'
                size='m'
                onClick={handleAddComment}
            />
            <CommentsBlock
                CompanyId={CompanyId}
                type={type}
                ProjectId={projectId}
            />
        </>
    );
})

export default CommentList;
