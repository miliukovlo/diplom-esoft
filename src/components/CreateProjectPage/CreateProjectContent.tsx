// Ваш родительский компонент CreateProjectContent
import React, { useState } from 'react';
import './CreateProjectContentStyle.css'
import UploadBlock from './CreateInputsBlock/UploadBlock';
import { GetId } from '../../Hooks/GetId';
import { useInput } from '../../Hooks/useInput';
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useImageHandler } from '../../Hooks/useImage';

interface CreateProjectContentProps {
    theme: string,
    companyId: string
}

const CreateProjectContent: React.FC<CreateProjectContentProps> = React.memo(({
    theme, 
    companyId
}) => {

    const navigate = useNavigate()
    const imageForProject = useImageHandler()
    const projectTitle = useInput('')
    const projectDescription = useInput('')
    const [projectType, setProjectType] = useState<string>('apartment')
    const projectId = GetId('project')
    const [projectSettings, setProjectSettings] = useState<ProjectInterface>({
        title: projectTitle.value,
        description: projectDescription.value,
        companyId: companyId,
        id: projectId,
        poster: imageForProject.imageForProject,
        posterUrl: imageForProject.imageUrl,
        type: projectType,
        watch: 0
    })

    return (
        <div className='create-project__content'>
            <h2 className={theme === 'dark' ? "info-title light-title" : 'info-title dark-title'}>Настройка проекта</h2>
            <UploadBlock
                handleImageChange={imageForProject.handleImageChange}
                theme={theme}
                type={'project'}
                projectId={GetId('project')}
            />
            {imageForProject.imageUrl && <img src={imageForProject.imageUrl} className='project-image' alt="Изображение проекта" />}
            <Input
                size='l'
                placeholder='Введите название проекта'
                onChange={projectTitle.onChange}
                value={projectTitle.value}
                type='text'
            />
            <Input
                size='l'
                placeholder='Введите описание проекта'
                onChange={projectDescription.onChange}
                value={projectDescription.value}
                type='text'
            />
            <select name="" id="" value={projectType} onChange={(e) => {setProjectType(e.target.value)}}>
                <option value="apartment">Квартиры</option>
                <option value="house">Частный дом</option>
            </select>
            <Button
                text='Создать проект'
                size='l'
                onClick={() => {console.log('Проект создан!'); navigate(`/admin/${companyId}/${projectId}`)}}
            />
        </div>
    );
});

export default CreateProjectContent;
