import React from 'react';
import Comment from '../../Common/Comment/Comment';
import './CommentsBlockStyle.css'
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { CommentInterface } from '../../../Interfaces/CommentInterface';

interface CommentsBlockProps {
    CompanyId?: string,
    ProjectId?: number,
    ApartmentId?: number,
    type: string
}

const CommentsBlock: React.FC<CommentsBlockProps> = React.memo(({CompanyId, ProjectId, ApartmentId, type}: CommentsBlockProps) => {
    const comments = useGetForCompany<CommentInterface[]>(type === 'company' ? 'comment-for-company' :
            type === 'project' ? 'comment-for-project' : 
            type === 'apartment' ? 'comment-for-apartment' : 
            'comment-for-company', 
            CompanyId, ProjectId, ApartmentId)

    return (
        <div className='comments-list'>
            {
                comments?.length !== 0 && comments !== undefined ?
                comments.map(comment => {
                    return (
                        <Comment
                            user={comment.user}
                            data={comment.data}
                            key={comment.id}
                        />
                    )
                })
                :
                <h1 className='comments-list__no-comments-msg'>Комментариев нет!</h1>
            }
        </div>
    );
})

export default CommentsBlock;
