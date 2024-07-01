import React, { useEffect } from 'react';
import Comment from '../../Common/Comment/Comment';
import './CommentsBlockStyle.css'
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { CommentInterface } from '../../../Interfaces/CommentInterface';

interface CommentsBlockProps {
    CompanyId: string
}

const CommentsBlock: React.FC<CommentsBlockProps> = React.memo(({CompanyId}: CommentsBlockProps) => {

    const comments = useGetForCompany<CommentInterface[]>('comment', CompanyId)
    useEffect(() => {
        console.log(CompanyId)
        console.log(comments)
    }, [comments, CompanyId])

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
