import React from 'react';
import './CommentStyle.css'
interface CommentProps {
    user: string,
    data: string
}

const Comment: React.FC<CommentProps> = React.memo(({
    user,
    data
}: CommentProps) => {
    return (
        <div className='comment-block'>
            <h1 className='comment-block__user'>{user}</h1>
            <p className="comment-block__data">{data}</p>
        </div>
    );
})

export default Comment;
