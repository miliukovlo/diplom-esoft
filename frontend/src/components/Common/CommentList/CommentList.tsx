import React from 'react';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';
import CommentsBlock from '../../CompanyPage/CommentBlock/CommentsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../data/reducers/commentsReducer';
import { v4 as uuidv4 } from 'uuid';
import { UserInterface } from '../../../Interfaces/UserInterface';
import { RootState } from '../../../data/reducers/store';

interface CommentListProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    CompanyId?: string,
    type: string,
    projectId?: string,
    apartmentId?: string,
    theme: string,
    forWho: string,

}

const CommentList: React.FC<CommentListProps> = React.memo(({
    value,
    onChange,
    CompanyId,
    setValue,
    type,
    projectId,
    apartmentId,
    theme,
    forWho,
}: CommentListProps) => {

    const dispatch = useDispatch()
    const commentId = uuidv4()
    const getUser = useSelector((state: RootState) => state.user.user as UserInterface[])

    const handleAddComment = () => {
        dispatch(addComment({
            // data: value,
            // user: 'Пользователь',
            // companyId: CompanyId,
            // id: commentId,
            // projectId: projectId,
            // apartmentId: apartmentId
            id: commentId,
            projectId: projectId,
            commentData: value,
            forCompany: forWho === 'company' ? true : false,
            forProject: forWho === 'project' ? true : false,
            forApartment: forWho === 'apartment' ? true : false,
            apartmentId: apartmentId!,
            companyId: CompanyId!,
            username: getUser[0].username!
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
                ApartmentId={apartmentId}
                type={type}
                ProjectId={projectId}
                theme={theme}
            />
        </>
    );
})

export default CommentList;
