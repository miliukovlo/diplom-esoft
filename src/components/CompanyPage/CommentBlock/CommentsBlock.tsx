import React, { useEffect } from 'react';
import { useGetCommentsForCompany } from '../../../Hooks/useGetCommentsForCompany';
import Comment from '../../Common/Comment/Comment';
import './CommentsBlockStyle.css'

interface CommentsBlockProps {
    CompanyId: string
}

const CommentsBlock: React.FC<CommentsBlockProps> = React.memo(({CompanyId}: CommentsBlockProps) => {

    const comments = useGetCommentsForCompany(CompanyId)
    useEffect(() => {
        console.log(CompanyId)
        console.log(comments)
    }, [comments, CompanyId])

    return (
        <div className='comments-list'>
            {
                comments?.length !== 0 && comments !== null?
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
