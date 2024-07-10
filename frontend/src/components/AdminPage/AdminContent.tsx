import React from 'react';
import './AdminContentStyle.css'
import AdminInformation from './AdminInformation/AdminInformation';
import { useInput } from '../../Hooks/useInput';
import UserConfig from '../Common/UserConfig/UserConfig';
import { UserPageInputInfoInterface } from '../../Interfaces/UserPageInputInfoInterface';
import ProjectsList from '../CompanyPage/ProjectsBlock/ProjectsList';
import AdminCreateProject from './AdminCreateProject/AdminCreateProject';
import AdminRequests from './AdminRequests/AdminRequests';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

interface AdminContentProps {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    phone: string,
    image: string | undefined,
    theme: string,
    companyId: string
}

const AdminContent: React.FC<AdminContentProps> = ({
    email,
    firstName,
    lastName,
    username,
    phone,
    image,
    theme,
    companyId
}) => {

    const inputsInfo: UserPageInputInfoInterface[] = [
        {
            parameterTitle: 'Сменить имя',
            id: 1,
            placeholderForNew: 'Введите новое имя',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить фамилию',
            id: 2,
            placeholderForNew: 'Введите новую фамилию',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить почту',
            id: 4,
            placeholderForNew: 'Введите новую почту',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить телефон',
            id: 5,
            placeholderForNew: 'Введите новый телефон',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить пароль',
            id: 6,
            placeholderForNew: 'Введите новый пароль',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
    ]

    const navigate = useNavigate()

    return (
        <div className='admin-content'>
            <AdminInformation
                    email={email}
                    firstName={firstName}
                    lastName={lastName}
                    username={username}
                    phone={phone}
                    image={image}
                    theme={theme}
            />
            <ProjectsList
                companyId={companyId}
                theme={theme}
                forWho='admin'
            />
            <AdminRequests
                theme={theme}
                companyId={companyId}
            />
            <AdminCreateProject
            companyId={companyId}
                theme={theme}
            />
            <UserConfig
                inputsInfo={inputsInfo}
                theme={theme}
            />
            <Button
                size='l'
                text='Выйти'
                onClick={() => {localStorage.removeItem('isLogin'); navigate('/')}}
            />
        </div>
    );
}

export default AdminContent;
