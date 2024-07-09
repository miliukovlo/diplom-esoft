// Ваш дочерний компонент UploadBlock
import React from 'react';

interface UploadBlockProps {
    projectId: number,
    type: 'project' | 'apartment',
    theme: string,
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UploadBlock: React.FC<UploadBlockProps> = React.memo(({ projectId, type, theme, handleImageChange }) => {
    return (
        <div className="upload-block">
            <input onChange={handleImageChange} type="file" id={`upload-${projectId}`} accept='image/png, image/jpeg' />
        </div>
    )
})

export default UploadBlock;
