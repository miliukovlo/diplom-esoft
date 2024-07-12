import React from 'react';
import './ProjectContentStyle.css'
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import ProjectImage from './ProjectImage/ProjectImage';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectRequest from './ProjectRequest/ProjectRequest';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';
import ProjectApartmentList from './ProjectApartmentList/ProjectApartmentList';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { UserInterface } from '../../Interfaces/UserInterface';

export interface ProjectContentProps extends ProjectInterface {
    theme: string
}

const ProjectContent: React.FC<ProjectContentProps> = React.memo(({
    title,
    id,
    description,
    posterUrl,
    type,
    companyId,
    theme
}: ProjectContentProps) => {

    const commentValue = useTextarea<string>('')
    const getUser = useSelector((state: RootState) => state.user.user as UserInterface[])
    const currentUser = getUser[0]

    return (
        <div className='project-content'>
            <h1 className={theme === 'dark' ? 'project-content__title light-title' : 'project-content__title dark-title'}>{title}</h1>
            <ProjectImage
                posterUrl={posterUrl}
            />
            <ProjectInfo
                type={type}
                description={description}
                theme={theme}
            />
            <ProjectRequest
                project_id={id}
                apartment_id={null}
                company_id={companyId}
                username={currentUser.username!}
                first_name={currentUser.firstName!}
                last_name={currentUser.lastName!}
                email={currentUser.email!}
                phone={currentUser.phone!}
            />
            <ProjectApartmentList
                projectId={id}
                companyId={companyId}
                theme={theme}
            />
            <CommentList
                type={'project'}
                forWho='project'
                value={commentValue.value}
                onChange={commentValue.onChange}
                setValue={commentValue.setValue}
                projectId={id}
                theme={theme}
            />
        </div>
    );
})

export default ProjectContent;
