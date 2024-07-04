import React from 'react';

interface ProjectImageProps {
    poster: string
}

const ProjectImage: React.FC<ProjectImageProps> = React.memo(({
    poster
}: ProjectImageProps) => {
    return (
        <div className="project-content__image-block">
            <img src={poster} alt="Постер проекта" className='project-content__image' />
        </div>
    );
})

export default ProjectImage;
