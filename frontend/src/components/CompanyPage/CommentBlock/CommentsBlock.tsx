import React from 'react';
import Comment from '../../Common/Comment/Comment';
import './CommentsBlockStyle.css'
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { CommentInterface } from '../../../Interfaces/CommentInterface';

interface CommentsBlockProps {
    CompanyId?: string,
    ProjectId?: string,
    ApartmentId?: string,
    type: string,
    theme: string
}

const CommentsBlock: React.FC<CommentsBlockProps> = React.memo(({CompanyId, ProjectId, ApartmentId, type, theme}: CommentsBlockProps) => {
    const comments = useGetForCompany<CommentInterface[]>(type === 'company' ? 'comment-for-company' :
            type === 'project' ? 'comment-for-project' : 
            type === 'apartment' ? 'comment-for-apartment' : 
            'comment-for-company', 
            CompanyId, ProjectId, ApartmentId)

    return (
        <div className={theme === 'dark' ? 'comments-list list-black' : 'comments-list list-light'}>
            {
                comments?.length !== 0 && comments !== undefined ?
                comments.map(comment => {
                    return (
                        <Comment
                            user={comment.username}
                            data={comment.commentData}
                            key={comment.id}
                            theme={theme}
                        />
                    )
                })
                :
                <h1 className={theme === 'dark' ? 'comments-list__no-comments-msg light-title' : 'comments-list__no-comments-msg dark-title'}>Комментариев нет!</h1>
            }
        </div>
    );
})

export default CommentsBlock;
