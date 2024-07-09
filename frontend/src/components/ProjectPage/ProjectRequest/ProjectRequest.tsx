import React from 'react';
import Button from '../../UI/Button/Button';
import './ProjectRequestStyle.css'

const ProjectRequest = React.memo(() => {
    return (
        <div className="project-content__request">
            <Button
                text='Оставить заявку'
                size='xl'
                onClick={() => {console.log('Заявка')}}
            />
        </div>
    );
})

export default ProjectRequest;
