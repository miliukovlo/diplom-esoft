import React from 'react';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';
import CommentsBlock from '../CommentBlock/CommentsBlock';

interface CompanyCommentsProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    handleAddComment: () => void,
    id: string
}

const CompanyComments: React.FC<CompanyCommentsProps> = React.memo(({
    value,
    onChange,
    handleAddComment,
    id
}: CompanyCommentsProps) => {
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
                CompanyId={id}
            />
        </>
    );
})

export default CompanyComments;
