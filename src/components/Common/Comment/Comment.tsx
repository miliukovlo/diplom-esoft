import React from 'react';
import './CommentStyle.css'
interface CommentProps {
    user: string,
    data: string,
    theme: string
}

const Comment: React.FC<CommentProps> = React.memo(({
    user,
    data,
    theme
}: CommentProps) => {
    return (
        <div className={theme === 'dark' ? 'comment-block comment-block-dark' : 'comment-block comment-block-light'}>
            <h1 className={theme === 'dark' ? 'comment-block__user light-title' : 'comment-block__user dark-title'}>{user}</h1>
            <p className={theme === 'dark' ? 'comment-block__data light-title' : 'comment-block__data dark-title'}>{data}</p>
        </div>
    );
})

export default Comment;
